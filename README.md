# My Portfolio

Este é o repositório do meu portfólio pessoal, desenvolvido para estudar e praticar React e outras tecnologias web modernas. O projeto está em desenvolvimento e será atualizado conforme eu adicionar novos projetos e funcionalidades.

## Visão Geral

O projeto é uma aplicação web que apresenta informações sobre mim, meus projetos e formas de contato. A aplicação é construída utilizando React e Vite, e estará hospedada no Vercel.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento web.
- **React Router**: Biblioteca para roteamento em aplicações React.
- **CSS Modules**: Para escopo de estilos CSS.
- **Express**: Framework para Node.js, utilizado no backend.
- **MongoDB Atlas**: Banco de dados NoSQL em nuvem.
- **Vercel**: Plataforma de hospedagem para aplicações front-end e back-end.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:


```
my-portfolio/
    .gitignore
    client/
        eslint.config.js
        index.html
        LICENSE
        package.json
        public/
        src/
            App.css
            App.jsx
            assets/
            components/
                Chatbox/
                Container/
                Footer/
                Header/
            index.css
            main.jsx
            pages/
                About/
                Chatbot/
                Contact/
                Home/
                Page404/
                Projects/
                Template/
            routes.jsx
        vercel.json
        vite.config.js
        LICENSE
        README.md
    server/
        .env
        package.json
        src/
            db.js
            handlers/
            index.js
            models/
            scripts/
            test.js
            testConnection.js
        vercel.json
        vite.config.js
```

## Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
     ```sh
     git clone https://github.com/pietro-ramos/projeto-web2.git
     cd my-portfolio
     ```

2. Instale as dependências do frontend:
     ```sh
     cd client
     npm install
     ```

3. Instale as dependências do backend:
     ```sh
     cd ../server
     npm install
     ```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` no diretório `server` com o seguinte conteúdo:
     ```properties
     MONGO_URI=mongodb://localhost:27017/services
     ```

   - Crie um arquivo [.env](http://_vscodecontentref_/30) no diretório [client](http://_vscodecontentref_/31) com o seguinte conteúdo:
     ```properties
     API_URL=http://localhost:5000
     ```

5. Execute o backend:
     ```sh
     cd server
     npm start
     ```

6. Execute o frontend:
     ```sh
     cd ../client
     npm run dev
     ```

7. Abra o navegador e acesse [http://localhost:5173](http://localhost:5173).

## Funcionalidades

- **Home**: Página inicial com uma breve introdução.
- **About**: Página sobre mim.
- **Projects**: Página com uma lista dos meus projetos.
- **Contact**: Página com informações de contato.
- **Chatbot**: Página com um chatbot interativo para consultar informações sobre serviços públicos.
- **404**: Página de erro para rotas não encontradas.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido por Pietro Ramos.