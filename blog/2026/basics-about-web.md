---
title: "Como a Web Funciona"
description: "Explicação simples e didática sobre como a web conecta clientes e servidores."
date: "2026-02-23"
cover: "https://www.none.edu.vn/images/blog/1690435110How-a-Website-Works.png"
---
Uma das grandes dúvidas que eu tinha quando eu tava começando a desenvolver aplicações web era justamente como as coisas poderiam se conectar, como um site que eu criava com html e css conseguia salvar dados. Meu objetivo com esse artigo é justamente ajudar quem está passando por esse momento e esclarecer de forma simples e didática como a web funciona.

## Web
Computadores conectados à internet são chamados de **clients** e **servers**. São dispositivos geralmente utilizados por nós: pode ser nosso celular, nosso computador desktop, tablet ou até mesmo outro servidor.

Servidores são computadores que armazenam sites, aplicativos e páginas web, fornecendo o conteúdo quando algum client faz uma solicitação.
![Client](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works/simple-client-server.png)
 Isso é uma explicação simplificada do que realmente acontece. Para que tudo funcione corretamente, existem outros componentes que precisam estar presentes: conexão com a internet, TCP/IP, DNS, HTTP e o código dos websites (HTML, JavaScript e CSS). São assuntos que, por enquanto, não vale a pena aprofundar aqui, mas se você quiser se [aprofundar](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) no tema, vale a pena estudar mais sobre isso.
## Client (Frontend)
Quando falamos de um **client**, estamos falando do código que executa na máquina do usuário. Geralmente, quando estamos falando de desenvolvimento web, a aplicação que carrega esse código na nossa máquina é o navegador.

Como desenvolvedores web, parte do nosso trabalho é criar o código que será executado por esses navegadores. A forma mais básica de fazer isso é através de HTML, CSS e JavaScript.

O HTML fornece a estrutura das páginas web. O CSS fornece a estilização das páginas. Com essas duas tecnologias, tínhamos a Web 1.0, uma versão da web focada principalmente na leitura de informações.

A Web 2.0, foco deste artigo, é uma versão aprimorada cujo principal objetivo é permitir conteúdo gerado pelo próprio usuário (postar, compartilhar e comentar). Nessa versão da web surgiu a necessidade de tecnologias que facilitassem a interação entre o usuário e a plataforma, e foi nesse contexto que o JavaScript ganhou protagonismo, seguido posteriormente pelos seus frameworks.

 Hoje em dia, temos a [web 3.0](https://aws.amazon.com/pt/what-is/web3/), que tem como objetivo descentralizar e distribuir os dados.

## Server (Backend)
Se o client é o que roda no navegador do usuário, o server é o que roda em outro computador, geralmente na nuvem.

O backend é responsável por receber requisições, processar dados, aplicar regras de negócio, salvar informações e retornar respostas.

Quando você clica em “cadastrar”, por exemplo, o que acontece por baixo dos panos é, mais ou menos, o seguinte:

1. O navegador envia os dados para o servidor.
2. O servidor recebe esses dados.
3. O servidor valida as informações.
4. O servidor salva as informações no banco de dados.
5. O servidor retorna uma resposta para o navegador.
6. O navegador atualiza a tela.

Ou seja, o HTML sozinho nunca salva nenhuma informação. Ele apenas coleta os dados. Quem realmente salva é o backend.

A comunicação entre o frontend e o backend acontece através de um protocolo chamado HTTP. Existem alguns tipos principais de requisições: GET, POST, PUT e DELETE.

Quando você acessa um perfil no instagram o seu navegador faz:
```
GET /perfil
```
Quando você posta uma foto:
```
POST /postagem
```

## Banco de dados
O banco de dados é responsável por armazenar as informações de forma organizada. Usuários, senhas, comentários, pedidos, pagamentos… tudo isso vai para o banco.

Em aplicações tradicionais, o backend conversa com o banco de dados, não o frontend. Essa separação é importante por questões de segurança. Como o frontend executa no computador do usuário, para que ele tivesse acesso direto ao banco de dados seria necessário que as credenciais também estivessem na máquina do usuário. Isso, essencialmente, daria acesso ao banco para qualquer pessoa.

O banco de dados não entende HTML nem JavaScript. Ele entende comandos específicos, como SQL.
## Frameworks
À medida que a Web 2.0 evoluiu, as aplicações ficaram cada vez mais complexas.  
Criar tudo manualmente apenas com HTML, CSS e JavaScript puro começou a se tornar difícil de manter.

Imagine ter que:

- Criar manualmente toda a estrutura de rotas
- Validar formulários do zero
- Gerenciar estados complexos da interface
- Criar autenticação
- Organizar centenas de arquivos
- Lidar com segurança

Um framework é um conjunto de ferramentas, padrões e estruturas que já vêm prontos para resolver problemas comuns no desenvolvimento. Em vez de você construir tudo do zero, você trabalha dentro de uma estrutura já organizada.

Uma diferença importante um framework define a estrutura do seu projeto e você trabalha dentro dela, em uma biblioteca você chama ela quando quiser.
### Frameworks no Frontend
No frontend, frameworks ajudam principalmente a:

- Criar interfaces interativas
- Organizar componentes reutilizáveis
- Controlar o estado da aplicação
- Atualizar a tela dinamicamente

Exemplos populares:
- React
- Vue
- Angular

Eles permitem que a interface seja construída em pequenos blocos chamados componentes.
### Frameworks no Backend
No backend, frameworks ajudam a:

- Criar rotas HTTP
- Validar requisições    
- Conectar com banco de dados
- Implementar autenticação
- Organizar regras de negócio

Exemplos:
- Django
- FastAPI
- Express
- Spring Boot

Eles oferecem uma estrutura base para você construir sua aplicação com mais segurança e organização.

## Conclusão
A web é um ecossistema complexo, mas entender os conceitos básicos de como clientes e servidores se comunicam é fundamental para qualquer desenvolvedor web. O frontend é o que o usuário vê e interage, enquanto o backend é o motor que processa dados e mantém a aplicação funcionando. Frameworks são ferramentas que facilitam o desenvolvimento, oferecendo soluções prontas para problemas comuns. Com esses conceitos em mente, você estará melhor preparado para criar aplicações!

É importante lembrar que isso é apenas o começo. Aplicações reais são muito mais complexas e envolvem muitos outros conceitos, como segurança, escalabilidade, performance, sistemas distribuidos, entre outros. A web está em constante evolução, e novas tecnologias e padrões estão sempre surgindo. Manter-se atualizado e continuar aprendendo é essencial para qualquer desenvolvedor.