import axios from "axios";


const URL = "https://swapi.dev/api/starships?format=json";//preciso criar uma pasat ultil

class StarshipsClient {
    async findAll() {
      let response = [];
      try {
        await axios
          .get(URL)
          .then((res) => {
            response = res.data;
          })
          .catch((err) => {
            console.error(error.message);
          });
      } catch (error) {
        console.error(error.message);
      }
      return response;
    }
}
export default new StarshipsClient();
