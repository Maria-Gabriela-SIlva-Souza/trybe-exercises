# 1 - Qual imagem será utilizada (usaremos a última versão nesse caso, por isso não tem o parâmetro da versão)
FROM nginx

# 2 - Copiar o arquivo para a imagem - O /usr/share/nginx/html vem da documentação do nginx
COPY ./index.html /usr/share/nginx/html

# 3 - Serve para mostrar em qual porta nossa aplicação irá rodar
EXPOSE 3000

# 4 - O ENV faz com que possamos setar variáveis de ambientes que podem ser usadas depois dentro dos containers, parecidas com as consts
ENV API_URL=http://localhost:8000/api/

# 5 - Definindo pasta de trabalho da imagem, onde será direcionada ao acessar o container, facilitadora do comando RUN
WORKDIR /usr/share/nginx/html

# RUN permite rodar qualquer comando bash na hora da criação da imagem
RUN ls

# O que será executado quando subirmos o container

# ENTRYPOINT define qual executável nosso container vai usar
ENTRYPOINT [ "/usr/sbin/nginx" ] 
# Configurar parâmetros que vão ser enviados para o executável
CMD [ "-g", "daemon off;" ]

# No temrinal executar o comando //docker build .// para buildar o dockerfile desse diretório