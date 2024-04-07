# Plano de Testes de Software
As tabelas abaixo identificam os requisitos funcionais e não-funcionais do projeto que serão testados.

|Caso de Teste|RF-001|
|-|-|
|Descrição do requisito | O sistema deve permitir que a diarista faça o login.|
|Descrição do teste:| Clicar em ENTRAR e preencher os dados.
|Caso de êxito: | Preencher corretammente email e senha.|
|Caso de falha: | Preencher incorretamente email ou senha.|

|Caso de Teste|RF-009|
|-|-|
|Descrição do requisito | Possibilitar que as diaristas cadastrem os clientes, adicionando nome, telefone e local da diária.|
|Descrição do teste:| Clicar em cadastrar clientes e preencher os dados. Com o cliente já cadastrado, clicar em editar e salvar ou clicar em deletar, e salvar alterações.|
|Caso de êxito: | Exibição da tela de clientes atualizada. |

|Caso de Teste|RF-003|
|-|-|
|Descrição do requisito | Possibilitar que as diaristas agendem suas atividades diárias, inserindo a data, horário, tipo de serviço e o valor da diária.|
|Descrição do teste:| Clicar em "inserir atividade" preencher os campos e salvar. |
|Caso de êxito: | Exibição da tela de diárias atualizada. |

|Caso de Teste|RF-004 - RF-005|
|-|-|
|Descrição do requisito | Registro de gastos e planejamento financeiro: Permitir que as diaristas insiram suas despesas e oferecer uma seção de planejamento financeiro. |
|Descrição do teste:| Clicar em "inserir despesas", preencher os campos e salvar.|
|Caso de êxito: | Exibição da tela de despesa atualizada, com métricas de entrada e saída dos valores.|

|Caso de Teste|RNF|
|-|-|
|Descrição do Teste | Teste de acesso ao banco.|
|Descrição do teste:| Iniciar o banco de dados pelo prompt de comando e compilar o codigo para abertura do swagger e execução da solução.
|Caso de êxito: | Exibição das collections no prompt de comando, ao iniciar o banco. Ao compilar o codigo, abrir o swagger e executa-lo, retornar codigo de êxito 200 com o array de valor.|
|Caso de falha: | Prompt de comando nao mostra as collections. Swagger retorna erro de codigo 500, ou retorna array vazio.|


 
