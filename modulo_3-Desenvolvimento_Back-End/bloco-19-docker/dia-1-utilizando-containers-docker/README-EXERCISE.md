1 - No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;

2 - Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;

3 - Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;

4 - No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;
Encerre o terminal ;

5 - Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;

6 - Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;

7 - Retome o container que foi criado anteriormente nesse exercício ;

8 - Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;

9 - Encerre o terminal ;

10 - Remova somente o container criado para esse exercício ;

11 - (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;

12 - (Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].

