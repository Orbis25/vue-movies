import Axios from "axios";
export const BaseUrl = "https://vidsrc.me/movies/";

export default Axios.create({
  baseURL: BaseUrl,
  responseType: "json"
});
