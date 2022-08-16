# Conjuntos
conj = {'Eli', 9, 'Fekps', 'Rodrigo', 3, 'Isaac', 7, 'Flávio', -10}

# Union
conj_union = {5, 2564, 51484}
print(f'Union com pipe: {conj | conj_union}\n\n')
print(f'Union com a sentença: {conj.union(conj_union)}\n\n')

# Difference
a = {1, 2, 3, 4, 5}
b = {3, 4, 5, 6, 7}
print(f'Difference com sinal de - : {a-b}\n\n')
print(f'Difference com a sentença: {a.difference(b)}\n\n')

# Update
a.update(['t', 16])
print(f'Udpate: {a}')
