class TV:
    def __init__(self, volume, canal, tamanho, ligada):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, param):
        if 1 >= param <= 99:
            self.__canal = param
        else:
            raise ValueError("Valor de canal está fora da grade")
    # OUTRA FORMA
    # def modificar_canal(self, canal):
    #     if canal <= 1 or canal >= 99:
    #         raise ValueError('Canal indisponível')
    #     self.__canal = canal

    def ligar_desligar(self):
        if self.__ligada is True:
            return False
        else:
            return True
    # OUTRA FORMA
    # def ligar_desligar(self):
    #     self.__ligada = not self.__ligada
