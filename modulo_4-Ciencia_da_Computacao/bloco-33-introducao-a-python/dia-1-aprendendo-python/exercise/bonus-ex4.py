def posto(litros, combustivel):
    if combustivel == 'A' and litros <= 20:
        total_pago = (1.90 * 0.03) * litros
        print(f'O valor a ser pago é: {total_pago}')
    elif combustivel == 'A' and litros > 20:
        total_pago = (1.90 * 0.05) * litros
        print(f'O valor a ser pago é: {total_pago}')
    elif combustivel == 'G' and litros <= 20:
        total_pago = (2.5 * 0.04) * litros
        print(f'O valor a ser pago é: {total_pago}')
    elif combustivel == 'G' and litros > 20:
        total_pago = (2.5 * 0.06) * litros
        print(f'O valor a ser pago é: {total_pago}')


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
