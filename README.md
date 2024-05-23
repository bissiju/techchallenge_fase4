# Tech Challenge Fase 4 - 4SOAT - Pós Tech FIAP - Software Architecture

Grupo 42:
Juliana Bissi Pires - RM 351921

Repositório:
[https://github.com/bissiju/techchallenge_fase4](https://github.com/bissiju/techchallenge_fase4)

## Changelog Fase 4

* Refatoração do projeto para microsserviços: nova desenvolvimento/abordagem para os serviços "pagamentos" e "produção/pedidos", e adaptação para o serviço "produtos".
* Orquestração dem mensageria e filas de eventos para os microsserviços com RabbitMQ.
* Implantação de banco de dados NoSQL (MongoDB) para os microsserviços "pagamentos" e "produção/pedidos", e mantido SQL (MySQL) para o microsserviço "produtos.
* Desenvolvimento de testes unitários: framework Jest com cobertura de pelo menos 80% e especificação BDD com Cucumber para o microsserviço "produtos".

## Requisitos (escopo geral do projeto - todas as fases)

Desenvolvimento de um sistema de autoatendimento para gestão de pedidos em restaurante de fast food.

Atendendo às necessidades de autenticação de cliente a partir do CPF, nome e e-mail ou sem identificação. Possibilitando que o cliente escolha itens entre as categorias de lanches, acompanhamentos, bebidas e sobremesas, a partir da exibição dos mesmos com nome, descritivo, valor e imagem. O pedido é iniciado e solicita a realização do pagamento, via integração com Mercado Pago para método de pagamento com QRCode.

O pedido é processado, e disponibilizado para o início do preparo, somente após a confirmação de pagamento enviado para o Webhook do sistema. O status do pedido é atualizado pela equipe do restaurante, conforme as etapas "recebido", "em preparação", "pronto" e "finalizado", e pode ser acompanhado pelo cliente no totem do autoatendimento.

A equipe do restaurante gerencia através de acesso administrativo, além do andamento dos pedidos, categorias, produtos e clientes.

## Especificações

* Node.js v16 e Node.js v18
* TypeScript
* Express
* MongoDB
* MySQL
* Sequelize
* Docker
* Kubernetes
* Jest
* Cucumber

## Instruções de Instalação (monolito)

Pré-requisitos:
- Docker
- Kubernetes

### Docker

Para instalação local, executar o comando `docker compose up` na raíz do projeto.

Acessar o localhost na porta 3000: http://localhost:3000

### Kubernetes

Criar imagem do Docker, a partir do diretório raiz: `docker build . -t techchallenge-fase2`

E executar os comandos do Kubernets abaixo:

`cd k8s`

`kubectl apply -f .`

Acompanhar o status:

`kubectl get pods` e `kubectl logs --follow <pod-name>`

Quando finalizado acessar o localhost na porta 31000: http://localhost:31000

### Endpoints API

Arquivo Postman Collection: /TechChallenge-Fase2.postman_collection.json

Ajustar a porta de acordo com a instalação realizada (3000 ou 31000).

Idealmente, seguir a ordenação das endpoints conforme estão dispostas na collection para validação da API.

## Demo

Vídeo demonstrativo:
https://youtu.be/u0jHQteXp40
