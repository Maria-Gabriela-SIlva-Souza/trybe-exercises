from collections.abc import Iterator, Iterable
# devemos usá-lo para iterar

lista = ['Eli', 'Isaac', 'Felps', 'Roni']

# for name in lista:
#     print(name)

# for name1 in lista:
#     for name in lista:
#         print(name, name1)


#  O iterador tem que ter um __next__
class MeuIterator(Iterator):
    def __init__(self, iter_data):
        self.iter_data = iter_data
        self.index = 0

    def __next__(self):
        try:
            value = self.iter_data[self.index]
        except IndexError:
            raise StopIteration

        self.index += 1
        return value


#  O iterável tem que ter um __iter__
class MeuIterável(Iterable):
    def __init__(self, data):
        self.data = data

    def __iter__(self):
        return MeuIterator(self.data)


iteravel = MeuIterável(lista)

for name in iteravel:
    print(name)
