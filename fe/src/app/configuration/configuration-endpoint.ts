import { environment } from "src/environments/environment";

export class ConfigurationEndpoint {

    private static csEndpoint = `${environment.baseUrl}`;

    static getLoginEndpoint(): string {
        return `${this.csEndpoint}/login`;
    }

    static getProductsEndpoint(): string {
      return `${this.csEndpoint}/products`;
    }

    static getIngredientsEndpoint(): string {
      return `${this.csEndpoint}/ingredients`;
    }
}
