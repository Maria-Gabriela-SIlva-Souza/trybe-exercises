characters_file = open('meus_personagens_favoritos.txt', mode='w')


characters_file.write('Tio Patinhas\n')
characters_file.write('Neo\n')
characters_file.write('Homem Aranha\n')
characters_file.write('Harry Potter\n')

print('Batman', file=characters_file)

more_characters = ['Hrmione\n', 'Coringa\n']

characters_file.writelines(more_characters)

characters_file.close()
