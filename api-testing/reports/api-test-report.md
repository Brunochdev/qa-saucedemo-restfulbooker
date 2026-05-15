# Relatório de Testes da API - API Test Report

## Visão Geral - Overview

Este relatório resume as atividades de testes de API realizadas na aplicação Restful-Booker.
This report summarizes the API testing activities performed on the Restful-Booker application.

---

## Cenários Executados - Executed Scenarios

### Autenticação - Authentication

* Geração de token* Token generation

### Operações CRUD - CRUD Operations

* Criar reserva - Create booking

* Buscar reserva por ID - Get booking by ID

* Atualizar reserva - Update booking

* Remover reserva - Delete booking

### Testes de Validação - Validation Tests

* Validação de campos vazios - Empty fields validation

* Tratamento de payload inválido - Invalid payload handling

### Testes de Segurança - Security Tests

* Atualização sem token de autenticação - Update request without authentication token

### Testes de Performance - Performance Tests

* Validação de tempo de resposta - Response time validation

### Testes de Filtro - Filter Tests

* Filtrar reservas por primeiro nome - Filter booking by firstname

* Filtrar reservas por sobrenome - Filter booking by lastname

---

## Resultados - Results

A maior parte dos cenários da API foi executada com sucesso e retornou as respostas esperadas - Most API scenarios executed successfully and returned the expected responses.

Algumas inconsistências foram identificadas durante os testes de validação. - Some inconsistencies were identified during validation tests.

---

## Principais Descobertas - Main Findings

* A API aceita campos vazios durante a criação de reservas. - The API accepts empty fields during booking creation.

* Payloads inválidos podem gerar respostas Internal Server Error. - Invalid payloads may generate Internal Server Error responses.

* A proteção de autenticação funcionou corretamente para endpoints protegidos. - Authentication protection worked correctly for protected endpoints.

* Os resultados de performance permaneceram dentro do tempo de resposta esperado. - Performance results remained within the expected response time threshold.

---

## Ferramentas Utilizadas - Tools Used

* Postman
* JSON
* Environment Variables
* Post-response Scripts
