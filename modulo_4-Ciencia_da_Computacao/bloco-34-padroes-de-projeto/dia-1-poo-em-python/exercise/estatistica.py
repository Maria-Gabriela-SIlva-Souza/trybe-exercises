import statistics


class Estatistica:
    @classmethod
    def media(cls, valor):
        return statistics.mean(valor)

    @classmethod
    def mediana(cls, valor):
        statistics.median(valor)

    @classmethod
    def moda(cls, valor):
        statistics.mode(valor)
