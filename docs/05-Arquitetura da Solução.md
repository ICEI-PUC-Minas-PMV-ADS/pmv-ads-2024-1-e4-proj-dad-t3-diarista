# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.


A aplicação tem arquitetura centralizada onde o servidor são processos que implementam serviços específico, como o servidor da Aplicação e o servidor de banco de dados acessado pelos serviços da API.


![Arquitetura_Distribuida drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/0fc1aea1-f2b0-422a-b720-9be1c28bd0c3)


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/e047ca87-86c7-4499-9b24-8ffb5fe965ca)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo foram utilizadas na produção do Modelo Entidade e Relacionamento.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/104168502/ad74b258-d032-4e22-949f-bf5e8ee2f09d)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
![Captura de Tela (3391)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t3-diarista/assets/117127986/91806a19-5d48-444a-bb75-49508bb52999)


## Modelo Físico
Usando Banco NoSQL - MongoDB:

1. `use DiaristaManager`
2. `db.createCollection('Diaristas')`
3. Inserção de documentos na coleção `Diaristas`:

db.Diaristas.insertMany([
```json
[
  {
    "_id": 1,
    "nome": "Maria da Silva",
    "endereco": "Rua XYZ, 123",
    "dataNascimento": ISODate("1990-01-15"),
    "sistema_id": 123,
    "diarias": []
  },
  {
    "_id": 2,
    "nome": "João Oliveira",
    "endereco": "Avenida ABC, 456",
    "dataNascimento": ISODate("1985-05-20"),
    "sistema_id": 456,
    "diarias": []
  }
]
```

4. `db.createCollection('Despesas')`
5. Inserção de documentos na coleção `Despesas`:
   db.Despesas.insertMany([
```json
  {
    "_id": 1,
    "natureza": "Material de Limpeza",
    "valor": 50.00,
    "data": ISODate("2024-03-10"),
    "diarista_id": 1
  },
  {
    "_id": 2,
    "natureza": "Alimentação",
    "valor": 30.00,
    "data": ISODate("2024-03-11"),
    "diarista_id": 2
  }
```
])


6. `db.createCollection('Clientes')`
7. Inserção de documentos na coleção `Clientes`:
 db.Clientes.insertMany([
```json 
  {
    "_id": 1,
    "nome": "João Silva",
    "endereco": "Rua das Flores, 123"
  },
  {
    "_id": 2,
    "nome": "Ana Oliveira",
    "endereco": "Avenida Principal, 456"
  },
  {
    "_id": 3,
    "nome": "Carlos Santos",
    "endereco": "Rua do Comércio, 789"
  },
  {
    "_id": 4,
    "nome": "Mariana Costa",
    "endereco": "Rua da Praia, 101"
  },
  {
    "_id": 5,
    "nome": "Roberto Almeida",
    "endereco": "Avenida Central, 222"
  },
  {
    "_id": 6,
    "nome": "Laura Pereira",
    "endereco": "Travessa das Árvores, 333"
  }
```
])


## Tecnologias Utilizadas

As tecnologias utilizadas nesse projeto para a solução do problema proposto são:

### Front-end:
- React
- HTML
- CSS
- JavaScript

### Mobile:
- React Native
  
### Back-end:
- C# / .NET

### Banco de Dados:
- MongoDB

### Ferramentas de Desenvolvimento:
- GitHub
- VSCode (Visual Studio Code)
- Visual Studio (Microsoft Visual Studio)

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

- A hospedagem foi realizada pela LocalWeb:
https://www.locaweb.com.br/?gad_source=1&gclid=Cj0KCQjwmMayBhDuARIsAM9HM8fnke8cVWZR4ZGKh8eT4irUXZvleRq3J2o1qM90iNgFFtpnoALt2K8aAgtlEALw_wcB

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
