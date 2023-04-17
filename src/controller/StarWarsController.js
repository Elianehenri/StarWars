import CharacterService from "../service/CharacterService.js";
import PlanetsService from "../service/PlanetsService.js";
import StarshipsService from "../service/StarshipsService.js";
import FilmsService from "../service/FilmsService.js";

class StarWarsController {
  //Character
  async findAllCharacter(req, res) {
    let response = await CharacterService.findAllCharacter();
    return res.json(response);
  }

  //films
  async findAlFilms(req, res) {
    let response = await FilmsService.findAlFilms();
    return res.json(response);
  }
  //films buscar por nome
  async findByName(req, res) {
    let response = await FilmsService.findByName(req);
    return res.json(response);
  }
  //planets
  async findAllPlanets(req, res) {
    let response = await PlanetsService.findAllPlanets();
    return res.json(response);
  }
  //Starships
  async findAllStarships(req, res) {
    let response = await StarshipsService.findAllStarships();
    return res.json(response);
  }
}
export default new StarWarsController();
