Exercício 1 :

Vamos aprimorar nossos conhecimentos sobre images e volumes , para isso:

    1. Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura: 
        1. 1.1. Tag <title> com o seguinte texto "Trybe"; 
        2. 1.2. Tag <H1> com o seguinte texto "Missão da Trybe"; 
        3. 1.3. Tag <p> com o seguinte texto "Gerar oportunidade para pessoas";

-------------------------------------------------------------------------------------------------------------------    
    2. Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

-------------------------------------------------------------------------------------------------------------------  
    3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
    
    docker run -d --name missao-trybe -p 4545:80 -v ~/trybe/trybe-exercises/modulo_3-Desenvolvimento_Back-End/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose/exercise:/usr/local/apache2/htdocs httpd:2.4

-------------------------------------------------------------------------------------------------------------------

    4. Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto "Nosso negócio é GENTE! #VQV";

-------------------------------------------------------------------------------------------------------------------    
    5. Obtenha o id do container httpd:2.4 ;

    docker container ls
    1132ebb0bfa6

-------------------------------------------------------------------------------------------------------------------

    6. Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host ;

    docker inspect 1132ebb0bfa6
      "Mounts": [
            {
                "Type": "bind",
                "Source": "/home/maria/trybe/trybe-exercises/modulo_3-Desenvolvimento_Back-End/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose/exercise",
                "Destination": "/usr/local/apache2/htdocs",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],

-------------------------------------------------------------------------------------------------------------------

    7. Agora pare o container httpd:2.4 ;

    docker container stop 1132ebb0bfa6

-------------------------------------------------------------------------------------------------------------------

    8. Exclua o seu container;

    docker container rm 1132ebb0bfa6

    9. Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

-------------------------------------------------------------------------------------------------------------------

    10. Obtenha o IMAGE ID do servidor;
    11. Depois de obter o IMAGE ID , exclua a imagem.

    docker rmi -f a8ea074f4566

####################################################################################################################
####################################################################################################################

Exercício 2 :
    1. Crie o arquivo Compose para subir um ghost blog , essa plataforma é similar com o Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:
    2. Utilize a versão "3" no arquivo;
    3. Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine ;
    4. Publique a porta 2368 , fazendo bind também para a 2368 ;
    5. Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.




Exercício 3 :
Por padrão o ghost utiliza um sqlite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:
    1. Crie um novo serviço para o nosso banco de dados, podemos utilizar um mysql, utilize a imagem mysql:5.7 ;
    2. Precisamos definir uma senha root para o nosso bd , para isso utilize a variável MYSQL_ROOT_PASSWORD , lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host , para a env do container ;
    3. Agora precisamos configurar nosso service com o ghost para utilizar o MySQL, para isso defina a variável database__client para mysql ;
    4. Defina o nome ghost para o nome do database utilizando a variável database__connection__database ;
    5. E então, indique a conexão para o nosso MySQL na env database__connection__host ;
    6. Para definir a pessoa usuária ( root ) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password .
    7. Utilize a opção depends_on para criar relações de dependências entre os serviços.
    8. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.
      
Exercício 4 :
Agora vamos praticar os conceitos de volumes e networks .
    1. Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, utilize o caminho target /var/lib/mysql .
    2. Ao invés de utilizar a rede padrão criada pelo Compose , defina uma rede chamada my-network para a comunicação dos dois serviços.
    3. Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.