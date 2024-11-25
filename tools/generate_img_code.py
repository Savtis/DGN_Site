import os

filenames = []

for entry in os.listdir('site\\res\\gallery'):
    filenames.append(entry)

result = []
for f in filenames:
    result.append(f'<img src=\"res/gallery/{f}\" alt=\"Картинко\">')

result.reverse()

print('\n'.join(result))
