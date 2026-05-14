# BUG-002 — Espaçamento excessivo entre produtos em viewport mobile - Excessive spacing between products on mobile viewport

## Descrição - Description

Foi identificado espaçamento excessivo entre os elementos da listagem de produtos em resolução mobile, causando desalinhamento visual e possível impacto na experiência do usuário.

Excessive spacing was identified between product listing elements on mobile resolution, causing visual misalignment and possible impact on user experience.

## Passos para reproduzir — Steps to reproduce

```text
1. Acessar https://www.saucedemo.com  
2. Fazer login com credenciais válidas  
3. Abrir DevTools em modo responsivo/mobile  
4. Selecionar viewport mobile (ex.: iPhone 13)  
5. Acessar a página de produtos
```

```text
1. Access https://www.saucedemo.com  
2. Login with valid credentials  
3. Open DevTools in responsive/mobile mode  
4. Select a mobile viewport (e.g. iPhone 13)  
5. Access the products page
```

## Resultado esperado — Expected result

Os produtos devem ser exibidos com alinhamento consistente e espaçamento adequado entre os elementos da interface.

Products should be displayed with consistent alignment and proper spacing between interface elements.

## Resultado atual — Actual result

A página apresenta grandes espaços em branco entre os produtos em resolução mobile.

The page displays large blank spaces between products on mobile resolution.

## Severidade — Severity

Baixo - Low