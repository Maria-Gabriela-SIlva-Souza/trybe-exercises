number = 5


def somatoria(num):
    print(sum(range(num + 1)))


def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total


somatoria(5)
