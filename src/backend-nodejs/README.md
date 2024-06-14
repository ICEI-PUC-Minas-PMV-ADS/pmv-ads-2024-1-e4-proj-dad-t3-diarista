# Projeto Diarista Backend PUC 📝

Bem-vindo ao meu projeto Node! Este README irá guiá-lo pelos passos necessários para rodar a aplicação.

## Pré-requisitos 🛠️

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Node.js
- NPM (gerenciador de pacotes do Node)
- Conta no [MongoDB Atlas](https://cloud.mongodb.com) com um cluster configurado

## Como rodar o projeto 🚀

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/santanagabi/backend-diarista-puc.git
    cd backend-diarista-puc
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente**:

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes linhas:

    ```env
    DB_USER=santanagabi
    DB_PASS=senha123
    SECRET=12345
    ```

4. **Inicie o servidor**:

    ```bash
    npm start
    ```

    Ou, se preferir usar o `nodemon` para desenvolvimento:

    ```bash
    npx nodemon server.js
    ```

5. **Acesse a aplicação**:

    A aplicação estará rodando em `http://localhost:3000`.

## Rotas da API 🛣️

- **GET** `/` - Pega todos os usuários
- **GET** `/:id` - Pega um usuário por ID (rota privada, requer token)
- **POST** `/auth/register` - Registra um novo usuário
- **POST** `/auth/login` - Faz login do usuário e retorna um token
- **DELETE** `/:id` - Deleta um usuário por ID

## Configuração do MongoDB ⚙️

Para configurar o MongoDB:

- Acesse o [MongoDB Atlas](https://cloud.mongodb.com) e crie um cluster.
- Obtenha as credenciais de acesso (usuário e senha) e insira no arquivo `.env`.

## Middleware de Autenticação 🔐

Para acessar rotas protegidas, utilize o token JWT no header da requisição:

```http
Authorization: Bearer seu_token_aqui
```

## Hospedagem 🌐
Este projeto está hospedado no Render. Você pode acessá-lo em https://backend-diarista-puc.onrender.com.

