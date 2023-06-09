import axios from "axios";

export async function fetchDataPokemon(id){
      const url = "https://pokeapi.co/api/v2/pokemon/"
      return await axios.get(`${url}${id}`);
}
