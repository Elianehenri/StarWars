import StarshipsService from "../service/StarshipsService.js";

class StarshipsController {
  async findAll(req, res) {
    let response = await StarshipsService.findAll();
    return res.json(response);
  }
}
export default new  StarshipsController();
