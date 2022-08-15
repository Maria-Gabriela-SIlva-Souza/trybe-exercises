from jedi_sith import Jedi, Sith
from personagem import Personagem


p1 = Personagem("Padmé", "Humana", 80, 170, 40)
p2 = Jedi("Luke", "Humano", 60, 170, 100)
p3 = Sith("Vader", "Humano", 100, 200, 150)


print('\nPERSONAGENS:\n')
print(f'Nome: {p1.nome};\nEspécie: {p1.especie};\nHP: {p1.get_hp()}')
