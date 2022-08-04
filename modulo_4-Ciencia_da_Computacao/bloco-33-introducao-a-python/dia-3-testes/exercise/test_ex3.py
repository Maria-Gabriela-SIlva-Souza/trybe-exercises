import pytest_lazyfixture
from ex3 import validando_email


def test_username_can_only_contain_letters():
    assert validando_email("aaaa@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert validando_email("a1993@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validando_email("aa-a@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validando_email("a_a1a-a@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert validando_email("a@nomewebsite.ext") is None


def test_username_when_dont_start_with_letter_raise_exception():
    with pytest_lazyfixture.raises(ValueError):
        validando_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest_lazyfixture.raises(ValueError):
        validando_email("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert validando_email("abc@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest_lazyfixture.raises(ValueError):
        validando_email("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert validando_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest_lazyfixture.raises(ValueError):
        validando_email("abc@website123.pyth")
