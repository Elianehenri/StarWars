# Star Wars

O desafio é criar uma aplicação em Node.js que seja capaz de consumir uma API REST e exibir os resultados na tela.
A API a ser consumida é a SWAPI https://swapi.dev/, que fornece informações sobre personagens, planetas, naves, filmes e muito mais do universo Star Wars.

## Requisitos
Utilizar a biblioteca Request para consumir a API REST.
Criar um servidor HTTP utilizando o módulo express.
Utilizar o módulo dotenv para carregar as variáveis de ambiente.

## Tecnologias
* Node.js 
* Express.js
* Axios
* dotenv
## Como executar o projeto

Este projeto é uma aplicação Back-End.

Rodando a Aplicação
<ol start="1">
<li>Clone o projeto </li>

```bash
$ git clone https://github.com/Elianehenri/StarWars

```
 No terminal execute :
````sh
npm install
````
Após a instalaçao execute o comando:

````sh
npm start
````


## Acessando os endpoints

### Personagens 
http://localhost:8080/character
```json
{
    "results": [
        {
            "name": "Beru Whitesun lars",
            "birth_year": "47BBY",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/"
            ]
        },
        {
            "name": "Biggs Darklighter",
            "birth_year": "24BBY",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/"
            ]
        },
        {
            "name": "C-3PO",
            "birth_year": "112BBY",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/"
            ]
        },
        
    ]
}

```
### Planetas
http://localhost:8080/planets
```json
{
    "results": [
        {
            "name": "Bespin",
            "diameter": "118000"
        },
        {
            "name": "Kamino",
            "diameter": "19720"
        },
        {
            "name": "Alderaan",
            "diameter": "12500"
        },
     
    ]
}
```
### Naves
http://localhost:8080/starships
```json
{
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "release_date": "1977-05-25"
    },
    {
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "release_date": "1980-05-17"
    },
    {
      "title": "Return of the Jedi",
      "episode_id": 6,
      "release_date": "1983-05-25"
    },
  
  ]
}
```
### Filmes
http://localhost:8080/films
```json
{
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "release_date": "1977-05-25"
    },
    {
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "release_date": "1980-05-17"
    },
    {
      "title": "Return of the Jedi",
      "episode_id": 6,
      "release_date": "1983-05-25"
    }
  
  ]
}
```
#### Buscar   os filmes por nomes
http://localhost:8080/films/A New
```json

{
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "release_date": "1977-05-25"
    }
  ]
}

```


 
### Autor
* **Eliane Henriqueta**
