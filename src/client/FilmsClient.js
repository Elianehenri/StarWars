import axios from "axios";

//const URL = "https://swapi.dev/api/films?format=json";
const URL = "https://swapi.dev/api/films/?format=json&search=";

class FilmsClient {
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
      //buscar
      

  async findByName(title) {
    let response = [];
    try {
      await axios
        .get(`${URL}&search=${title}`)
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
//
  }
  
  export default new FilmsClient();
