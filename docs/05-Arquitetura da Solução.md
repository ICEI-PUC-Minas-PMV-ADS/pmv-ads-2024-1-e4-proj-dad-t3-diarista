# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.


A aplicação tem arquitetura centralizada onde o servidor são processos que implementam serviços específico, como o servidor da Aplicação e o servidor de banco de dados acessado pelos serviços da API.

![Aplicação Distribuida](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/f8e0f043-37d2-4e28-bf82-bc9e553b9f50)


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo foram utilizadas na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

![Diagrama_Classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/a227a3b5-8f26-4c33-9234-1251c8950c38)



## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo foram utilizadas na produção do Modelo Entidade Relacionamento.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

![Diagrama ER de banco de dados (pé de galinha)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/f88144fc-96ac-4f22-871b-3bdddbaf0029)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

As tecnologias utilizadas nesse projeto para a solução do problema proposto são:

--> - NodeJs;
--> - React;
--> - HTML, CSS e JavaScript;
--> - linguagem C#;
--> - GitHub;
--> - VSCode;
--> - API Services.

(--Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.--)

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software
A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, as sub-características que a equipe utilizará como base para nortear o desenvolvimento desse projeto de software, será apresentada abaixo, considerando-se alguns aspectos simples de qualidade. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/108501459/a8a364be-e06a-4d52-b679-efe8380cf017)

Nesse contexto, no projeto iremos focar nas seguintes características para nossa aplicação:

1- **Funcionalidade**  
 - *Adequação* : Avalia se o software propõe-se a fazer o que é apropriado. Essa métrica será avaliada através da entrega dos requisitos funcionais propostos.
 - *Segurança de acesso* : Avalia se é possível o acesso não autorizado a dados. Essa métrica será avaliada através da implementação da autenticação.

2- **Confiabilidade**  
 - *Tolerância a falhas*: Avalia qual a reação decorrente de falhas. Essa métrica será avaliada através dos testes de usabilidade.   

3- **Usabilidade**  
 - *Apreensibilidade*: Avalia se é fácil aprender a usar. Essa métrica será avaliada através de testes de usabilidade.  
 - *Operacionalidade*: Avalia se é fácil de operar e controlar a operação. Essa métrica será avaliada através de testes de usabilidade. 

4- **Eficiência**  
- *Comportamento em relação ao tempo*: Avalia o tempo de resposta e de processamento. Essa métrica será avaliada através de testes de usabilidade.  
    
5- **Manutenibilidade**  
- *Modificabilidade*: Avalia se fácil modificar e remover defeitos. Essa métrica será avaliada através da implementação de novas funcionalidades no decorrer do projeto.
- *Testabilidade*: Avalia se fácil testar quando se faz alterações. Essa métrica será avaliada durante o desenvolvimento através de testes das novas implementações.

6- **Portabilidade**  
- *Capacidade de ser instaldo*: Avalia a facilidade de ser instalado em outros ambientes.
