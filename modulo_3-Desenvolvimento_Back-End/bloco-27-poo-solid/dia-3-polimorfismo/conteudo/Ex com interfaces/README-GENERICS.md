1. Crie uma interface chamada IModel que defina as operações básicas de um CRUD para a entidade Character.

2. Crie uma classe LocalDbModel que implemente a interface IModel.

3. Crie uma classe CharacterService que recebe como dependência em seu construtor uma instância do tipo LocalDbModel e a utilize em sua lógica de negócio.

4. Refatore CharacterService para que possa receber uma instância de qualquer classe que implemente a interface IModel.

5. Crie uma classe MockedDbModel que implemente IModel com uma versão mock.

6. Verifique que a classe CharacterService pode receber uma instância tanto de LocalDbModel como de MockedDbModel.