Exercício 1: Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.


Exercício 2: Faça uma requisição ao recurso usuários da API do Github (https://api.github.com/users), exibindo o username e url de todos os usuários retornados.

    Exemplo:
        mojombo https://api.github.com/users/mojombo
        defunkt https://api.github.com/users/defunkt
        pjhyett https://api.github.com/users/pjhyett
        wycats https://api.github.com/users/wycats


Exercício 3: Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedida.

⚠️ Para verificar se a requisição foi bem sucedida, faça assert "bot detected" not in response.text. Se nada acontecer, seu código está funcionando. ⚠️ Faça a inspeção de como a requisição é feita pelo navegador para conseguir replicar através do código.


