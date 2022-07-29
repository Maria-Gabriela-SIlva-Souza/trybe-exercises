import math


def valor_tinta(tam_parede):
    valor_tinta = 80
    area_pintada_por_lata = 3 * 18
    quant_lata = tam_parede / area_pintada_por_lata
    valor_total = valor_tinta * quant_lata
    if quant_lata % 18:
        quant_lata += 1
    return int(quant_lata), int(valor_total)


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


def paint_costs2(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(valor_tinta(110))
