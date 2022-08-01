total = 0
valor = 5

for i in range(valor):
    total += i


print(total/valor)


def media(numeros):
    total = 0
    for i in numeros:
        total += i
    return total / len(numeros)


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(mean([0, 1, 2, 3, 4]))
print(media([0, 1, 2, 3, 4]))
