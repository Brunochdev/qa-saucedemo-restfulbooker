# Análise de Bugs da API - API Bug Analysis

## BUG-001 — API aceita campos vazios na criação de reservas - API accepts empty booking fields

### Descrição - Description

A API aceita requisições de criação de reservas com campos obrigatórios vazios e ainda retorna status code 200.
The API accepts booking creation requests with empty required fields and still returns status code 200.

### Impacto - Impact 

Esse comportamento pode gerar dados inconsistentes de reservas e comprometer regras de negócio relacionadas à validação de reservas.
This behavior may generate inconsistent reservation data and compromise business rules related to booking validation.

---

## BUG-002 — Valores null inválidos retornam Internal Server Error - Invalid null values return Internal Server Error

### Descrição - Description

Enviar valores null em campos obrigatórios faz a API retornar 500 Internal Server Error.
Sending null values in required fields causes the API to return 500 Internal Server Error.

### Comportamento Esperado - Expected Behavior

A API deveria validar entradas inválidas e retornar 400 Bad Request em vez de expor erros internos do servidor.
The API should validate invalid inputs and return 400 Bad Request instead of exposing internal server errors.

### Impacto - Impact

Isso pode indicar ausência de validação no backend e tratamento inadequado de erros.
This may indicate missing backend validation and poor error handling.