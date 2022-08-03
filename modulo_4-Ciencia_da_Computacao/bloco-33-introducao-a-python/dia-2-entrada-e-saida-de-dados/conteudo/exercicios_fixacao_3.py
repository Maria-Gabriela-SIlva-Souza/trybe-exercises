# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que:

# 1. lê todas essas informações;
# 2. aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# 3. escreva seus nomes em outro arquivo.

# Considere que a nota miníma para aprovação é 6.

# Arquivo:

# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

# Exemplo saída:

# Felipe
# Miguel

# 🦜 A função split pode ser utilizada para dividir o nome em uma linha.
# Ex: line.split() -> ["Marcos", "10"].

recuStudents = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
