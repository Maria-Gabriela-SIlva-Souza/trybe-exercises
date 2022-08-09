from ex3 import validando_email


def lista_email(emails):
    emails_corretos = []
    for x in emails:
        if validando_email(x) == 'Valid email':
            emails_corretos.append(x)
        elif validando_email(x) == 'Invalid email':
            emails_corretos == emails_corretos
    return print(emails_corretos)


lista_email(["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"])
