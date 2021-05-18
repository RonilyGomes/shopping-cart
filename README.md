# **Descrição**

 Este é um projeto simples de carrinho de compras,  com intuito de aprender sobre as ferramentas Next Js, Nest Js e seu uso com GraphQl. 
 Nesse projeto o foco foi aplicar os conhecimentos adiquiridos em javascript, typescript e graphQl, sendo assim uma das melhorias encontradas foi adicionar suporte ao layout responsivo.

### Requisitos mínimos

Ter instalado na máquina o [docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/install/), [node js](https://nodejs.org/en/download/package-manager/) e [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

### Instalação Nest Js

A aplicação [Nest.js](https://nestjs.com/) requer Node v12+ para rodar.

Para iniciar a instalação, acesse o diretório da api e instale as dependências:

```sh
$ npm install
```

Para iniciar o servidor:

```sh
$ npm run start:dev
```

Você pode verificar o serviço, acessando o seguinte endereço no navegador de sua preferência:

```sh
localhost:4000
```

Para executar os testes, execute o comando abaixo:
```sh
$ npm run test
```

### Instalação do Next Js

A aplicação [Next.js](https://nextjs.org/) requer Node v12+ para rodar.

Para iniciar a instalação, acesse o diretório da aplicação web:

```sh
$ cd web
```

Em seguida, instale as dependências:

```sh
$ yarn install
```

Para iniciar a aplicação:

```sh
$ yarn dev
```

Você pode verificar a aplicação, acessando o seguinte endereço no navegador de sua preferência:

```sh
localhost:3000
```

### Banco de dados
Caso não tenha instalado o PostgreSQL em sua máquina, basta executa o comando abaixo na raiz do projeto:

```sh
$ docker-compose up
```

Isso criará o banco de dados e serão inseridos dados utilizados nos testes. 

Em sequência, execute o comando abaixo e  altere a variável `TYPEORM_HOST` no arquivo .env da api

```sh
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db_shopping_cart
```
