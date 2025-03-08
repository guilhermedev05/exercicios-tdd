# Exercicios Javascript + Testes automatizados com Jest

Este repositório contém três exercícios distintos, cada um organizado em uma pasta separada. Cada exercício possui uma aplicação prática com testes automatizados utilizando o Jest.

## Estrutura do Repositório
- `exercicio2/` - Gerenciador de biblioteca
- `exercicio3/` - Gerenciador de conta bancária
- `exercicio4/` - Gerenciador de notas

---

## Exercício 2: Gerenciador de Biblioteca
Funções implementadas:
- Adicionar um livro
- Consultar os livros adicionados
- Buscar um livro por título ou autor
- Emprestar um livro (muda o status para 'emprestado')
- Devolver um livro (muda o status para 'disponível')

## Exercício 3: Gerenciador de Conta Bancária
Funções implementadas:
- Criar uma conta com saldo inicial
- Depositar dinheiro na conta
- Sacar dinheiro (se houver saldo suficiente)
- Consultar o saldo
- Impedir saque maior que o saldo disponível

## Exercício 4: Gerenciador de Notas
Funções implementadas:
- Adicionar notas (com validação para evitar valores não numéricos ou negativos)
- Calcular a média das notas
- Retornar a maior nota
- Retornar a menor nota

---

## Testes
Todos os exercícios possuem testes automatizados utilizando o Jest. Para executar os testes, navegue até a pasta do exercício desejado e rode o comando:
```
npm test
```
Certifique-se de que as dependências estejam instaladas com:
```
npm install
```

## Pré-requisitos
- Node.js
- Jest instalado globalmente ou no projeto

## Como utilizar
1. Clone o repositório
2. Navegue até o diretório do exercício desejado
3. Instale as dependências com `npm install`
4. Rode os testes com `npm test`

---

Mantenha o repositório atualizado e sinta-se à vontade para contribuir!