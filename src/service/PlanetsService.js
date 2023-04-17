import StarWarsClient from "../client/StarWarsClient.js";

class PlanetsService {
  async findAllPlanets(req) {
    try {
      let response = await StarWarsClient.findAllPlanets();
      return this.formatResponsePlanet(response);
    } catch {
      return { results: [] };
    }
  }

  formatResponsePlanet(response) {
    if (response && response.results && response.results.length > 0) {
      return {
        results: response.results
          .map((result) => {
            return {
              name: result.name,
              diameter: result.diameter,
            };
          })
          .sort((a, b) => {
            return b.diameter - a.diameter;
          }),
      };
    } else {
      return { results: [] };
     
    }
  }
}

export default new PlanetsService();
