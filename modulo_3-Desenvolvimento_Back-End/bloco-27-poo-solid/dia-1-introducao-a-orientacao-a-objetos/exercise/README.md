EXERCICIOS 27.1

Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.
  A pessoa cliente deverá conter o nome;
  O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;
  O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: "cartão", "dinheiro") e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

Exercício 5: Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.

Exercício 6: Vamos adicionar à nossa classe de Data do exercício anterior os comportamentos. Essa classe deverá conter os seguintes métodos:
  constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor "01/01/1900";
  getMonthName: retorna o mês da data por extenso;
  isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
  compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
    0 se as datas forem iguais;
    1 se a data corrente for posterior à data do parâmetro;
    -1 se a data do parâmetro for posterior à data corrente.
  format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.
  Legenda:
    aaaa = ano com quatro dígitos
    aa = ano com dois dígitos
    mm = mês com 2 dígitos
    M = mês por extenso
    dd = dia com 2 dígitos
    Exemplos:
    "dd/mm/aaaa" = 01/01/1900
    "aaaa-mm-dd" = 1900-01-01
    "dd de M de aa" = 01 de janeiro de 90
    "dd, M de aaaa" = 01, janeiro de 1990


/////////////////////////////////////////////////////////////////////////////////////////////////////////


EXECICIOS 27.2

Exercício 1: Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.
  `Class`: Person
  `Attributes`:
      - name: nome da pessoa
      - birthDate: data de nascimento da pessoa
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome e data de nascimento
  `Validations`:
      - O nome deve ter no mínimo três caracteres
      - A data de nascimento não pode ser uma data no futuro
      - A pessoa não pode possuir mais de 120 anos
Para testar, crie pelo menos duas pessoas.

🚀 Exercício 2: Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.
  `Class`: Student
  `Extends`: Person
  `Attributes`:
      - enrollment: matrícula da pessoa estudante
      - examsGrades: notas de provas
      - worksGrades: notas de trabalhos
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome e data de nascimento e
        preencher a matrícula automaticamente
      - sumGrades: retorna a soma das notas da pessoa estudante
      - sumAverageGrade: retorna a média das notas da pessoa estudante
      - generateEnrollment: retorna uma string única gerada
        como matrícula para a pessoa estudante
  `Validations`:
      - A matrícula deve possuir no mínimo 16 caracteres
      - A pessoa estudante deve possuir no máximo 4 notas de provas
      - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
Para testar, crie pelo menos cinco pessoas estudantes.

🚀 Exercício 3: Crie uma interface que representará uma pessoa funcionária.
  `Interface`: Employee
  `Attributes`:
      - registration: número do registro
      - salary: valor do salário
      - admissionDate: data de admissão
  `Methods`:
      - generateRegistration: retorna uma string única gerada como registro
  🚀 Exercício 4: Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
  Copiar
  `Class`: Subject
  `Attributes`:
      - name: nome da disciplina
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome
  `Validations`:
      - O nome tem que possuir no mínimo 3 caracteres
Para testar, crie as disciplinas Matemática, História, Filosofia.

🚀 Exercício 5: Crie uma classe cujos objetos representem uma pessoa professora.
  `Class`: Teacher
  `Extends`: Person
  `Implements`: Employee
  `Attributes`:
      - subject: a disciplina lecionada pela pessoa professora
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome, data de nascimento, salário
        e a disciplina
  `Validations`:
      - O registro deve possuir no mínimo 16 caracteres
      - O salário não pode ser negativo.
      - A data de admissão não pode ser no futuro
Para testar, crie uma pessoa professora para cada disciplina criada no exercício anterior.


/////////////////////////////////////////////////////////////////////////////////////////////////////////


EXECICIOS 27.3

Exercício 1: A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes que herdam dela.

🚀 Exercício 2: Notamos também que tanto nossa classe de pessoa estudante quanto a classe de pessoa professora possuem um método parecido, que retorna uma string única gerada para servir de identificador daquele tipo de pessoa (respectivamente, a matrícula e o registro). Para termos mais reuso de código e adequar melhor nosso sistema à POO:
  A: Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.
  B: Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.
  C: Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.
