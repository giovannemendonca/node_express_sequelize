# Projeto com Node, Express e Sequelize usando o padrão mvc

## 1- inicializa um projeto node 

* npm init -y

## 2- instalando dependêcias 

* npm install express
* npm install body-parser
* npm install nodemon
* npm install mysql2
* npm install sequelize
* npm install sequelize-cli
* npm install path

## 3- iniciar um projeto sequelize

* npx sequelize-cli init

(criou diretório config, migrations, models, seeders)

mudar os diretórios para dentro do diretório API.
criar um diretório .zequelizerc e adicionar caminhos

ex: /*

const path = require('path');

module.exports = {
    'config': path.resolve('/api/config', 'config.json'),
    'models-path': path.resolve('/api/models'),
    'seeders-path': path.resolve('/api/seeders'),
    'migrations-path': path.resolve('/api/migrations')
}

*/


## 4 - criar um banco de dados

* conecta o banco de dados criado no diretório config - config.json
* (colocar o nome do banco o usuário e senha)

## 5 - Criando o modelo a tabela com os atributos

* npx sequelize-cli model:create --name NOMETABELA --attributes nomeAtributo:tipoAtributo(ex: nome:string)

## - 6 Migrando tabela para o banco

* npx sequelize-cli db:migrate

## 7 - Populando tabela usando seeders

### 7.1 criar um novo seeders

* npx sequelize-cli seed:generate --name "demo-pessoa"
  
### 7.2 enviar seeders para o banco

* npx sequelize-cli db:seed:all


## 8 - Criar o diretório controllers para adicionar os controladores

## 9 - Criar o diretório rotes para gerenciar rotas

## obs: depois de criar as todas as tabelas, fazer associações entre elas.