from ex2 import letras_e_numeros


def test_conversao_para_numero_2():
    'Verificar se ABC é convertido para número 2'
    assert letras_e_numeros('ABC') == '222'


# def test_expression_maximum_are_thirty_chars():
#     long_expression = (
#         "1111111111"  # 10 chars
#         "1111111111"
#         "1111111111"
#         "1"
#     )
#     with pytest.raises(ValueError):
#         translate_to_number(long_expression)


# def test_expression_with_invalid_chars():
#     with pytest.raises(ValueError):
#         translate_to_number("I-****-MY_JOB")


# def test_expression_should_be_at_least_one_char():
#     with pytest.raises(ValueError):
#         letras_e_numeros("")
