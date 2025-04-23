# API de Gerenciamento de Tarefas

Uma API RESTful completa para gerenciamento de tarefas desenvolvida com Node.js, Express e PostgreSQL.

## 📋 Visão Geral

Este projeto é uma API para gerenciamento de tarefas que permite aos usuários:

- Criar conta e fazer login com autenticação segura via JWT
- Criar, visualizar, editar e excluir tarefas
- Categorizar tarefas e definir níveis de prioridade
- Filtrar tarefas por diferentes parâmetros
- Definir prazos e status de conclusão

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **PostgreSQL** - Banco de dados relacional
- **TypeORM** - ORM para PostgreSQL
- **JWT** - JSON Web Token para autenticação
- **Bcrypt** - Criptografia de senhas
- **Swagger** - Documentação da API
- **Jest** - Framework de testes

## ⚙️ Instalação e Configuração

### Pré-requisitos
- Node.js (v14.x ou superior)
- npm ou yarn
- PostgreSQL (local ou serviço em nuvem)

### Passos para Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PauloSchneider/api-tarefas.git
cd api-tarefas
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com base no `.env.example`
   - Configure as variáveis necessárias (dados de conexão PostgreSQL, chave secreta JWT, etc.)

4. Inicie o banco de dados:
```bash
npm run typeorm:run-migrations
```

5. Inicie o servidor:
```bash
npm run dev
# ou
yarn dev
```

6. A API estará disponível em: `http://localhost:3334`

## 📚 Documentação da API

A documentação completa está disponível através do Swagger UI:
```
http://localhost:3334/api-docs
```

### Principais Endpoints

| Método | Endpoint           | Descrição               |
|--------|--------------------|-------------------------|
| POST   | /api/auth/register | Cadastrar novo usuário  |
| POST   | /api/auth/login    | Autenticar usuário      |
| GET    | /api/tasks         | Listar tarefas          |
| POST   | /api/tasks         | Criar nova tarefa       |
| GET    | /api/tasks/:id     | Obter tarefa específica |
| PUT    | /api/tasks/:id     | Atualizar tarefa        |
| DELETE | /api/tasks/:id     | Excluir tarefa          |
| GET    | /api/categories    | Listar categorias       |

## ✅ Recursos Implementados

- **Autenticação Segura**: Sistema completo com registro, login e proteção de rotas
- **CRUD Completo**: Operações para manipulação de tarefas
- **Categorização**: Organização por categorias customizáveis
- **Priorização**: Níveis de prioridade configuráveis
- **Busca e Filtros**: Filtragem avançada por múltiplos parâmetros
- **Paginação**: Resultados paginados para melhor performance
- **Validação**: Validação completa de entradas com mensagens de erro claras
- **Documentação**: API totalmente documentada com Swagger
- **Relações**: Implementação de relações entre entidades usando TypeORM
- **Type-safety**: Tipagem forte com TypeScript em todo o projeto

## 🧪 Testes

```bash
# Executar testes unitários
npm run test

# Executar testes com coverage
npm run test:coverage
```

## 📞 Contato

Nome: Paulo Schneider
[Email](mailto:prschneider98@gmail.com)
[LinkedIn](https://www.linkedin.com/in/paulo-schneider-b720a619a/)