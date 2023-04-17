import axios from "axios";


const BASE_URL = "https://swapi.dev/api/";

class StarWarsClient {
  // exibir os personagens
  async findAllCharacter() {
    let response = [];
    try {
      await axios
        .get(`${BASE_URL}/people`)
        .then((res) => {
          response = res.data;
        })
    } catch (error) {
      console.error(error.message);
    }
    return response;
  }

  //exibe os planetas
  async findAllPlanets() {
    let response = [];
    try {
      await axios.get(`${BASE_URL}/planets`).then((res) => {
        response = res.data;
      });
    } catch (error) {
      console.error(error.message);
    }
    return response;
  }

  //exibe starships
  async findAllStarships() {
    let response = [];
    try {
      await axios.get(`${BASE_URL}/starships`).then((res) => {
        response = res.data;
      });
    } catch (error) {
      console.error(error.message);
    }
    return response;
  }
  //exibe filmes-ordem cronologica
  async findAlFilms() {
    let response = [];
    try {
      await axios.get(`${BASE_URL}/films`).then((res) => {
        response = res.data;
      });
    } catch (error) {
      console.error(error.message);
    }
    return response;
  }

  //exibe filme por nome
  async findByName(title) {
    let response = [];
    try {
      await axios.get(`${BASE_URL}/films/?&search=${title}`).then((res) => {
        response = res.data;
      });
    } catch (error) {
      console.error(error.message);
    }
    return response;
  }
}
export default new StarWarsClient();
