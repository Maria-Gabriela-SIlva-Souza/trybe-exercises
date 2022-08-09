from ex1 import lista


def test_lista_div_por_3():
    'Ver se numeros divisíveis por 3 retornam Fizz'
    assert lista(3)[-1] == "Fizz"


def test_lista_div_por_5():
    'Ver se numeros divisíveis por 3 retornam Buzz'
    assert lista(5)[-1] == "Buzz"


def test_lista_div_por_3_e_5():
    'Ver se numeros divisíveis por 3 retornam FizzBuzz'
    assert lista(15)[-1] == "FizzBuzz"
