import StarWarsClient from "../client/StarWarsClient.js";

class FilmsService {
  async findAlFilms(req) {
    try {
      let response = await StarWarsClient.findAlFilms();
      return this.formatResponseFilm(response);
    } catch {
      return { results: [] };
    }
  }
  //buscar por nome
  async findByName(req) {
    try {
      let response = await StarWarsClient.findByName(req.params.title);
      return this.formatResponseFilm(response);
    } catch {
      return { results: [] };
    }
  }
//
  formatResponseFilm(response) {
    if (response && response.results && response.results.length > 0) {
      return {
        results: response.results
          .map((result) => {
            return {
              title: result.title,
              episode_id: result.episode_id,
              release_date: result.release_date,
            };
          })
          .sort((a, b) => {
            const dateA = new Date(a.release_date).getTime();
            const dateB = new Date(b.release_date).getTime();
            return dateA - dateB;
          }),
      };
    } else {
      return { results: [] };
    }
  }
}

export default new FilmsService();
