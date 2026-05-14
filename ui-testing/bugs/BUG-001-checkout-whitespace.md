# BUG-001 — Campos de checkout aceitam apenas espaços - Checkout fields accept only whitespace characters

## Descrição - Description

Os campos do formulário de checkout aceitam valores compostos apenas por espaços em branco.

The checkout form fields accept values composed only of whitespace characters.

## Passos para reproduzir — Steps to reproduce
```
1. Acessar https://www.saucedemo.com  
2. Fazer login com credenciais válidas  
3. Adicionar um produto ao carrinho  
4. Abrir o carrinho  
5. Clicar em "Checkout"  
6. Inserir apenas espaços nos campos First Name, Last Name e Postal Code  
7. Clicar em "Continue"
```
```
1. Access https://www.saucedemo.com  
2. Login with valid credentials  
3. Add a product to the cart  
4. Open the cart  
5. Click "Checkout"  
6. Enter only whitespace characters in First Name, Last Name and Postal Code fields  
7. Click "Continue"
```
## Resultado esperado — Expected result

O sistema deve impedir o envio do formulário e exibir uma mensagem de erro informando que os campos são obrigatórios.

The system should prevent form submission and display an error message indicating that the fields are required.

## Resultado atual — Actual result

O sistema aceita os valores compostos apenas por espaços e permite continuar o processo de checkout.

The system accepts values composed only of whitespace and allows the checkout process to continue.

## Severidade — Severity

Médio - Medium
