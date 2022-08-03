def lista(numero):
    list = []
    for n in range(1, numero + 1):
        if n % 3 == 0 and n % 5 == 0:
            list.append('FizzBuzz')
        elif n % 3 == 0:
            list.append('Fizz')
        elif n % 5 == 0:
            list.append('Buzz')
        else:
            list.append(n)
    return list


print(lista(15))
