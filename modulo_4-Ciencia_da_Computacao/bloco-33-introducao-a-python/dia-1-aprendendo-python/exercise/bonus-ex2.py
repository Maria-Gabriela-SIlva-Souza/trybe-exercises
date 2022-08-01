number = 5
x = '*'


def triangulo(num):
    for index in range(num):
        index = index + 1
        print(index * x)


def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')


triangulo(number)
