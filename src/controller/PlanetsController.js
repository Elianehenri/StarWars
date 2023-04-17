import PlanetsService from "../service/PlanetsService.js";

class PlanetsController {
  async findAll(req, res) {
    let response = await PlanetsService.findAll();
    return res.json(response);
  }
}

export default new PlanetsController();
