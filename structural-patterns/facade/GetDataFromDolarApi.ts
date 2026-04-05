import { Currency } from "./model/Currency";

export class GetDataFromDolarApi {
  private static readonly API_URL: string =
    "https://economia.awesomeapi.com.br/json/last/USD-BRL";
  private axiosInstance;

  constructor() {
    this.axiosInstance = require("axios").default;
  }

  public getData(): Currency {
    return this.axiosInstance
      .get(GetDataFromDolarApi.API_URL)
      .then(function (response: any) {
        console.log(response?.data);
        return response;
      })
      .catch(function (error: any) {
        console.log(error);
        throw new Error(error);
      });
  }
}
