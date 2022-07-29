def triangulo(l1, lado2, lado3):
    if (l1 + lado2) < lado3 or (l1 + lado3) < lado2 or (lado3 + lado2) < l1:
        print('Não é triangulo')
    elif l1 == lado2 == lado3:
        print('Este é um Triângulo Equilátero')
    elif l1 == lado2 or l1 == lado3 or lado3 == lado2:
        print('Este é um Triângulo Isósceles')
    elif l1 != lado2 != lado3:
        print('Este é um Triângulo Escaleno')


triangulo(9, 4, 3)
