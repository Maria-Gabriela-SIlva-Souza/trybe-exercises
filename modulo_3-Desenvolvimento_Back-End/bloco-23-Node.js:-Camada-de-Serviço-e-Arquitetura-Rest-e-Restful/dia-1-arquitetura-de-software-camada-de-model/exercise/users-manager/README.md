EXERCÍCIO 1

Você criará uma aplicação que faz CRUD ( C reate, R ead, U pdate e D elete) de usuários. A entidade que representa um usuário se chamará user .
Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o MySql .
Com isso em mente, prossiga para a realização dos exercícios:

1. Crie o endpoint POST /user
2. Seu endpoint deve receber o seguinte conteúdo no body da request:

{
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com",
  "password": "d496d5ea2442"
}

** Todos os campos são obrigatórios;
** O campo password deve ser uma string de 6 ou mais caracteres;
** Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

{
  "error": true,
  "message": "O campo 'password' deve ter pelo menos 6 caracteres"
}

3. Caso o usuário seja criado com sucesso, retorne os campos id , firstName , lastName e email em JSON, no formato abaixo, com o status 201 Created .

