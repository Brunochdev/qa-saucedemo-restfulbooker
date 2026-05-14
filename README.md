# QA Testing Project — SauceDemo & Restful-Booker

Este projeto demonstra práticas de testes manuais e automatizados aplicadas a uma aplicação web e uma API REST.  
This project demonstrates manual and automated testing practices applied to a web application and a REST API.

Aplicações testadas — Tested applications:

- SauceDemo: https://www.saucedemo.com  
- Restful-Booker: https://restful-booker.herokuapp.com/apidoc/index.html

## Objetivo — Objective

Simular o trabalho de um analista de QA através da criação de documentação de testes, execução de cenários funcionais, automação de testes e registro de bugs encontrados.  
Simulate the work of a QA analyst by creating test documentation, executing functional scenarios, automating tests, and reporting discovered bugs.

---

# Estrutura do Projeto — Project Structure

```text
qa-saucedemo-restfulbooker
│
├── README.md
│
├── api-testing/
│   ├── collections/
|   ├── documentation/
│   ├── evidences/
│   ├── environments/
│   └──  reports/
|
├── ui-testing/
│   ├── automated-tests/
│   ├── bugs/
|   ├── evidences/
│   ├── manual-tests/
│   └── reports/
│
└── .gitignore
```

---

# Escopo dos Testes — Test Scope

## UI Testing — SauceDemo

```
- Login com diferentes tipos de usuários - Login with different user types

- Ordenação e filtragem de produtos - Product sorting and filtering

- Fluxo completo de compra - Complete checkout flow

- Remoção de itens do carrinho - Cart item removal

- Navegação entre páginas - Navigation between pages

- Logout

- Testes de responsividade - Responsiveness testing

- Testes de acessibilidade - Accessibility testing
```

---

## API Testing — Restful-Booker

```
- Autenticação - Authentication

- CRUD de reservas - Booking CRUD operations

- Validação de campos obrigatórios - Required field validation

- Tratamento de erros - Error handling

- Filtros e buscas - Filters and search operations
```

---

# Tecnologias Utilizadas — Technologies Used

## UI Testing
- Playwright
- JavaScript

## API Testing
- Postman
- Newman

---

# Evidências — Evidences

```
As evidências dos testes estão disponíveis nas pastas:

The test evidences are available in the folders:
```

- `evidences/`
- `reports/`

---

# Autor — Author

Bruno Lucio Chagas Sêga