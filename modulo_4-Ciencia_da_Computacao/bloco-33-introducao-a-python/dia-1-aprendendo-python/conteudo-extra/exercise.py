# Criar uma lista de alturas de acordo com a quantidade de alturas inseridas
pessoas = int(input('Quantas pessoas você vai digitar a altura?: '))

lista = []

for x in range(1, pessoas + 1):
    altura = int(input('\nInsira sua altura: '))
    lista.append(altura)


# print(lista)


# # Dstricha a string
print(list('GABRIELA'))


# # Corrigir nome na lista

lista1 = ['Maria', 'Gabriela', 'Sigra', 'Souza']
lista1[2] = 'Silva'

print(lista1)


# Ordenar lista e retornar as 3 primeiras e 3 últimas

nomes = [
    'Gabriela', 'Talita', 'Lais', 'Renan', 'Elisa', 'Vó Maria',
    'Célia', 'Pedro', 'Romeu'
]

nomes.sort()

print(nomes)
print(nomes[:3])
print(nomes[-3:])