Nossa nova modelagem para esses componentes ficará assim:
  `Interface`: Enrollable
  `Attributes`:
      - enrollment: identificador único da matrícula
  `Methods`:
      - generateEnrollment: retorna uma string única gerada como matrícula

  `Class`: Student
  `Extends`: Person
  `Implements`: Enrollable
  `Attributes`:
      - examsGrades: notas de provas
      - worksGrades: notas de trabalhos
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
      - sumGrades: retorna a soma das notas da pessoa estudante
      - sumAverageGrade: retorna a média das notas da pessoa estudante
  `Validations`:
      - A matrícula deve possuir no mínimo 16 caracteres
      - A pessoa estudante deve possuir no máximo 4 notas de provas
      - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos

  `Class`: Employee
  `Extends`: Person
  `Implements`: Enrollable
  `Attributes`:
      - salary: valor do salário
      - admissionDate: data de admissão
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente
  `Validations`:
      - A matrícula deve possuir no mínimo 16 caracteres
      - O salário não pode ser negativo.
      - A data de admissão não pode ser no futuro

  `Class`: Teacher
  `Extends`: Employee
  `Attributes`:
      - subject: a disciplina lecionada pela pessoa professora
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
  `Validations`:
      - A matrícula deve possuir no mínimo 16 caracteres
      - O salário não pode ser negativo.
      - A data de admissão não pode ser no futuro
Para testar crie duas pessoas estudantes e duas pessoas professoras.

Exercício 3: Vamos agora melhorar um pouco nossa classe de pessoa estudante. Para isso vamos criar uma nova classe cujas as instâncias representam as avaliações aplicadas pela escola e a nossa pessoa estudante agora passará a ter como propriedade uma unica lista que carrega os resultados das avaliações que ela realizou. A nossa classe avaliações conterá a pontuação da avaliação, a pessoa professora e o tipo de avaliação. A nossa classe de resultado de avaliação conterá a avaliação e a nota da pessoa estudante.

  `Class`: Evaluation
  `Attributes`:
      - score: nota da avaliação
      - teacher: pessoa professora
      - type: tipo da avaliação
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro a pontuação, a pessoa professora e o tipo
  `Validations`:
      - O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"
      - A pontuação não pode ser negativa
      - A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos
      - A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos

  `Class`: EvaluationResult
  `Attributes`:
      - evaluation: a avaliação
      - score: a nota da pessoa estudante
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro a avaliação e a nota da pessoa estudante
  `Validations`:
      - A pontuação não pode ser negativa
      - A pontuação não pode ser maior que a pontuação da avaliação.

  `Class`: Student
  `Extends`: Person
  `Implements`: Enrollable
  `Attributes`:
      - evaluationsResults: lista de resultados de avaliações
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
      - sumGrades: retorna a soma das notas da pessoa estudante
      - sumAverageGrades: retorna a média das notas da pessoa estudante
      - addEvaluationResult: adiciona um novo resultado de avaliação a lista
  `Validations`:
      - A matrícula deve possuir no mínimo 16 caracteres

Exercício 4: Ótimo! Já evoluímos bastante nosso sistema escolar, mas ainda há algumas melhorias a serem feitas. Nossa classe de avaliação está carregando muita responsabilidade tendo que lidar com tipos diferentes de avaliação. Então, vamos refatorar nosso sistema pra que cada tipo de avaliação passe a ser uma especialização da nossa classe de avaliação e, assim como para nossa classe de pessoa, não faz sentido termos instâncias de avaliação no nosso sistema somente de suas especializações.

  `Abstract Class`: Evaluation
  `Attributes`:
      - score: nota da avaliação
      - teacher: pessoa professora
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro a pontuação, a pessoa professora
  `Validations`:
      - A pontuação não pode ser negativa

  `Class`: Exam
  `Extends`: Evaluation
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro a pontuação, a pessoa professora
  `Validations`:
      - A pontuação não pode ser negativa
      - A pontuação não pode passar de 25 pontos

  `Class`: Work
  `Extends`: Evaluation
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro a pontuação, a pessoa professora
  `Validations`:
      - A pontuação não pode ser negativa
      - A pontuação não pode passar de 50 pontos
  Para testar crie 2 avaliações para cada pessoa professora criada no exercício 2, uma do tipo prova e outra do tipo trabalho, e adicione um resultado para cada avaliação para as duas pessoas estudantes que também foram criadas no exercício 2.

