import PlanetsClient from "../client/PlanetsClient.js";

class PlanetsService {
  async findAll(req) {
    try {
      let response = await PlanetsClient.findAll();
      return this.formatResponse(response);
    } catch {
      return { results: [] };
    }
  }

  formatResponse(response) {
    if (response && response.results && response.results.length > 0) {
      return {
        results: response.results.map((result) => {
          return {
            name: result.name,
            diameter: result.diameter,
          };
        })
        .sort((a, b) => {
            return b.diameter - a.diameter;
        }),
      };
    }
  }
}
export default new PlanetsService();
