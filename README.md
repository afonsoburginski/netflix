
<h3 align = "center" fontSize="60px">
  Clone da plataforma de streaming <a href="https://www.netflix.com/">Netflix</a>
</h3>
<p align="center">
    <img src="src/img/netflix-screen.png" alt="Logo" height=600></a>


## :rocket: Tecnologias
-  JavaScript
-  React.js
-  React-icons
-  Styled-Components
## 💻 Sobre o projeto

Interface da netflix reacriada [Netflix](https://www.netflix.com) com o objetivo de estudo e treinamento de habilidades como o React.JS e CSS3. O projeto foi desenvolvido em conjunto à aula do professor [Bonieky Lacerda](https://www.youtube.com/watch?v=tBweoUiMsDg&ab_channel=BoniekyLacerda) como material de apoio.

Todos os dados dos catálogos como título, descrição, capa, foto de background e avaliação foram extraídos ao usar a [API TMDb](https://www.themoviedb.org/documentation/api).

### Funcionalidades

- [x] **Spinning Loading**: Efeito ao trazer os dados da API.

- [x] **Catálogo Destaque**: Selecionar um catálogo de forma aleatória e apresentá-lo na página inicial.

- [x] **Listagem Sessões**: Ao consumir a API separar os catálogos em sessões.

- [x] **Efeito Menu**: Criar um efeito no background do menu conforme o scroll da tela do usuário.

- [x] **Cartão Catálogo**: Apresentar um cartão com os detalhes do catálogo ao passar o mouse por cima da capa.

- [x] **Listagem Carrossel**: Apresentar botões de controle para manipular a visualização dos itens da sessão.

- [ ] **Listagem Infinita**: Ao chegar no final da lista dos catálogos deve-se apresentar os mesmos itens do início.


## :computer_mouse: Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:afonsoburginski/netflix-project.git && cd netflix-project
```

Para ter acesso a API você precisará de uma chave, basta criar uma conta no TMDB para ter acesso, [link do cadastro](https://www.themoviedb.org/signup). Caminho da chave: **Perfil -> Configurações -> API -> Chave da API**

Renomeie o arquivo `.env.example` para `.env` e cole o valor da sua chave no campo **REACT_APP_API_KEY**. Agora instale as dependências e execute o projeto:

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn start
```

## :space_invader: Contribuir

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
# Clonando projeto
$ git clone https://github.com/SEU-NOME-DE-USUARIO/netflix-clone.git

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add.

# Criando commit e a mensagem
$ git commit -m "Corrigindo...."

# Enviando alterações para o brach
$ git push origin minha-alteracao
```
Você deve navegar até o seu repositório onde fez o fork e clicar no botão *New pull request* no lado esquerdo da página.

## :alien: Autor
-  [Github](https://github.com/afonsoburginski/)
-  [Linkedin](https://www.linkedin.com/in/afonso-kevin-burginski-76aa05175/)
-  [Email](mailto:burginskikevin@gmail.com/)

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
