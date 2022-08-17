class Personagem:
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
