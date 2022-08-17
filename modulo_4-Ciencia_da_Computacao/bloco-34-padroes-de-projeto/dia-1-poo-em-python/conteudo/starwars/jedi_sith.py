from personagem import Personagem
from .sabre_de_luz import SabreDeLuz


class Jedi(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        # O super serve para que você não declare novamente as variáveis
        # herdeiras no construtor
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_luz = SabreDeLuz('Azul, 50')


class Sith(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_luz = SabreDeLuz('Vermelho', 50)
