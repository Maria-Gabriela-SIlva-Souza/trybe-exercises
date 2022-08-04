from ex4 import lista_email


def test_if_dont_have_emails_returns_empty_list():
    assert lista_email([]) == []


def test_only_valid_emails():
    emails = ["username@website.com"]
    expected_emails = ["username@website.com"]
    assert lista_email(emails) == expected_emails


def test_invalid_emails_should_be_filtered():
    emails = ["inv*alid@website.com"]
    expected_emails = []
    assert lista_email(emails) == expected_emails


def test_valid_and_invalid_emails_returns_only_valids():
    emails = ["username@website.com", "inv*alid@website.com"]
    expected_emails = ["username@website.com"]
    assert lista_email(emails) == expected_emails
