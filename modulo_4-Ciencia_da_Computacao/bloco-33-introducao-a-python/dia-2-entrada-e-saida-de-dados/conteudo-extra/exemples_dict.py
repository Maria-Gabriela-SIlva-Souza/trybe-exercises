# Construindo um Dicionário

dict = {}
dict['a'] = 'Maria'
dict['b'] = 'Gabriela'
dict['c'] = 'Silva'

# OU

dict2 = {'A': 'Maria', 'B': 'Gabriela', 'C': 'Silva'}

print(f'Dict: {dict}\n\n')
print(f'Dict2: {dict2}\n\n')


# Acessando Elementos
print(f'Acessando elemento A: {dict2["A"]}\n\n')

# Chegar se existe uma chave
existe = 'A' in dict2
print(f'Existe A em dict2 ?: {existe}\n\n')

# Expressão get()
get_nome = dict2.get('B')
print(f'Realizando get() (buscando valor) na chave B: {get_nome}\n\n')

adiciona_nome = dict2.get('D', 'Souza')
print(f'Adicionando com get(): {adiciona_nome}\n\n')


# Expressão items()
print(f'Usando items(): {dict2.items()}\n\n')

# Expressão keys()
print(f'Usando keys(): {dict2.keys()}\n\n')

# Expressão values()
print(f'Usando values(): {dict2.values()}\n\n')

# Expressão update()
atualizar = dict2.update({'B': 'Gabriela Update'})
print(f'Usando update(), atualizando Gabriela: {dict2}\n\n')

# Expressão setdefault()
setdef = dict2.setdefault('B')
print(f'Usando setdefault(): {setdef}\n\n')

# Expressão fromkeys()
chaves = (1, 2, 3)
valores = ('Um', 'Dois', 'Três')
dict_formado = dict.fromkeys(chaves, valores)
print(f'Usando fromkeys(): {dict_formado}\n\n')
