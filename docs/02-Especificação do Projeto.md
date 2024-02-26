# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram afirmados na forma de personas e histórias de usuários
## Personas

![Untitled](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/fa4755f4-428a-4959-96b3-16bf4f559ddf)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

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

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

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
|RF-002| Agendamento de Atividades: Possibilitar que as diaristas agendem suas atividades diárias, inserindo a data, horário e tipo de serviço.| ALTA |
|RF-003| Registro de Despesas: Permitir que as diaristas insiram suas despesas diárias, como transporte, alimentação e materiais de trabalho.| ALTA |
|RF-004| Planejamento Financeiro: Oferecer uma seção para as diaristas planejarem suas finanças, definindo metas de economia e gastos mensais.| ALTA |
|RF-005| Acesso Web e Mobile: Disponibilizar a aplicação tanto na web quanto em dispositivos móveis (Android e iOS).| ALTA |
|RF-006| Interface Intuitiva: Criar uma interface simples e amigável, considerando que o público-alvo são pessoas com baixa escolaridade.| ALTA |
|RF-007| Controle de Horários: Registrar o início e término das atividades realizadas pelas diaristas para controle de horários e cumprimento de jornada.| MEDIANA |
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
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade
| Requisito/Artefato                  | Cadastro de Clientes | Agendamento de Serviços | Visualização da Agenda | Autenticação de Usuário | Controle de Despesas | Controle de Gastos | Validações de Entrada | Backup e Recuperação de Dados | Eficiência Operacional (RNF) | Controle de Horários (RNF) | Controle Financeiro (RNF) |
|------------------------------------|----------------------|-------------------------|-------------------------|-------------------------|----------------------|---------------------|------------------------|-------------------------------|-----------------------------|---------------------------|---------------------------|
| Cadastro de Clientes               | X                    |                         |                         |                         |                      |                     | X                      |                               |                             |                           |                           |
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

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento (Unitário, Agregado e por Semestre)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/97962041/ddffe45d-64a6-4331-bd08-403a459f6074)

