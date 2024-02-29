# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram afirmados na forma de personas e histórias de usuários
## Personas

![Untitled](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/fa4755f4-428a-4959-96b3-16bf4f559ddf)

![Untitled (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/3233ed58-4888-4382-89c1-98815be2bc59)

![Untitled (2)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/6e3ced06-67c7-4489-a8ee-9e7be89e10b0)

![Untitled (3)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/69d091aa-86c7-46de-aaa6-4ff58560abda)

![Untitled (4)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/1dcf2b0a-c748-4d1c-8da0-e430ff78f705)






## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

![Captura de Tela (2319)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/06138aea-739d-4ae6-8649-0d21ae9b8c49)


## Modelagem do Processo de Negócio 

### Análise da Situação Atual
#### Problemas Enfrentados pelas Diaristas:

1. **Falta de ferramentas integradas para gestão de atividades e finanças:**
   - Controle manual de horários, despesas e receitas em planilhas, cadernos ou aplicativos separados, gerando:
     - Dificuldade na organização e acompanhamento das informações.
     - Perda de tempo e risco de erros.
     - Visão limitada da situação financeira.
     - Dificuldade em calcular o valor ideal a ser cobrado por hora de serviço.
     - Falta de controle sobre gastos e inadimplência.

2. **Dificuldade em se organizar e otimizar o tempo:**
   - Agendamento manual de serviços, levando a:
     - Perda de tempo com ligações, mensagens e anotações.
     - Dificuldade em conciliar horários e evitar conflitos.
     - Risco de perder oportunidades de trabalho.
     - Deslocamentos excessivos entre diferentes locais de trabalho.

3. **Falta de planejamento financeiro:**
   - Dificuldade em prever receitas e despesas, levando a:
     - Instabilidade financeira.
     - Dificuldade em realizar investimentos e alcançar objetivos financeiros.
     - Sensação de insegurança e estresse.

#### Modelo Atual:

- **Processo manual e fragmentado:**
  - As diaristas gerenciam suas atividades e finanças de forma manual, utilizando planilhas, cadernos, aplicativos separados ou mesmo anotações em papel.
  - Isso leva a um processo ineficiente, com alto risco de erros e perda de tempo.

- **Falta de acesso a ferramentas digitais:**
  - As ferramentas digitais existentes geralmente são complexas e pouco intuitivas para esse público.

#### Oportunidades de Melhoria:

1. Implementar um sistema integrado para gestão de atividades e finanças.
2. Oferecer recursos para otimização do tempo.
3. Promover o planejamento financeiro.

#### Conclusão:

As diaristas enfrentam diversos desafios na gestão de suas atividades e finanças. A falta de ferramentas adequadas leva a um processo ineficiente, com perda de tempo, risco de erros e instabilidade financeira.

#### Oportunidade:

Existe uma grande oportunidade para melhorar a vida das diaristas através da criação de um aplicativo mobile intuitivo e acessível que integre todas as ferramentas necessárias para a gestão eficiente de suas atividades e finanças.

### Descrição Geral da Proposta

O projeto propõe o desenvolvimento de uma aplicação fullstack voltada para diaristas, visando aprimorar a eficiência operacional e a satisfação profissional. Focando em estratégias como simplificação do agendamento, controle de despesas e aumento da produtividade, a proposta busca criar uma solução prática e intuitiva para atender às demandas específicas desses profissionais, contribuindo para um ambiente de trabalho mais organizado e eficaz.

### Processo 1 – Solução Inicial

Apresentamos o modelo do processo completo proposto para solução do problema proposto.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/97ebf5d9-e53e-4b3b-92fa-f4985162568d)


## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de Diaristas: Permitir que as diaristas se cadastrem na plataforma, fornecendo informações básicas como nome, telefone e endereço.| ALTA | 
|RF-002| Agendamento de Atividades: Possibilitar que as diaristas agendem suas atividades diárias, inserindo a data, horário, tipo de serviço, valor da diária e o nome do cliente.| ALTA |
|RF-003| Registro de Gastos: Permitir que as diaristas insiram suas despesas diárias, como transporte, alimentação e materiais de trabalho.| ALTA |
|RF-004| Planejamento Financeiro: Oferecer uma seção para as diaristas planejarem suas finanças, definindo metas de economia de gastos mensais e agendamento de atividades.| ALTA |
|RF-005| Dashboard Financeiro de Acesso Web e Mobile: Disponibilizar um dashboard de controle financeiro tanto na web quanto em dispositivos móveis (Android e iOS).| ALTA |
|RF-006| Interface Intuitiva: Criar uma interface simples e amigável, considerando que o público-alvo são pessoas com baixa escolaridade.| ALTA |
|RF-008| Histórico de Atividades: Manter um registro detalhado das atividades realizadas pelas diaristas, incluindo datas, serviços prestados e valores recebidos.| MEDIANA |
|RF-009| Relatórios Financeiros Simples: Gerar relatórios básicos de ganhos e despesas para que as diaristas possam acompanhar sua situação financeira.| MEDIANA |
|RF-010| Notificações de Agendamento: Enviar lembretes automáticos para as diaristas sobre os agendamentos de atividades.| BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre, não podendo extrapolar a data de 30/06/2024; |
|02| O projeto deve conter API; |
|03| O sistema deverá se conectar com o banco de dados NoQLS - MongoDB;   |
|04| O aplicativo deve ser construído no back-end através do Node.JS; |
|05| O aplicativo deve ser construído no front-end através do React; |
|06| A versão móvel do aplicativo deve ser construída através do React Native; |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso vai elicitar os requisitos, que utiliza um modelo gráfico com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo nos auxiliáram na geração do “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Diagrams](https://app.diagrams.net/)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/4d9723d4-558c-4dd5-a1b1-645286a78c04)


# Matriz de Rastreabilidade
| Requisito/Artefato                  | Cadastro de Clientes | Agendamento de Serviços | Visualização da Agenda | Autenticação de Usuário | Controle de Despesas | Controle de Gastos | Validações de Entrada | Backup e Recuperação de Dados | Eficiência Operacional (RNF) | Controle de Horários (RNF) | Controle Financeiro (RNF) |
|------------------------------------|----------------------|-------------------------|-------------------------|-------------------------|----------------------|---------------------|------------------------|-------------------------------|-----------------------------|---------------------------|---------------------------|
| Agendamento de Serviços            |                      | X                       | X                       |                         |                      |                     |                        |                               |                             |                           |                           |
| Visualização da Agenda             |                      |                         | X                       |                         |                      |                     |                        |                               |                             |                           |                           |
| Autenticação de Usuário            |                      |                         |                         | X                       |                      |                     |                        |                               |                             |                           |                           |
| Controle de Despesas               |                      |                         |                         |                         | X                    | X                   | X                      | X                             |                             |                           |                           |
| Controle de Gastos                 |                      |                         |                         |                         |                      | X                   |                        |                               |                             |                           |                           |
| Validações de Entrada              | X                    | X                       | X                       | X                       | X                    | X                   |                        | X                             |                             |                           |                           |
| Backup e Recuperação de Dados      |                      |                         |                         |                         |                      |                     |                        | X                             |                             |                           |                           |

<!--
A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)
-->


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![diagrama simplificado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/112135999/82877a57-7a6f-4712-9d91-58b6c670d7da)


O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Tarefas primeira semana](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/112135999/f9937ef0-e26b-4109-a2eb-52c53b6ee686)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Quadro tarefas primeira semana](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/112135999/09a25c8c-d043-456d-b9ab-1da87e87962b)


## Gestão de Orçamento (Unitário, Agregado e por Semestre)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/97962041/ddffe45d-64a6-4331-bd08-403a459f6074)

