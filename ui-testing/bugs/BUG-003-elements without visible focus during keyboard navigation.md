# BUG-003 — Elementos sem foco visível durante navegação por teclado - Elements without visible focus during keyboard navigation

## Descrição - Description

Os elementos interativos da aplicação não apresentam indicação visual clara de foco durante navegação utilizando teclado.

Interactive elements in the application do not display a clear visible focus indication during keyboard navigation.

## Passos para reproduzir — Steps to reproduce

```text
1. Acessar https://www.saucedemo.com  
2. Fazer login com credenciais válidas  
3. Navegar pela aplicação utilizando apenas TAB e ENTER  
4. Observar os elementos focados durante navegação
```

```text
1. Access https://www.saucedemo.com  
2. Login with valid credentials  
3. Navigate through the application using only TAB and ENTER  
4. Observe focused elements during navigation
```

## Resultado esperado — Expected result

Os elementos interativos devem possuir indicação visual clara de foco durante navegação por teclado.

Interactive elements should provide a clear visible focus indication during keyboard navigation.

## Resultado atual — Actual result

A navegação por teclado funciona, porém não há indicação visual clara dos elementos atualmente focados.

Keyboard navigation works correctly, however there is no clear visual indication of the currently focused elements.

## Severidade — Severity

Médio - Medium