==> LISTAS = Arrays

  lista = [0, 'um', 2, '3', 4.0, 'five']

  Em linguagens de baixo nível, conseguimos guardar somente um tipo de informação no array (ex: array só de strings, ou só de interiros, etc.)

  Podemos varrer os arrays de tras pra frente também (ex: lista[-1] == five)

  Temos o fatiamento (slice) que nos mostra só o que queremos indicando a sequência dos índices
    lista[0:3] == [0, 'um', 2]
    lista[2:4] == [2, '3']
    lista[2:] == [2, '3', 4.0, 'five']
    lista[0:4] == [0, 'um', 2, '3']

  E também, nos da uma espécie de random, que nos da, com três argumentos, de onde começa, onde termina, e de quantos em quantos serão pulados
    lista[0:5:3] == [0, '3']
    lista[2::2] == [2, 4.0]


  --> APPEND = Uma das formas de inserir elementos a lista (esse caso somente inclui no fim da lista)

    lista = [0, 'um', 2, '3', 4.0, 'five']
    lista.append(['seis', 'sete']) == [0, 'um', 2, '3', 4.0, 'five', 'seis', 'sete']
    lista.append('oito') == [0, 'um', 2, '3', 4.0, 'five', 'seis', 'sete', 'oito']

  --> INSERT = Inserir elementos na lsita em qualquer ordem solicitada

  --> EXTENDS = Junção de duas listas

  --> ADICIONANDO VALORES = Outra forma de juntar listas

    lista = [0, 'um', 2, '3', 4.0, 'five']
    lista += ['seis', 'sete'] == [0, 'um', 2, '3', 4.0, 'five', 'seis', 'sete']

  --> POP = Remove valores de acordo com o índice indicado, se não der a posição, ele remove o último elemento

    lista = [0, 'um', 2, '3', 4.0, 'five']
    lista.pop(3) == [0, 'um', 2, 4.0, 'five']

  --> REMOVE = Remove valores especificados

    lista = [0, 'um', 2, '3', 4.0, 'five']
    lista.pop('um') == [0, 2, '3', 4.0, 'five']

  --> SORT == Ordena um array

    lista = [3, 5, 0, 2, 4, 1]
    lista.sort() ---> ELE NÃO RETORNA NADA, ELE ALTERA O PRÓPRIO ARRAY, É NECESSÁRIO PRINTAR PARA VER
    lista = [0, 1, 2, 3, 4, 5]

  --> SORTED == Ordena um array sem alterar o valor original, isso pode-se colocar em uma variável

    lista = [3, 5, 0, 2, 4, 1]
    sorted(lista) = [0, 1, 2, 3, 4, 5] ou lista_ordenada = sorted(lista)


==> TUPLAS == Um tipo de lista na qual NÃO CONSEGUIMOS ALTERAR, NEM ADICIONAR, NEM REMOVER OS DADOS

  tupla = (0, 'um', 2, '3', 4.0, 'five') == (0, 'um', 2, '3', 4.0, 'five')