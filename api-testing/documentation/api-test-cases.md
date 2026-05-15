# Casos de Teste da API - API Test Cases

## Autenticação - Authentication 

* Gerar token de autenticação - Generate authentication token
* Validar resposta de autenticação com sucesso - Validate successful authentication response

## Booking CRUD — CRUD de Reservas

* Criar reserva - Create booking
* Buscar reserva por ID - Get booking by ID
* Atualizar reserva - Update booking
* Remover reserva - Delete booking

## Validation Tests — Testes de Validação

* Criar reserva com campos vazios - Create booking with empty fields
* Criar reserva com valores inválidos - Create booking with invalid values

## Security Tests — Testes de Segurança

* Tentar atualização sem token de autenticação - Attempt update request without authentication token

## Performance Tests — Testes de Performance

* Validar tempo de resposta abaixo de 5000ms - Validate response time below 5000ms

## Filter Tests — Testes de Filtro

* Filtrar reservas por primeiro nome - Filter booking by firstname
* Filtrar reservas por sobrenome - Filter booking by lastname
