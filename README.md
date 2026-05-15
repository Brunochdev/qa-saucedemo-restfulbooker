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

# Como Executar — How to Run

## UI Automated Tests

```bash
cd ui-testing/automated-tests

npm install

npx playwright test
```

## Open Playwright HTML Report

```bash
npx playwright show-report
```

## API Testing

Importe a collection e environment do Postman localizados em: 
Import the Postman collection and environment files located in:

* `api-testing/collections/`
* `api-testing/environments/`

Rode as requestes usando Postman.
Run the requests using Postman.

---

# Tecnologias Utilizadas — Technologies Used

## UI Testing
- Playwright
- JavaScript

## API Testing
- Postman

---

# Evidências — Evidences

```
As evidências dos testes estão disponíveis nas pastas:

The test evidences are available in the folders:
```

- `evidences/`
- `reports/`

---

## Observações Técnicas — Technical Notes

### Português
Parte da automação foi refatorada utilizando Page Object Pattern e boas práticas de organização de testes para demonstrar conhecimento em reutilização, manutenção e escalabilidade da automação.

Outros testes foram mantidos em estrutura mais direta propositalmente, visando demonstrar diferentes abordagens de implementação e manter o foco na cobertura funcional do desafio.

### English
Part of the automation was refactored using the Page Object Pattern and test organization best practices to demonstrate knowledge of reusability, maintainability and automation scalability.

Other tests were intentionally kept in a more direct structure in order to demonstrate different implementation approaches while maintaining focus on the functional coverage of the challenge.

---

# Principais Descobertas — Main Findings

* A API aceita campos vazios durante a criação de reservas. - The API accepts empty booking fields during reservation creation.

* Payloads inválidos podem gerar respostas Internal Server Error. - Invalid payloads may generate Internal Server Error responses.

* Problemas de acessibilidade foram identificados durante testes de navegação por teclado. - Accessibility issues were identified during keyboard navigation tests.

---

# Autor — Author

Bruno Lucio Chagas Sêga