Exercício 5: Você se lembra daquele pequeno software de uma lanchonete que nós começamos a construir no primeiro dia? Então, vamos retomá-lo agora. A nossa escola possui uma lanchonete e, pra fazer a gerência da mesma, vamos adicionar ao nosso sistema escolar um módulo de lanchonete. Para isso precisamos transportar nossas classes referentes a lanchonete para dentro dele, fazendo algumas alterações para alinhá-lo melhor com a realidade da nossa escola.
Toda pessoa da nossa escola passa a ser uma pessoa cliente da nossa lanchonete. Sendo assim, não precisamos mais da nossa classe de pessoa cliente, e precisamos mudar o tipo de cliente no pedido para o tipo pessoa. Então, vamos alterar nossas classes do módulo de lanchonete para que contemple isso. Nossa modelagem inicial será essa:

  `Class`: OrderItem
  `Attributes`:
      - name: nome do produto
      - price: preco do produto
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro o nome do produto e o preço.
  `Validations`:
      - O nome do produto deve conter pelo menos 3 caracteres
      - O preço não pode ser negativo
  
  `Class`: Order
  `Attributes`:
      - client: pessoa cliente
      - items: os itens consumidos
      - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
      - discount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, e o disconto caso exista
      - calculateTotal: retorna o valor total do pedido
      - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.
  `Validations`:
      - A pessoa cliente deve ser uma instância da nossa classe pessoa
      - O pedido deve ter pelo menos um item
      - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
      - O disconto não pode ser negativo
Para testar realize um pedido para cada pessoa criada no nosso exercício 2 em nossa lanchonete.

Exercício 6: Agora vamos gerar alguns relatórios das vendas da lanchonete da escola em nosso sistema. Para isso, crie uma classe onde trataremos como um repositório para nossos pedidos (você não precisa se atentar para essa nomenclatura nesse momento). Essa classe terá uma lista com os pedidos realizados. Além disso, teremos os seguintes métodos:

  Adicionar pedido (que adiciona um pedido a lista);
  Remover pedido (que remove um pedido da lista);
  Buscar pedido por cliente (que recebe uma pessoa cliente por parâmetro e busca todos os pedidos dela);
  Ordenar pedidos por valor (que recebe por parâmetro uma ordem e devolve a lista de pedidos ordenada por valor do maior para o menor ou vice-versa).

  `Class`: OrderRepository
  `Attributes`:
      - orders: lista de pedidos
  `Methods`:
      - addOrder: recebe um pedido por parâmetro e adiciona a lista
      - removeOrder: recebe um pedido por parâmetro e o remove da lista
      - listByClient: recebe uma pessoa cliente por parâmetro e devolve todos os pedidos dela
      - listBySortedValue: recebe por parâmetro uma string, podendo ser "maior" ou "menor" e retorna a lista de pedidos ordenada do maior valor para o menor ou vice-versa
  Além disso vamos precisar também alterar nossa classe de pedido para adicionarmos um identificador único a cada pedido e a data em que o pedido foi realizado:
  Copiar
  `Class`: Order
  `Attributes`:
      - id: identificador único do pedido
      - createdAt: data em que o pedido foi criado
      - client: pessoa cliente
      - items: os itens consumidos
      - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
      - dicount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto
  `Methods`:
      - Getters/Setters
      - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, e o disconto caso exista, além disso deve setar o valor para o id e a data de criação do pedido
      - calculateTotal: retorna o valor total do pedido
      - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.
  `Validations`:
      - O identificador do pedido deve ser um número único gerado aleatóriamente
      - A data do pedido não pode ser no futuro
      - A pessoa cliente deve ser uma instância da nossa classe pessoa
      - O pedido deve ter pelo menos um item
      - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
      - O desconto não pode ser negativo


