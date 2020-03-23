import Axios, { BaseUrl } from "../api";
export default class MovieService {
  axios;
  url;
  constructor() {
    this.url = BaseUrl;
    this.axios = Axios;
  }

  async getAll(index = 1) {
    return await this.axios.get(`${this.url}latest/page-${index}.json`);
  }
}
