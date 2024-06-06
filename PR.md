# Persistência de dados

Passos que foram feitos para persistir os dados:
- Execução do script `convert-dataset.py` que converte arrays em string para arrays em JSON.
    - Lista de gêneros
    - Lista de personagens
    - Lista de prêmios
    - Lista de avaliações por estrelas
    - Lista de cenários
    - Autores foram separados por vírgula e colocados numa array
- Trocado nome de "bookId" para "_id" manualmente (com control + f).

O resultado pode ser visto no arquivo `dataset.json` que foi o que foi usado para inserir os dados no MongoDB.

# Setup de bases de dados

Existe o container `mongo-seed` que faz a importação de dados para o container da base de dados. Este container coloca o arquivo `dataset.json` para dentro do container e executa o comando `mongoimport` para importar os dados para a base de dados.

## Resultado

```
mongo-seed-1  | 2024-06-06T13:29:02.933+0000    20000 document(s) imported successfully. 0 document(s) failed to import.
```

# Respostas textuais

## Exercício 1

Foi usado como id o campo `_id` (que foi o campo `bookId` renomeado) para o request `GET /books/:id`.

# Detalhes de implementação

# Exercício 2

Como alguns ids são muito grandes, e que acabam por ocupar muito espaço da tabela, o id mostrado na tabela é truncado para 50 caracteres.

O identificador de autores foi escolhido como o nome do autor.

# Instruções de execução

O projeto está containerizado, então para executar basta rodar o comando:

```
docker compose up --build
``` 

# Ações necessárias

Nenhuma ação extra necessária, o dataset já está pronto no `dataset.json` e é importado automaticamente para a base de dados.