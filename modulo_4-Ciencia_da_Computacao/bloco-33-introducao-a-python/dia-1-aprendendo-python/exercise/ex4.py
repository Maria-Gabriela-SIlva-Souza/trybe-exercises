nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(lista):
    nome = lista[0]
    for i in lista:
        if len(i) > len(nome):
            nome = i
    return nome


print(maior_nome(nomes))
