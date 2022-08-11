class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0


liquidificador_azul = Liquidificador('Azul', 200, 127)
liquidificador_vermelho = Liquidificador('Vermelho', 250, 220)
