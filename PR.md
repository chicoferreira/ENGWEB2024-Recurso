# Persistência de dados

Passos que foram feitos para persistir os dados:
- Execução do script `convert-dataset.py` que converte arrays em string para arrays em JSON.
    - Lista de gêneros
    - Lista de personagens
    - Lista de prêmios
    - Lista de avaliações por estrelas
    - Lista de cenários
    - Autores foram separados por vírgula e colocados numa array
- Trocado nome de "bookId" para "_id"

O resultado pode ser visto no arquivo `dataset.json` que foi o que foi usado para inserir os dados no MongoDB.

# Setup de bases de dados

Existe o container `mongo-seed` que faz a importação de dados para o container da base de dados. Este container coloca o arquivo `dataset.json` para dentro do container e executa o comando `mongoimport` para importar os dados para a base de dados.

## Resultado

```
mongo-seed-1  | 2024-06-06T13:29:02.933+0000    20000 document(s) imported successfully. 0 document(s) failed to import.
```

# Respostas textuais

# Instruções de execução

# Ações necessárias