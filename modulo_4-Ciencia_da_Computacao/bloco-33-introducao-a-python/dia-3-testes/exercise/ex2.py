def letras_e_numeros(entrada):
    if not 1 < len(entrada) <= 30:
        raise ValueError("entrada with invalid length")
    number = ""
    for x in entrada:
        if x in "ABC":
            number += "2"
        elif x in "DEF":
            number += "3"
        elif x in "GHI":
            number += "4"
        elif x in "JKL":
            number += "5"
        elif x in "MNO":
            number += "6"
        elif x in "PQRS":
            number += "7"
        elif x in "TUV":
            number += "8"
        elif x in "WXYZ":
            number += "9"
        elif x in "-01":
            number += x
        else:
            raise ValueError("Caractere inválido")
    return number
