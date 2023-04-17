import StarshipsClient from "../client/StarshipsClient.js";


class StarshipsService {
    async findAll(req) {
        try {
          let response = await StarshipsClient.findAll();
          return this.formatResponse(response);
        } catch {
          return { results: [] };
        }
      }
    
      formatResponse(response) {
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
