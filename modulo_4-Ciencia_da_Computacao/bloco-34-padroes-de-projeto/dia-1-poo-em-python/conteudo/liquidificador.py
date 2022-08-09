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

    # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


# Agora podemos criar nossos primeiros liquidificadores:

# liquidificador_azul = Liquidificador(200, "Azul", 200, 127)

# # Abstração

# liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
# liquidificador_vermelho.ligar(1)
# print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? True
# liquidificador_vermelho.desligar()
# print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? False

liquidificador = Liquidificador("Azul", "110", "127", "200")
print(f"A cor atual é {liquidificador.cor}")
liquidificador.cor = "Vermelho"
print(f"Após pintarmos, a nova cor é {liquidificador.cor}")
