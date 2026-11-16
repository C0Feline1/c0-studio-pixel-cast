-- Rebuild and verify editable, flattened Aseprite documents from shipped PNGs.
-- aseprite -b --script-param root=/path/to/repository --script tools/export_aseprite.lua
local root=assert(app.params.root, 'Pass --script-param root=/path/to/repository')
local function join(...) return app.fs.joinPath(...) end
local file=assert(io.open(join(root,'assets','manifest.json'),'r'))
local manifest=json.decode(file:read('*a'));file:close()
local checked,documents=0,0
local function duration(ms,n)
  return (math.floor((n+1)*ms+0.5)-math.floor(n*ms+0.5))/1000
end
local function saveVerify(sprite,path,expected,tags)
  sprite:saveAs(path);sprite:close()
  local reopened=assert(app.open(path))
  assert(#reopened.frames==#expected,'Frame count: '..path)
  assert(#reopened.tags==#tags,'Tag count: '..path)
  for i,t in ipairs(tags) do
    local actual=nil; for _,candidate in ipairs(reopened.tags) do if candidate.name==t.name then actual=candidate; break end end; assert(actual, t.name)
    assert(actual.name==t.name and actual.fromFrame.frameNumber==t.first and actual.toFrame.frameNumber==t.last,'Tag mismatch')
  end
  for i,e in ipairs(expected) do
    local actual=Image(reopened.width,reopened.height,ColorMode.RGB)
    actual:drawSprite(reopened,i)
    assert(actual.bytes==e.image.bytes,'Pixel mismatch: '..path..' frame '..i)
    assert(math.abs(reopened.frames[i].duration-e.time)<0.00001,'Duration mismatch')
    checked=checked+1
  end
  reopened:close();documents=documents+1
end
local function animated(character,expression)
  local dir=join(root,'assets',character.id)
  local sprite=Sprite(48,64,ColorMode.RGB)
  sprite.layers[1].name='Artwork (flattened)'
  local expected,tags={},{}
  local actions=expression and {{id='expressions',count=#manifest.expressionOrder,frameMs=100}} or character.actions
  for _,action in ipairs(actions) do
    local sheet=Image{fromFile=join(dir,action.id..'.png')}
    assert(sheet.width==576 and sheet.height==128)
    for row,direction in ipairs(manifest.directions) do
      local start=#expected+1
      for n=0,action.count-1 do
        local image=Image(sheet,Rectangle(n*48,(row-1)*64,48,64))
        local index=#expected+1
        local frame=index==1 and sprite.frames[1] or sprite:newEmptyFrame(#sprite.frames+1)
        frame.duration=duration(action.frameMs,n)
        sprite:newCel(sprite.layers[1],frame,image,Point(0,0))
        expected[index]={image=image,time=duration(action.frameMs,n)}
        if expression then
          local tag={}
          tag.name=manifest.expressionOrder[n+1]..'_'..direction
          tags[#tags+1]={name=tag.name,first=index,last=index}
        end
      end
      if not expression then
        local tag={};tag.name=action.id..'_'..direction
        tags[#tags+1]={name=tag.name,first=start,last=#expected}
      end
    end
  end
  for _,t in ipairs(tags) do local tag=sprite:newTag(t.first,t.last); tag.name=t.name end
  local name=expression and 'expressions.aseprite' or character.id..'.aseprite'
  saveVerify(sprite,join(dir,name),expected,tags)
end
for _,character in ipairs(manifest.characters) do
  animated(character,false);animated(character,true)
  for _,name in ipairs({'portrait','badge'}) do
    local path=join(root,'assets',character.id,name)
    local sprite=app.open(path..'.png')
    sprite.layers[1].name='Artwork (flattened)'
    saveVerify(sprite,path..'.aseprite',{{image=Image{fromFile=path..'.png'},time=sprite.frames[1].duration}}, {})
  end
  print('Verified '..character.id..': animations, expressions, portrait, badge')
end
print('PASS: '..documents..' Aseprite documents; '..checked..' frames verified after reopening.')



