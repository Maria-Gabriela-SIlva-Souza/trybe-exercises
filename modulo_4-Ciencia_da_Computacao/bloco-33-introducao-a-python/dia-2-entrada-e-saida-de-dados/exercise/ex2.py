import random

PALAVRAS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]

CHANCES = 3


def desenhar_palavra_secreta(palavras):
    palavra_secreta = random.choice(palavras)
    embaralhada = "".join(random.sample(palavra_secreta, len(palavra_secreta)))
    return palavra_secreta, embaralhada


def coletar_palpite():
    suposicoes = []
    for attempt in range(CHANCES):
        guess = input("Guess the word: ")
        suposicoes.append(guess)
    return suposicoes


def resultado_do_jogo(palavra_secreta, suposicoes):
    if palavra_secreta in suposicoes:
        print(f"You win: {palavra_secreta}")
    else:
        print(f"You lose: {palavra_secreta}")


if __name__ == "__main__":
    palavra_secreta, embaralhada = desenhar_palavra_secreta(PALAVRAS)
    print(f"Scrambled word is {embaralhada}")
    suposicoes = coletar_palpite()
    resultado_do_jogo(palavra_secreta, suposicoes)
