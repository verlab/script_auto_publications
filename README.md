# script_publications
Script para listar e plotar todas as producoes cientificas desenvolvidas no VeRlab!

https://www.verlab.dcc.ufmg.br/publications-auto/



## Como atualizar a lista de publicacoes manualmente (bibtex)
- Para atualizar a lista, basta editar (usando o proprio github) o seguinte arquivo.
https://github.com/verlab/script_publications/blob/main/publications.bib

## Observacoes
- O script vai fazer um parser desse arquivo bibtex e categorizar os dados em tipos, e.g. master ou phd thesis, conferencia, journal, book, etc.
- Basta utilizar a sintaxe correntamente ou criar ou copiar um .bibtex.
- Nunca utiliza o simbolo "@" dentro da estrutura e.g. @inprocedings{...}, pois tera erro de parser.
- Utilizando campo url, se voce colocar um link para um pdf ou para a pagina, este devera aparece como um icone na frente da referencia na pagina.
