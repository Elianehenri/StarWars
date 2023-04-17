import StarWarsClient from "../client/StarWarsClient.js";


class StarshipsService {
    async findAllStarships(req) {
        try {
          let response = await StarWarsClient.findAllStarships();
          return this.formatResponseStarships(response);
        } catch {
          return { results: [] };
        }
      }
    
      formatResponseStarships(response) {
        if (response && response.results && response.results.length > 0) {
          return {
            results: response.results
              .map((result) => {
                return {
                  name: result.name,
                  model: result.model,
                  manufacturer: result.manufacturer,
                  films: result.films,
                };
              })
              .sort((a, b) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              }),
          };
        } else {
          return { results: [] };
        }
      }
}
export default new StarshipsService();
