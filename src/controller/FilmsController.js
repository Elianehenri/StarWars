import FilmsService from "../service/FilmsService.js";

class FilmsController {
  async findAll(req, res) {
    let response = await FilmsService.findAll();
    return res.json(response);
  }
  //buscar
  async findByName(req, res) {
    let response = await FilmsService.findByName(req);
    return res.json(response);
  }
}

export default new FilmsController();
