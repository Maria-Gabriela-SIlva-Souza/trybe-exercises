from random import choice
from abc import ABC, abstractmethod


class PersonagemInterface(ABC):
    @abstractmethod
    def falar(self):
        raise NotImplementedError


class Personagem(PersonagemInterface):
    def __init__(self, nome, especie, peso, altura, hp):
        self.nome = nome
        self.especie = especie
        # Usamos o underline para atributos privados
        self.__peso = peso
        self.__altura = altura
        self.__hp = hp

    # Para poder mostrar os atributos privados,
    # precisamos realizar os getters e setters deles
    def get_peso(self):
        return self.__peso

    def set_peso(self, novo_peso):
        self.__peso = novo_peso

    def get_altura(self):
        return self.__altura

    def set_altura(self, nova_altura):
        self.__altura = nova_altura

    def get_hp(self):
        return self.__hp

    def set_hp(self, dano):
        self.__hp -= dano

    def falar(self):
        return "Que a força esteja com você !"


class Jedi(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        # O super serve para que você não declare novamente as variáveis
        # herdeiras no construtor
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_luz = SabreDeLuz("Azul", 50)

    def defender(self):
        defesa = choice([True, False])
        if defesa:
            print(f"{self.nome} defendeu")

    def contra_atacar(self, personagem):
        personagem.set_hp(self.sabre_de_luz.forca)

    def falar(self):
        if self.get_hp() <= 0:
            print(f"{self.nome} morreu")
        return "NOOOO!"


class Sith(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_luz = SabreDeLuz("Vermelho", 50)

    def atacar(self, personagem):
        if not personagem.defender():
            personagem.set_hp(self.sabre_de_luz.forca)

    def falar(self):
        if self.get_hp() <= 0:
            print(f"{self.nome} morreu")
        return "Eu sou seu pai"


class SabreDeLuz:
    def __init__(self, cor, forca):
        self.cor = cor
        self.forca = forca


p1 = Personagem("Padmé", "Humana", 80, 170, 40)
p2 = Jedi("Luke", "Humano", 60, 170, 100)
p3 = Sith("Vader", "Humano", 100, 200, 150)


print("\nPERSONAGENS:\n")
print(f"Nome: {p1.nome}; Espécie: {p1.especie}; HP: {p1.get_hp()}")
print(f"Nome: {p2.nome}; Espécie: {p2.especie}; HP: {p2.get_hp()}")
print(f"Nome: {p3.nome}; Espécie: {p3.especie}; HP: {p3.get_hp()}")

print("--------\n")
print("BATALHA")
print(f"Nome: {p3.nome}: {p3.falar()}")
print(f"Nome: {p2.nome}: {p2.falar()}\n\n")

while p3.get_hp() > 0:
    print(f"{p3.nome} (HP {p3.get_hp()}) ataca {p2.nome} (HP {p2.get_hp()})")
    p3.atacar(p2)
    p2.falar()
    if p2.get_hp() > 0:
        print(
            f"{p2.nome} (HP {p2.get_hp()}) contra-ataca {p3.nome}" +
            f"(HP {p3.get_hp()})"
        )
        p2.contra_atacar(p3)
        p3.falar()
    else:
        break
