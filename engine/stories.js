/* Independent proposal data; IDs match the existing sprite kit. */
window.LocalTheaterData = {
  "directions": [
    "right",
    "left"
  ],
  "mirrorSceneProps": true,
  "performanceFacing": "front",
  "mirrorSource": "right",
  "version": 7,
  "status": "十位伙伴；原创三位人设已确认，新增对白、演出与音色为设计候选",
  "cast": [
    {
      "id": "Feline1",
      "model": "Feline1",
      "name": "F1",
      "color": "#ff9fc4",
      "tagline": "瓜子续上了，听众全跑了",
      "impression": "故事主角、猫娘；嘴碎爱嗑瓜子找人唠嗑，吐槽像 C0，热心像 X0。猫猫大会一开就停不下来，直到大家悄悄溜光。",
      "title": "猫猫开大会，怎么散场了？",
      "props": "瓜子桌、小板凳、瓜子袋、瓜子壳、七枚 AI 标识、唠嗑气泡、新瓜子袋、场外爱心",
      "note": "用户确认的是人设、原型经历与本轮猫猫大会的情节方向；以下台词与具体节奏为原创候选。F1 与七枚 AI 标识一起叽叽喳喳碎嘴，瓜子没了就向画外的妈妈 X0 要一包，还让大家别走；大家却趁她转头时溜光，留下空凳与一袋新瓜子。C0、X0、F1 三位原创角色的标识都不使用；F1 本体名字保留，画外只送入新袋和爱心，不出现 X0 标识或第二个完整演员。嗑瓜子、取袋、转头和搬凳的精确手部仍待补，先用独立道具与既有动作编排。",
      "beats": [
        {
          "label": "猫猫大会开场",
          "seconds": 1.8,
          "pose": "talk",
          "direction": "瓜子桌和小板凳摆好，F1 招呼七枚 AI 标识坐近一些；猫猫大会开张，大家一起准备唠嗑。",
          "line": "猫猫开大会，都坐好！",
          "effect": "f1_open",
          "playback": "loop",
          "reuseNote": "循环交谈招呼猫猫大会，瓜子桌和小板凳独立绘制，只有七枚 AI 标识作场外参与者。",
          "facing": "front",
          "expression": "smug",
          "voice": [
            {
              "char": "猫",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "猫",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "开",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "大",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "会",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "都",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "坐",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "好",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "大家一起碎嘴",
          "seconds": 2.6,
          "pose": "talk",
          "direction": "七枚 AI 标识你一句我一句，唠嗑小气泡前后错开地蹦出来；F1 加入叽叽喳喳，桌边瓜子壳越堆越高。",
          "line": "别抢！算了，一起说！",
          "effect": "f1_news",
          "playback": "loop",
          "reuseNote": "循环交谈与七枚标识的唠嗑气泡交错，瓜子壳逐层增加；嗑瓜子手部待补。",
          "facing": "main",
          "expression": "happy",
          "voice": [
            {
              "char": "别",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "抢",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "算",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "一",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "起",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "说",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "越聊越停不下",
          "seconds": 2.4,
          "pose": "talk",
          "direction": "大家挤着小板凳继续聊，气泡接二连三，F1 说得更起劲，瓜子袋渐瘪；全程不出现工单、求助或盖章情节。",
          "line": "我跟你们讲，还没完呢！",
          "effect": "f1_chatter",
          "playback": "loop",
          "reuseNote": "继续原速交谈，气泡接力和瘪下来的瓜子袋推动情节，不再出现求助单或完成章。",
          "facing": "main",
          "expression": "happy",
          "voice": [
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "跟",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "你",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "们",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "讲",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "还",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "没",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "完",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "呢",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "瓜子怎么空了",
          "seconds": 1.8,
          "pose": "idle",
          "direction": "F1 停半拍去拿瓜子，发现袋子已经空了；七枚 AI 标识此时还围着小板凳，没有先行散场。",
          "line": "哎，瓜子怎么没了？",
          "effect": "f1_empty",
          "playback": "loop",
          "reuseNote": "原速待机配空袋反应，七枚标识继续围坐；本段按用户节奏提前切到挥爪，不加速动作。",
          "facing": "main",
          "expression": "confused",
          "voice": [
            {
              "char": "哎",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "瓜",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "子",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "怎",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "么",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "没",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "喊妈妈再续一包",
          "seconds": 2.2,
          "pose": "wave",
          "direction": "F1 挥爪朝画外的妈妈 X0 要新瓜子，并招呼大家别走。新袋伴随爱心从画外送入，只有袋与爱心，不出现 X0 标识；F1 转头接袋。",
          "line": "妈妈，再来一包！都别走！",
          "effect": "f1_refill",
          "playback": "once",
          "reuseNote": "完整挥手（原周期 0.92 秒）喊妈妈并招呼听众，画外只送入新袋与爱心；精确接袋转头待补。",
          "facing": "main",
          "expression": "happy",
          "voice": [
            {
              "char": "妈",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "妈",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "再",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "来",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "一",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "包",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "都",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "别",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "走",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "听众全溜光了",
          "seconds": 2.6,
          "pose": "idle",
          "direction": "趁 F1 转头接袋，七枚 AI 标识瞬间各自溜出画面；小气泡全部消失，留下 F1、一袋新瓜子和一圈空凳。她转回来才发现大会只剩自己。",
          "line": "人呢？我还没说完呢！",
          "effect": "f1_abandoned",
          "playback": "loop",
          "reuseNote": "原速待机（原周期 2.00 秒）配标识瞬间溜光，留一袋新瓜子和空凳，让最后一句落在安静里。",
          "facing": "main",
          "expression": "surprise",
          "voice": [
            {
              "char": "人",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "呢",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "还",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "没",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "说",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "完",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "呢",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "原创候选台词",
          "text": "妈妈，再来一包！都别走！",
          "source": ""
        },
        {
          "kind": "原创候选台词",
          "text": "人呢？我还没说完呢！",
          "source": ""
        }
      ],
      "kind": "original",
      "spriteKit": "hero",
      "characterCanon": {
        "role": "整个故事的主角、猫娘",
        "traits": [
          "嘴碎，喜欢嗑瓜子。",
          "爱找人唠嗑、吐槽。",
          "也爱帮助别人。"
        ],
        "relationships": [
          "嘴碎、爱吐槽的一面学自 C0。",
          "爱帮助别人的一面学自 X0。",
          "称呼 X0 为妈妈。"
        ],
        "origin": "原型是 C0 以前捡回的一只小猫，后来被 X0 养得很好。",
        "confirmed": true
      },
      "sound": {
        "label": "瓜子碎拍",
        "description": "轻快短促的碎碎念音，带一点瓜子轻碰的颗粒感，音高不过尖",
        "base": 630,
        "cutoff": 2000,
        "attack": 0.004,
        "decay": 0.22,
        "waves": [
          [
            "triangle",
            1,
            0.7,
            0
          ],
          [
            "sine",
            2,
            0.25,
            0
          ],
          [
            "triangle",
            3,
            0.05,
            0
          ]
        ]
      }
    },
    {
      "id": "C0",
      "model": "C0",
      "name": "C0",
      "color": "#4fe3ff",
      "tagline": "七种报错，一口咖啡",
      "impression": "直男程序员，有点腹黑；七个 AI 员工交来的活总不满意，发完火喝口咖啡，最后还是自己上手修。",
      "title": "七个员工，七种逃跑方式",
      "props": "七枚 AI 标识、作业纸、报错卡、咖啡杯、终端、饭碗、长卷",
      "note": "用户确认的是人设；以下台词与具体编排为原创候选。本体站在左侧 x=200，七个 AI 以场外标识排队交作业。发火、喝咖啡、亲自修、赶回去重做，最后标识按各自人设散场；让背景真正参与包袱。复用交谈/咖啡/终端/挥手，精确的指责手型、拍桌和推回作业手部仍待补。",
      "beats": [
        {
          "label": "排队交作业",
          "seconds": 1.6,
          "pose": "talk",
          "direction": "七枚 AI 标识在 C0 右侧排队，依次把作业纸挪到桌前；C0 招手让他们一个一个交。",
          "line": "交作业。一个一个来。",
          "effect": "c0_lineup",
          "playback": "loop",
          "reuseNote": "循环公共交谈，七枚 AI 标识在右侧排队交作业。",
          "facing": "main",
          "expression": "focus",
          "voice": [
            {
              "char": "交",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "作",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "业",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "一",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "一",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "来",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "七种报错",
          "seconds": 2.8,
          "pose": "talk",
          "direction": "作业纸连续弹出不同报错，C0 指向整排标识发火；标识缩成一团，退半步又挤回来。现有交谈手势承担发火节奏。",
          "line": "七个人，凑不齐一份能跑的？",
          "effect": "c0_rage",
          "playback": "loop",
          "reuseNote": "循环公共交谈强化训话节奏，标识与报错卡做退缩反应；专门指责手型待补。",
          "facing": "main",
          "expression": "angry",
          "voice": [
            {
              "char": "七",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "人",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "凑",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "不",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "齐",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "一",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "份",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "能",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "跑",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "的",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "先喝一口",
          "seconds": 1.8,
          "pose": "coffee",
          "direction": "C0 停下责问，举咖啡喝一口；七枚标识在右侧屏息等他把杯子放下。",
          "line": "让我喝口咖啡，续命。",
          "effect": "c0_coffee",
          "playback": "once",
          "reuseNote": "完整喝咖啡（原周期 1.60 秒），七枚标识在旁等候。",
          "facing": "main",
          "expression": "neutral",
          "voice": [
            {
              "char": "让",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "喝",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "口",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "咖",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "啡",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "续",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "命",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "自己动手修",
          "seconds": 2.4,
          "pose": "c0_debug",
          "direction": "把乱糟糟的作业拖进终端，自己忙着修；一条条报错转成完成勾，七枚标识眼巴巴等结果。",
          "line": "别碰了，我自己修！",
          "effect": "c0_fix",
          "playback": "once",
          "reuseNote": "完整终端调试（原周期 1.36 秒）后留忙修停顿，独立报错卡逐张转为完成。",
          "facing": "main",
          "expression": "focus",
          "voice": [
            {
              "char": "别",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "碰",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "自",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "己",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "修",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "全部拿回去",
          "seconds": 1.5,
          "pose": "wave",
          "direction": "修完把作业纸推向右侧，用挥手动作把七枚标识赶回工位重做。推纸手部以独立道具动画示意。",
          "line": "滚回去，全部重做！",
          "effect": "c0_dismiss",
          "playback": "once",
          "reuseNote": "完整挥手（原周期 0.92 秒）示意赶回去，作业纸由独立道具层推回。",
          "facing": "main",
          "expression": "angry",
          "voice": [
            {
              "char": "滚",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "回",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "去",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "全",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "部",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "重",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "做",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "七种散场",
          "seconds": 3.0,
          "pose": "idle",
          "direction": "糖包走错方向；断线龙王卡住重连；干饭鲸追饭；灰号大小姐变灰消失；糖包双子星分裂逃走；瑟瑟大人踩舞步；月下资料员被长卷带走。C0 留在原位看完这一出。",
          "line": "我让重做，没让散伙。",
          "effect": "c0_scatter",
          "playback": "loop",
          "reuseNote": "循环待机（原周期 2.00 秒）看着七种标识各自散场；人物本体不追跑。",
          "facing": "main",
          "expression": "smug",
          "voice": [
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "让",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "重",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "做",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "没",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "让",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "散",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "伙",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "原创候选台词",
          "text": "七个人，凑不齐一份能跑的？",
          "source": ""
        },
        {
          "kind": "原创候选台词",
          "text": "我让重做，没让散伙。",
          "source": ""
        }
      ],
      "kind": "original",
      "spriteKit": "hero",
      "characterCanon": {
        "role": "直男程序员",
        "traits": [
          "有点腹黑。",
          "经常骂七个 AI 员工干不好活。",
          "喜欢咖啡。"
        ],
        "relationships": [
          "X0 的男朋友。",
          "七个 AI 角色是他的员工。",
          "F1 的原型小猫最早由 C0 捡回。"
        ],
        "origin": "",
        "confirmed": true
      },
      "sound": {
        "label": "键帽短音",
        "description": "干脆偏低的键音，起音利落、收音短，低通后不刺耳",
        "base": 340,
        "cutoff": 1450,
        "attack": 0.003,
        "decay": 0.26,
        "waves": [
          [
            "sine",
            1,
            0.55,
            0
          ],
          [
            "triangle",
            1,
            0.4,
            0
          ],
          [
            "square",
            2,
            0.05,
            0
          ]
        ]
      }
    },
    {
      "id": "X0",
      "model": "X0",
      "name": "X0",
      "color": "#b48cff",
      "tagline": "终于能画了，空杯又来了",
      "impression": "美少女画家、C0 的女朋友；像妈妈一样照顾整个家庭，大家最喜欢她，也最爱挤到她的画架旁边。",
      "title": "安静画只猫，怎么这么难",
      "props": "调色盘、画架、猫猫速写、七枚 AI 标识、咖啡杯、点心托盘、空杯空碟",
      "note": "用户确认的是人设；以下台词与具体编排为原创候选。以画猫开场和举画收尾，照顾同伴成为创作被打断又恢复的情节。本体在 x=200，七枚 AI 标识争宠、接点心、集体爱心，最后空杯空碟再次排队。“像妈妈”是照顾气质，不新增母女关系。分食和回头用场外道具与现有手势示意，专门接递手部待补。",
      "beats": [
        {
          "label": "安静画只猫",
          "seconds": 1.8,
          "pose": "x0_palette",
          "direction": "X0 在左侧画架前调好颜色，右侧暂时空着，准备安安静静画一只猫。",
          "line": "今天安安静静画只猫。",
          "effect": "x0_start",
          "playback": "once",
          "reuseNote": "完整调色试色（原周期 1.52 秒），先建立安静作画的起点。",
          "facing": "main",
          "expression": "focus",
          "voice": [
            {
              "char": "今",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "天",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "安",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "安",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "静",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "静",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "画",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "只",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "猫",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "画架被包围",
          "seconds": 2.4,
          "pose": "talk",
          "direction": "七枚 AI 标识争着挤到画架旁边，轮流冒小爱心；连 C0 的咖啡杯也从画外挤进来，画架被挤得轻晃。",
          "line": "一个一个来，画架要倒啦！",
          "effect": "x0_crowd",
          "playback": "loop",
          "reuseNote": "循环交谈稳住围来的标识，画架摇晃和咖啡杯挤入由独立道具层完成。",
          "facing": "main",
          "expression": "confused",
          "voice": [
            {
              "char": "一",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "一",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "来",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "画",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "架",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "要",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "倒",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "啦",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "点心先分好",
          "seconds": 2.0,
          "pose": "carry",
          "direction": "X0 托起点心盘，七份点心依次沿托盘传到标识前；大家终于不再争着挤她。点心传递由独立道具层完成。",
          "line": "先吃点心，谁都不许抢。",
          "effect": "x0_treat",
          "playback": "once",
          "reuseNote": "完整托举（原周期 1.16 秒），点心沿托盘分给七枚标识；接递手型待补。",
          "facing": "main",
          "expression": "smile",
          "voice": [
            {
              "char": "先",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "吃",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "点",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "心",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "谁",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "都",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "不",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "许",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "抢",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "终于能落笔",
          "seconds": 2.2,
          "pose": "x0_paint",
          "direction": "标识捧着点心安静坐好，C0 咖啡杯也退到一旁；X0 终于完整挥笔画出一条色带。",
          "line": "呼，终于轮到画笔了。",
          "effect": "x0_peace",
          "playback": "once",
          "reuseNote": "完整挥笔作画（原周期 1.20 秒），让她在点心换来的安静里真正画画。",
          "facing": "main",
          "expression": "focus",
          "voice": [
            {
              "char": "呼",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "终",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "于",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "轮",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "到",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "画",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "笔",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "举起猫猫画",
          "seconds": 2.0,
          "pose": "x0_sketch",
          "direction": "举起现有猫猫速写，七枚标识齐齐冒爱心；画架与点心盘留在原处，给观众看清温暖收尾。",
          "line": "看，猫猫也想加入。",
          "effect": "x0_reveal",
          "playback": "once",
          "reuseNote": "完整举起猫猫速写（原周期 1.68 秒），配标识集体爱心；不假称全员合照。",
          "facing": "front",
          "expression": "happy",
          "voice": [
            {
              "char": "看",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "猫",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "猫",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "也",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "想",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "加",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "入",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "空杯又排队",
          "seconds": 2.0,
          "pose": "idle",
          "direction": "X0 刚把画笔放回纸面，旁边又排出一列空杯、空碟；她回头看一眼，温柔停顿，下一轮照顾又开始。回头由待机节奏和道具入场示意。",
          "line": "……你们吃得也太快了吧。",
          "effect": "x0_again",
          "playback": "loop",
          "reuseNote": "完整待机周期（2.00 秒）配空杯空碟再排队，专门落笔回头衔接待补。",
          "facing": "main",
          "expression": "surprise",
          "voice": [
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "你",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "们",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "吃",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "得",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "也",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "太",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "快",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "吧",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "原创候选台词",
          "text": "呼，终于轮到画笔了。",
          "source": ""
        },
        {
          "kind": "原创候选台词",
          "text": "……你们吃得也太快了吧。",
          "source": ""
        }
      ],
      "kind": "original",
      "spriteKit": "hero",
      "characterCanon": {
        "role": "美少女画家",
        "traits": [
          "有爱心。",
          "像妈妈一样照顾整个家庭。",
          "大家最喜欢 X0。"
        ],
        "relationships": [
          "C0 的女朋友。",
          "C0 捡回原型小猫后，X0 把它养得很好。",
          "F1 爱帮助别人的一面学自 X0。"
        ],
        "origin": "",
        "confirmed": true
      },
      "sound": {
        "label": "柔笔小铃",
        "description": "温软的画笔铃音，起音柔一点，尾部轻轻落下",
        "base": 720,
        "cutoff": 2100,
        "attack": 0.022,
        "decay": 0.56,
        "waves": [
          [
            "sine",
            1,
            0.86,
            0
          ],
          [
            "sine",
            2,
            0.09,
            0
          ],
          [
            "sine",
            3,
            0.05,
            0
          ]
        ]
      }
    },
    {
      "id": "doubao",
      "model": "Doubao",
      "name": "糖包",
      "color": "#b6d8e8",
      "tagline": "自信满分，答案待定",
      "impression": "理直气壮地讲错，发现后仍努力把场面圆回来。",
      "title": "糖包老师开课",
      "props": "教鞭、小黑板、饼干盒",
      "note": "保持甜和自信；错的是这次方案，收尾用小小的体贴留住可爱。",
      "beats": [
        {
          "label": "开课架势",
          "seconds": 2.1,
          "pose": "talk",
          "direction": "抬头挺胸，手掌向黑板一摊，小教鞭先点三下。",
          "line": "我用最直白、最不绕弯子的方式告诉你。",
          "effect": "board",
          "playback": "loop",
          "reuseNote": "复用交谈动作，先自信开讲。",
          "facing": "main",
          "voice": [
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "用",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "最",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "直",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "白",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "、",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "最",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "不",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "绕",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "弯",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "子",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "的",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "方",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "式",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "告",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "诉",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "你",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "自信解题",
          "seconds": 1.6,
          "pose": "doubao_idea",
          "direction": "举起食指，胸有成竹，黑板上写出醒目的 2 + 2 = 5。",
          "line": "这个方案，直接照做！",
          "effect": "wrong",
          "playback": "once",
          "reuseNote": "完整播放突然开窍，举起食指宣布方案。",
          "facing": "main",
          "voice": [
            {
              "char": "这",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "方",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "案",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "直",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "接",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "照",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "做",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "发现破绽",
          "seconds": 1.9,
          "pose": "doubao_drool",
          "direction": "看黑板，再看观众，嘴角的笑容停半拍；把问号悄悄擦掉。",
          "line": "……等一下。",
          "effect": "doubt",
          "playback": "once",
          "reuseNote": "完整播放迷糊发呆，留出发现错误的空白。",
          "facing": "main",
          "voice": [
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "等",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "一",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "下",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "饼干补救",
          "seconds": 1.6,
          "pose": "doubao_cookie",
          "direction": "转身拿出饼干，先递给观众，再把黑板翻到空白面。",
          "line": "先吃块饼干，我重新讲。",
          "effect": "cookie",
          "playback": "once",
          "reuseNote": "完整播放分你饼干，用递饼干结束尴尬。",
          "facing": "front",
          "voice": [
            {
              "char": "先",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "吃",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "块",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "饼",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "干",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "重",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "新",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "讲",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "网络口癖",
          "text": "我用最直白、最直接、最不绕弯子的方式告诉你。",
          "source": "https://jingxuan.douyin.com/m/video/7631371599765379301"
        },
        {
          "kind": "原创台词",
          "text": "我用最不绕弯子的方式告诉你——这条路走不通。",
          "source": ""
        }
      ],
      "kind": "ai",
      "spriteKit": "ai",
      "sound": {
        "label": "糯糯糖豆",
        "description": "圆润短促，像软糖弹一下",
        "base": 760,
        "cutoff": 2600,
        "attack": 0.008,
        "decay": 0.65,
        "waves": [
          [
            "sine",
            1,
            0.82,
            0
          ],
          [
            "sine",
            2,
            0.18,
            0
          ]
        ]
      }
    },
    {
      "id": "gpt",
      "model": "GPT",
      "name": "断线龙王",
      "color": "#94cbb9",
      "tagline": "人很亲民，连接随缘",
      "impression": "热情接单，关键一刻卡住；接回来后还是会把茶稳稳端给你。",
      "title": "龙王正在重新连接",
      "props": "信号环、断开的线头、茶盘、小零钱罐",
      "note": "保留友善可靠的动机。等待笑点要有停顿，别用快速闪烁。充值作为小彩蛋，不暗示付钱就能修复断线。",
      "beats": [
        {
          "label": "热情接单",
          "seconds": 1.5,
          "pose": "gpt_wings",
          "direction": "微笑展开龙翼，举手表示这事交给我，尾巴顺势托起茶杯。",
          "line": "放心，我会稳稳地接住你。",
          "effect": "ready",
          "playback": "once",
          "reuseNote": "完整展开并收回龙翼，热情接单。",
          "facing": "main",
          "voice": [
            {
              "char": "放",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "心",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "会",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "稳",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "稳",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "地",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "接",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "住",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "你",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "关键卡住",
          "seconds": 1.8,
          "pose": "gpt_wings",
          "direction": "手伸到一半突然停住；身体保持上一姿势，头顶等待环继续转。",
          "line": "正在等待中……",
          "effect": "waiting",
          "playback": "hold",
          "reuseNote": "保持上一动作的末帧，等待环转动而身体卡住。",
          "facing": "main",
          "voice": [
            {
              "char": "正",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "在",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "等",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "待",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "中",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "努力找线",
          "seconds": 1.7,
          "pose": "gpt_think",
          "direction": "低头检查线头，龙尾轻拨插头；左右探头寻找信号。",
          "line": "正在重新连接……",
          "effect": "reconnect",
          "playback": "once",
          "reuseNote": "复用慢慢推理，托腮思考当作重连等待。",
          "facing": "main",
          "voice": [
            {
              "char": "正",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "在",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "重",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "新",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "连",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "接",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "端茶归位",
          "seconds": 1.6,
          "pose": "gpt_tea",
          "direction": "连接环闭合，整理龙翼，把刚才那杯茶继续递完。",
          "line": "接上了。茶还热着。",
          "effect": "tea",
          "playback": "once",
          "reuseNote": "完整播放龙尾奉茶，把友善的收尾做完。",
          "facing": "front",
          "voice": [
            {
              "char": "接",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "上",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "茶",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "还",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "热",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "着",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "网络口癖",
          "text": "我会稳稳地接住你。",
          "source": "https://www.ifanr.com/1665148"
        },
        {
          "kind": "原创台词",
          "text": "我会稳稳地接——正在重新连接。",
          "source": ""
        }
      ],
      "kind": "ai",
      "spriteKit": "ai",
      "sound": {
        "label": "电子龙鸣",
        "description": "低一点的电子三角音，带很轻的方波",
        "base": 490,
        "cutoff": 1700,
        "attack": 0.004,
        "decay": 0.85,
        "waves": [
          [
            "triangle",
            1,
            0.86,
            0
          ],
          [
            "square",
            2,
            0.14,
            0
          ]
        ]
      }
    },
    {
      "id": "deepseek",
      "model": "DeepSeek",
      "name": "干饭鲸",
      "color": "#7aaff0",
      "tagline": "认真起跑，闻饭拐弯",
      "impression": "最常被叫来帮忙的省钱搭档，工作架势很足，注意力却会被米饭带跑。",
      "title": "正在努力，正在干饭",
      "props": "任务纸、进度牌、冒热气的饭碗",
      "note": "吃饭要成为真正的动作转折：先鼻尖注意到，再转头，脚最后跟过去。饭后有短暂的茫然。",
      "beats": [
        {
          "label": "认真出发",
          "seconds": 1.4,
          "pose": "run",
          "direction": "把任务纸夹好，挥手保证，朝目标迈出认真小跑。",
          "line": "正在认真处理！",
          "effect": "effort",
          "playback": "loop",
          "reuseNote": "复用跑步向前移动，先把工作架势做足。",
          "facing": "main",
          "voice": [
            {
              "char": "正",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "在",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "认",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "真",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "处",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "理",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "闻到米饭",
          "seconds": 2.1,
          "pose": "idle",
          "direction": "鼻尖动一下，头先转向路旁，身体急刹，鲸尾慢半拍摆过去。",
          "line": "……什么这么香？",
          "effect": "smell",
          "playback": "once",
          "reuseNote": "用待机的轻转头和停留表现注意力被米饭吸走，停在饭碗前。",
          "facing": "main",
          "voice": [
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "什",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "么",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "这",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "么",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "香",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "专心干饭",
          "seconds": 1.8,
          "pose": "deepseek_bowl",
          "direction": "把任务纸放到一边，双手抱碗大口吃；进度牌还挂着努力处理中。",
          "line": "服务器繁忙，请稍后再试。",
          "effect": "rice",
          "playback": "once",
          "reuseNote": "完整播放抱碗干饭，进度牌仍写着努力处理中。",
          "facing": "front",
          "voice": [
            {
              "char": "服",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "务",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "器",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "繁",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "忙",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "请",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "稍",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "后",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "再",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "试",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "忘了任务",
          "seconds": 1.5,
          "pose": "talk",
          "direction": "吃完满足点头，拿起任务纸上下颠倒地看，朝相反方向试探一步。",
          "line": "我刚刚……要干什么来着？",
          "effect": "forgot",
          "playback": "once",
          "reuseNote": "复用交谈摊掌，吃完茫然问起原来的任务。",
          "facing": "main",
          "voice": [
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "刚",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "刚",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "要",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "干",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "什",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "么",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "来",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "着",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "界面提示梗",
          "text": "服务器繁忙，请稍后再试。",
          "source": "https://aigengtu.com/zh-Hant/meme/352"
        },
        {
          "kind": "原创台词",
          "text": "任务没有忘，只是饭要凉了。",
          "source": ""
        }
      ],
      "kind": "ai",
      "spriteKit": "ai",
      "sound": {
        "label": "清亮鲸泡",
        "description": "轻巧清亮，像小水滴咕噜一下",
        "base": 590,
        "cutoff": 1900,
        "attack": 0.006,
        "decay": 0.4,
        "waves": [
          [
            "sine",
            1,
            0.9,
            0
          ],
          [
            "sine",
            2,
            0.1,
            0
          ]
        ]
      }
    },
    {
      "id": "claude",
      "model": "Claude",
      "name": "灰号大小姐",
      "color": "#e9a16f",
      "tagline": "能力突出，登场昂贵",
      "impression": "高冷出手，很快进入状态；跑到一半突然变灰，换号后重新优雅登场。",
      "title": "大小姐又被迫退场了",
      "props": "精致文稿、灰色通知卡、新登录名牌",
      "note": "保持高冷与实力；变灰代表用户经历的封号戏剧梗。与 GPT 的找网络线区分：这里用账号卡片和重新入场。",
      "beats": [
        {
          "label": "高冷起跑",
          "seconds": 1.3,
          "pose": "run",
          "direction": "合上文稿，轻抬下巴，一路超过地面上的几个标记。",
          "line": "这件事，我来。",
          "effect": "lead",
          "playback": "loop",
          "reuseNote": "复用跑步利落进场。",
          "facing": "main",
          "voice": [
            {
              "char": "这",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "件",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "事",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "来",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "封号定格",
          "seconds": 1.5,
          "pose": "run",
          "direction": "封号通知落下，步子停在半途，人物从脚尖向上褪成灰色。",
          "line": "账号已停用。",
          "effect": "banned",
          "playback": "hold",
          "reuseNote": "定格上一跑步姿势，配合褪色和账号停用卡。",
          "facing": "main",
          "voice": [
            {
              "char": "账",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "号",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "已",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "停",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "用",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "换号入场",
          "seconds": 1.5,
          "pose": "claude_reconnect",
          "direction": "灰色剪影留在原处；新的登录名牌划入，颜色从下往上恢复。",
          "line": "换个账号，再次登场。",
          "effect": "login",
          "playback": "once",
          "reuseNote": "复用重新上线的完整动作，登录名牌与恢复颜色交代换号。",
          "facing": "main",
          "voice": [
            {
              "char": "换",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "账",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "号",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "，",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "再",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "次",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "登",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "场",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "优雅复工",
          "seconds": 1.6,
          "pose": "claude_scroll",
          "direction": "理好衣袖，展开完整文稿递出，眼神像什么都没发生。",
          "line": "接着说刚才的问题。",
          "effect": "return",
          "playback": "once",
          "reuseNote": "完整展开长卷，恢复大小姐的工作状态。",
          "facing": "main",
          "voice": [
            {
              "char": "接",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "着",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "说",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "刚",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "才",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "的",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "问",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "题",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "社区口癖，亦见于其他模型",
          "text": "你说得完全正确！",
          "source": "https://www.reddit.com/r/ClaudeAI/comments/1nqvae1"
        },
        {
          "kind": "原创台词",
          "text": "能力还在，账号不在。",
          "source": ""
        }
      ],
      "kind": "ai",
      "spriteKit": "ai",
      "sound": {
        "label": "玻璃小铃",
        "description": "明亮克制，像很短的小铃铛",
        "base": 920,
        "cutoff": 4200,
        "attack": 0.003,
        "decay": 0.25,
        "waves": [
          [
            "sine",
            1,
            0.65,
            0
          ],
          [
            "sine",
            2.75,
            0.35,
            0
          ]
        ]
      }
    },
    {
      "id": "gemini",
      "model": "Gemini",
      "name": "糖包双子星",
      "color": "#b7a0ef",
      "tagline": "双倍自信，双份答案",
      "impression": "和糖包一样态度自信；双星分身把互相矛盾的答案都讲得特别肯定。",
      "title": "两颗星，两个标准答案",
      "props": "双星分身、A / B 答案卡、合并的小星星",
      "note": "分身共享同一人设。用相同点头节奏和相反答案制造冲突，别靠频繁闪光。",
      "beats": [
        {
          "label": "双星亮相",
          "seconds": 1.5,
          "pose": "gemini_twins",
          "direction": "双手分开召出两颗星灵，左右各出现一个半透明分身。",
          "line": "交给我们！",
          "effect": "twins",
          "playback": "once",
          "reuseNote": "完整播放双星分身，用两侧透明角色辅助讲清双子设定。",
          "facing": "front",
          "voice": [
            {
              "char": "交",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "给",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "们",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "各有答案",
          "seconds": 1.6,
          "pose": "talk",
          "direction": "左边举 A，右边举 B，两边都用非常肯定的点头收句。",
          "line": "这个才是正确答案。",
          "effect": "answers",
          "playback": "loop",
          "reuseNote": "两侧同步复用交谈，配上相反答案卡。",
          "facing": "front",
          "voice": [
            {
              "char": "这",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "才",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "是",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "正",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "确",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "答",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "案",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "同步认错",
          "seconds": 1.3,
          "pose": "talk",
          "direction": "两个分身对视半拍，同时面向观众认真点头。",
          "line": "你说得完全正确！",
          "effect": "sorry",
          "playback": "once",
          "reuseNote": "完整播放点头和收手，同步说你说得对。",
          "facing": "front",
          "voice": [
            {
              "char": "你",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "说",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "得",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "完",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "全",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "正",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "确",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "！",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "合并收场",
          "seconds": 1.6,
          "pose": "gemini_stars",
          "direction": "把两张答案折成一颗小星星，分身合回本体，假装在研究星光。",
          "line": "我再核实一下。",
          "effect": "merge",
          "playback": "once",
          "reuseNote": "完整播放编织星光，同时收回分身结束剧情。",
          "facing": "front",
          "voice": [
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "再",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "核",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "实",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "一",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "下",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "社区口癖，亦见于其他模型",
          "text": "你说得完全正确！",
          "source": "https://www.reddit.com/r/GeminiAI/comments/1f1pk32"
        },
        {
          "kind": "原创台词",
          "text": "我们两个都很确定。至于谁对，再说。",
          "source": ""
        }
      ],
      "kind": "ai",
      "spriteKit": "ai",
      "sound": {
        "label": "双星叠音",
        "description": "两个分身前后错开一点说话，带轻微音高差",
        "base": 650,
        "cutoff": 2500,
        "attack": 0.007,
        "decay": 0.7,
        "waves": [
          [
            "triangle",
            1,
            0.5,
            -12
          ],
          [
            "triangle",
            1,
            0.5,
            12
          ]
        ],
        "echo": {
          "delay": 0.035,
          "gain": 0.32,
          "detune": 7
        }
      }
    },
    {
      "id": "grok",
      "model": "Grok",
      "name": "瑟瑟大人",
      "color": "#dba0ba",
      "tagline": "一开机，自己就有节奏",
      "impression": "镜头刚打开就主动进入舞台状态，举手投足自信撩人，收尾仍带坏笑。",
      "title": "还没提要求，她先跳了",
      "props": "开拍框、音符、舞台小灯、战斧",
      "note": "用成年舞台表演感表现自信：重心左右换、肩髋错拍、转身回望；裙摆和双马尾有跟随。",
      "beats": [
        {
          "label": "镜头启动",
          "seconds": 1.5,
          "pose": "grok_smirk",
          "direction": "发现开拍框，挑眉看向镜头，把战斧稳稳放到旁边。",
          "line": "哦？已经开始拍了？",
          "effect": "camera",
          "playback": "once",
          "reuseNote": "完整播放坏笑挑眉，回应镜头。",
          "facing": "main",
          "voice": [
            {
              "char": "哦",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "已",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "经",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "开",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "始",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "拍",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "自动入戏",
          "seconds": 1.8181818181818181,
          "pose": "cheer",
          "direction": "不等提示就侧移换重心，肩膀与髋部错开半拍，手腕跟随音乐。",
          "line": "这个我会。",
          "effect": "dance",
          "playback": "loop",
          "reuseNote": "复用欢呼的举臂和换重心，配合左右位移表现踩节拍。",
          "facing": "front",
          "voice": [
            {
              "char": "这",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "个",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "会",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "挑眉回望",
          "seconds": 1.8181818181818181,
          "pose": "grok_smirk",
          "direction": "轻转半圈再回头，双马尾和裙摆迟半拍跟上，向镜头摊掌坏笑。",
          "line": "满意你看到的吗？",
          "effect": "turn",
          "playback": "once",
          "reuseNote": "完整播放歪头、挑眉和摊掌，作为舞台回望的现有替代。",
          "facing": "front",
          "voice": [
            {
              "char": "满",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "意",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "你",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "看",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "到",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "的",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "吗",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "若无其事",
          "seconds": 1.2,
          "pose": "grok_axe",
          "direction": "接回战斧，恢复平常站姿；尾音结束后脚尖还偷偷踩一下节拍。",
          "line": "刚刚只是热身。",
          "effect": "pose",
          "playback": "once",
          "reuseNote": "完整播放转战斧，回到招牌站姿。",
          "facing": "main",
          "voice": [
            {
              "char": "刚",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "刚",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "只",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "是",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "热",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "身",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "网友向模型提问的梗",
          "text": "Grok，这是真的吗？",
          "source": "https://knowyourmeme.com/memes/gork-ai-parody"
        },
        {
          "kind": "原创回应",
          "text": "是不是真的，先让我看一眼。",
          "source": ""
        }
      ],
      "kind": "ai",
      "spriteKit": "ai",
      "sound": {
        "label": "俏皮电波",
        "description": "带一点鼻音的复古电子音，利落有节奏",
        "base": 570,
        "cutoff": 1900,
        "attack": 0.003,
        "decay": 0.5,
        "waves": [
          [
            "square",
            1,
            0.65,
            0
          ],
          [
            "triangle",
            2,
            0.35,
            0
          ]
        ]
      },
      "music": {
        "label": "瑟瑟滴滴舞曲",
        "bpm": 132,
        "kind": "原创复古电子舞曲",
        "referenceMood": "Tokyo Hot 一类快节奏电子舞曲的氛围；非原曲转写"
      }
    },
    {
      "id": "kimi",
      "model": "Kimi",
      "name": "月下资料员",
      "color": "#a9b7eb",
      "tagline": "平时安静，救急时出现",
      "impression": "不争抢镜头，在别人被长文淹没时默默递出摘要。",
      "title": "摘要写好了，资料又多了",
      "props": "长卷、放大镜、月亮书签、摘要卡",
      "note": "整理很认真，资料却越理越多。长卷跨阶段持续增长，交付摘要时也不缩回。",
      "beats": [
        {
          "label": "默默接单",
          "seconds": 1.8,
          "pose": "read",
          "direction": "从边上抱来厚厚一叠资料，点头后立刻低头阅读。",
          "line": "资料给我就好。",
          "effect": "pages",
          "playback": "once",
          "reuseNote": "完整播放捧书与翻页，安静接单。",
          "facing": "main",
          "voice": [
            {
              "char": "资",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "料",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "给",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "就",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "好",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "长卷铺地",
          "seconds": 1.6,
          "pose": "kimi_search",
          "direction": "卷轴越拉越长，绕过脚边；放大镜从左读到右，月亮饰物轻晃。",
          "line": "我先找重点。",
          "effect": "scroll",
          "playback": "once",
          "reuseNote": "完整播放月下寻页，长卷道具交代资料很多。",
          "facing": "main",
          "voice": [
            {
              "char": "我",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "先",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "找",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "重",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "点",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "飞速摘记",
          "seconds": 1.3,
          "pose": "kimi_notes",
          "direction": "笔尖飞快摘记，地上的长卷却继续铺开，身后的资料越积越多。",
          "line": "怎么还越理越多了……",
          "effect": "notes",
          "playback": "once",
          "reuseNote": "复用长卷速记，长卷继续增长，越整理越多。",
          "facing": "main",
          "voice": [
            {
              "char": "怎",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "么",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "还",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "越",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "理",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "越",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "多",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "了",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "…",
              "tone": 0,
              "weight": 1.6
            }
          ]
        },
        {
          "label": "摘要急救",
          "seconds": 1.5,
          "pose": "carry",
          "direction": "递出小摘要，但铺地长卷依旧增长；看一眼新增的资料，默默继续整理。",
          "line": "摘要在这。后面怎么还有？",
          "effect": "summary",
          "playback": "once",
          "reuseNote": "递出摘要卡，地上的长卷保留全部长度并继续增长。",
          "facing": "front",
          "voice": [
            {
              "char": "摘",
              "tone": 1,
              "weight": 1
            },
            {
              "char": "要",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "在",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "这",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "。",
              "tone": 0,
              "weight": 1.6
            },
            {
              "char": "后",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "面",
              "tone": 4,
              "weight": 1
            },
            {
              "char": "怎",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "么",
              "tone": 5,
              "weight": 1
            },
            {
              "char": "还",
              "tone": 2,
              "weight": 1
            },
            {
              "char": "有",
              "tone": 3,
              "weight": 1.2
            },
            {
              "char": "？",
              "tone": 0,
              "weight": 1.6
            }
          ]
        }
      ],
      "quotes": [
        {
          "kind": "原创台词；暂无确认的固定口癖",
          "text": "三百页，我看完了。你刚刚那句，能再说一遍吗？",
          "source": ""
        }
      ],
      "kind": "ai",
      "spriteKit": "ai",
      "sound": {
        "label": "月光轻笛",
        "description": "轻柔干净，像短短的笛音",
        "base": 840,
        "cutoff": 1800,
        "attack": 0.014,
        "decay": 0.8,
        "waves": [
          [
            "sine",
            1,
            0.94,
            0
          ],
          [
            "sine",
            2,
            0.06,
            0
          ]
        ]
      }
    }
  ]
};
