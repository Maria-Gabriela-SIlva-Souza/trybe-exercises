# 1 - Escreva um programa que concatene os dicionários abaixo e crie um novo

dict1 = {1: 'Rua A', 2: 'Rua B'}
dict2 = {3: 'Rua C', 4: 'Rua D'}
dict3 = {5: 'Rua E', 6: 'Rua F'}

concatenar = {**dict1, **dict2, **dict3}
print(f'Ex1: {concatenar}')

# Ou
concat_for = {}
for add in dict1, dict2, dict3:
    concat_for.update(add)
print(f'Ex1 com for: {concat_for}\n\n')
