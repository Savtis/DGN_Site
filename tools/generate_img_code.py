import os

filenames = []

for entry in os.listdir('docs\\res\\gallery'):
    filenames.append(entry)

result = []
for f in filenames:
    if f != 'tech_russia.png':
        result.append(f'<a href=\"res/gallery/{f}\" target=\"_blank\"><img src=\"res/gallery/{f}\" alt=\"Картинко\"></a>')
    else:
        result.append(f'<a href=\"technocracy.html\"><img src=\"res/gallery/{f}\" alt=\"Картинко\"></a>')

result.reverse()

print('\n'.join(result))
