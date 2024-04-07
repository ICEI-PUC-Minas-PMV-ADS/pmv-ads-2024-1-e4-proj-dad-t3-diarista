# Plano de Testes de Software
As tabelas abaixo identificam os requisitos funcionais e não-funcionais do projeto que serão testados.

|Caso de Teste|RF-001|
|-|-|
|Descrição do requisito | O sistema deve permitir que a diarista faça o login.|
|Descrição do teste:| Clicar em ENTRAR e preencher os dados.
|Caso de êxito: | Preencher corretammente email e senha.|
|Caso de falha: | Preencher incorretamente email ou senha.|

|Caso de Teste|RF-002|
|-|-|
|Descrição do requisito |**RF-007:**  O sistema deve permitir o cadastro, edição e exclusão de clientes da diarista.|
|Descrição do teste:| Clicar em cadastrar clientes e preencher os dados. Com o cliente já cadastrado, clicar em editar e salvar ou clicar em deletar, e salvar alterações.|
|Caso de êxito: | Exibição da tela de clientes atualizada. |


|Caso de Teste|RNF|
|-|-|
|Descrição do Teste |**RF-007:**  Teste de acesso ao banco.|
|Descrição do teste:| Iniciar o banco de dados pelo prompt de comando e compilar o codigo para abertura do swagger e execução da solução.
|Caso de êxito: | Exibição das collections no prompt de comando, ao iniciar o banco. Ao compilar o codigo, abrir o swagger e executa-lo, retornar codigo de êxito 200 com o array de valor.|
|Caso de falha: | Prompt de comando nao mostra as collections. Swagger retorna erro de codigo 500, ou retorna array vazio.|


 
