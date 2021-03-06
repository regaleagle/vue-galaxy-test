/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/basketOptionalMappers";
import * as Parameters from "../models/parameters";
import { GalaxyApiContext } from "../galaxyApiContext";

/** Class representing a BasketOptional. */
export class BasketOptional {
  private readonly client: GalaxyApiContext;

  /**
   * Create a BasketOptional.
   * @param {GalaxyApiContext} client Reference to the service client.
   */
  constructor(client: GalaxyApiContext) {
    this.client = client;
  }

  /**
   * @summary Get all optional products for a basket.
   * @param basketId
   * @param [options] The optional parameters
   * @returns Promise<Models.BasketOptionalGetOptionalProductsResponse>
   */
  getOptionalProducts(basketId: number, options?: msRest.RequestOptionsBase): Promise<Models.BasketOptionalGetOptionalProductsResponse>;
  /**
   * @param basketId
   * @param callback The callback
   */
  getOptionalProducts(basketId: number, callback: msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket[]>): void;
  /**
   * @param basketId
   * @param options The optional parameters
   * @param callback The callback
   */
  getOptionalProducts(basketId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket[]>): void;
  getOptionalProducts(basketId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket[]>, callback?: msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket[]>): Promise<Models.BasketOptionalGetOptionalProductsResponse> {
    return this.client.sendOperationRequest(
      {
        basketId,
        options
      },
      getOptionalProductsOperationSpec,
      callback) as Promise<Models.BasketOptionalGetOptionalProductsResponse>;
  }

  /**
   * @summary Configure a set of optional products. NB! You must configure all optionals per main
   * product. If one is omitted it means that
   * it will be deleted.
   * @param basketId
   * @param config
   * @param [options] The optional parameters
   * @returns Promise<Models.BasketOptionalConfigureOptionalProductsResponse>
   */
  configureOptionalProducts(basketId: number, config: Models.GalaxyApiModelsBasketOptionalOptionalBookArgGalaxyApiModelsBasketOptionalOptionalBookArgConfig[], options?: msRest.RequestOptionsBase): Promise<Models.BasketOptionalConfigureOptionalProductsResponse>;
  /**
   * @param basketId
   * @param config
   * @param callback The callback
   */
  configureOptionalProducts(basketId: number, config: Models.GalaxyApiModelsBasketOptionalOptionalBookArgGalaxyApiModelsBasketOptionalOptionalBookArgConfig[], callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param basketId
   * @param config
   * @param options The optional parameters
   * @param callback The callback
   */
  configureOptionalProducts(basketId: number, config: Models.GalaxyApiModelsBasketOptionalOptionalBookArgGalaxyApiModelsBasketOptionalOptionalBookArgConfig[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  configureOptionalProducts(basketId: number, config: Models.GalaxyApiModelsBasketOptionalOptionalBookArgGalaxyApiModelsBasketOptionalOptionalBookArgConfig[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.BasketOptionalConfigureOptionalProductsResponse> {
    return this.client.sendOperationRequest(
      {
        basketId,
        config,
        options
      },
      configureOptionalProductsOperationSpec,
      callback) as Promise<Models.BasketOptionalConfigureOptionalProductsResponse>;
  }

  /**
   * @summary Get optional products for a product.
   * @param basketId
   * @param bookItemId
   * @param [options] The optional parameters
   * @returns Promise<Models.BasketOptionalGetOptionalProductsForResponse>
   */
  getOptionalProductsFor(basketId: number, bookItemId: number, options?: msRest.RequestOptionsBase): Promise<Models.BasketOptionalGetOptionalProductsForResponse>;
  /**
   * @param basketId
   * @param bookItemId
   * @param callback The callback
   */
  getOptionalProductsFor(basketId: number, bookItemId: number, callback: msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket>): void;
  /**
   * @param basketId
   * @param bookItemId
   * @param options The optional parameters
   * @param callback The callback
   */
  getOptionalProductsFor(basketId: number, bookItemId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket>): void;
  getOptionalProductsFor(basketId: number, bookItemId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket>, callback?: msRest.ServiceCallback<Models.GalaxyApiModelsBasketOptionalOptionalProductsBasket>): Promise<Models.BasketOptionalGetOptionalProductsForResponse> {
    return this.client.sendOperationRequest(
      {
        basketId,
        bookItemId,
        options
      },
      getOptionalProductsForOperationSpec,
      callback) as Promise<Models.BasketOptionalGetOptionalProductsForResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOptionalProductsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/basket/optional/{basketId}",
  urlParameters: [
    Parameters.basketId
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalaxyApiModelsBasketOptionalOptionalProductsBasket"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const configureOptionalProductsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v3/api/basket/optional/{basketId}",
  urlParameters: [
    Parameters.basketId
  ],
  requestBody: {
    parameterPath: "config",
    mapper: {
      required: true,
      serializedName: "config",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "GalaxyApiModelsBasketOptionalOptionalBookArgGalaxyApiModelsBasketOptionalOptionalBookArgConfig"
          }
        }
      }
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {}
  },
  serializer
};

const getOptionalProductsForOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/basket/optional/{basketId}/{bookItemId}",
  urlParameters: [
    Parameters.basketId,
    Parameters.bookItemId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalaxyApiModelsBasketOptionalOptionalProductsBasket
    },
    default: {}
  },
  serializer
};
