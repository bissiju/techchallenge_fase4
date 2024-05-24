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
* Proteçao da branch main e PR para build e validação de qualidade de código com Sonar (item realizado no microsserviço payments).

## Repositórios Microsserviços
[https://github.com/bissiju/techchallenge_fase4_products](https://github.com/bissiju/techchallenge_fase4_products)
[https://github.com/bissiju/techchallenge_fase4_orders](https://github.com/bissiju/techchallenge_fase4_orders)
[https://github.com/bissiju/techchallenge_fase4_payments](https://github.com/bissiju/techchallenge_fase4_payments)

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

### Docker

Para fins de testes locais dos microsserviços, executar o comando `docker network create app-network` para a rede externa.
Em seguida, `docker compose up` na raíz de cada projeto.

Acessar o localhost na porta 8000: http://localhost:8000

### Endpoints API

Arquivo Postman Collection para http://localhost:8000
/microservices_postman_collection.json

## Evidências dos Testes Unitários

Products:
![image](https://github.com/bissiju/techchallenge_fase4/assets/71803301/73311ddd-65b7-403c-9bfa-7343a385c210)
BDD
![image](https://github.com/bissiju/techchallenge_fase4/assets/71803301/99e7ec0a-bb6d-463a-a3fc-e7d3b8a29dfe)

Orders:
![image](https://github.com/bissiju/techchallenge_fase4/assets/71803301/c169d7c5-9c28-483c-b3bd-2187a28d9a75)

Payments:
![image](https://github.com/bissiju/techchallenge_fase4/assets/71803301/c315bfe8-94f6-4f0e-8d11-93739c923383)

## Demo

Vídeo demonstrativo:
https://youtu.be/u0jHQteXp40
