"""Rebuild asset downloads without dependencies. Run from any directory."""
from pathlib import Path
import json, zipfile
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'assets/manifest.json').read_text(encoding='utf-8'))
all_ids=[c['id'] for c in manifest['characters']]
groups={'studio-cast':['Feline1','C0','X0'],'ai-inspired-cast':[i for i in all_ids if i not in ['Feline1','C0','X0']],'all-characters':all_ids}
(root/'downloads').mkdir(exist_ok=True)
for name,ids in groups.items():
    with zipfile.ZipFile(root/'downloads'/f'{name}.zip','w',zipfile.ZIP_DEFLATED) as z:
        for cid in ids:
            for p in sorted((root/'assets'/cid).rglob('*')):
                if p.is_file():z.write(p,p.relative_to(root/'assets'))
        subset=dict(manifest);subset['characters']=[c for c in manifest['characters'] if c['id'] in ids]
        z.writestr('manifest.json',json.dumps(subset,ensure_ascii=False,indent=2))
        z.write(root/'assets/README.md','README.md')
        for f in ['LICENSE','ATTRIBUTION.md','licenses/CC-BY-4.0.txt','licenses/MIT.txt']:
            z.write(root/f,f)
        for p in sorted((root/'licenses').rglob('*')):
            if p.is_file() and p.name not in ['CC-BY-4.0.txt','MIT.txt']:z.write(p,p.relative_to(root))
    print(name, len(ids), 'characters')
