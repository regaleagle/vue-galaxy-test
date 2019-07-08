/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/pointOfSalesMappers";
import * as Parameters from "../models/parameters";
import { GalaxyApiContext } from "../galaxyApiContext";

/** Class representing a PointOfSales. */
export class PointOfSales {
  private readonly client: GalaxyApiContext;

  /**
   * Create a PointOfSales.
   * @param {GalaxyApiContext} client Reference to the service client.
   */
  constructor(client: GalaxyApiContext) {
    this.client = client;
  }

  /**
   * @summary Gets the basic information (id and name) for all possible point of sales.
   * @param [options] The optional parameters
   * @returns Promise<Models.PointOfSalesBasicsResponse>
   */
  basics(options?: msRest.RequestOptionsBase): Promise<Models.PointOfSalesBasicsResponse>;
  /**
   * @param callback The callback
   */
  basics(callback: msRest.ServiceCallback<Models.GalaxyApiModelsPointOfSalesPointOfSalesBasic[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  basics(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalaxyApiModelsPointOfSalesPointOfSalesBasic[]>): void;
  basics(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalaxyApiModelsPointOfSalesPointOfSalesBasic[]>, callback?: msRest.ServiceCallback<Models.GalaxyApiModelsPointOfSalesPointOfSalesBasic[]>): Promise<Models.PointOfSalesBasicsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      basicsOperationSpec,
      callback) as Promise<Models.PointOfSalesBasicsResponse>;
  }

  /**
   * @summary Gets the currencies that are available for a given point of sales.
   * @param pointOfSalesId The point of sales.
   * @param [options] The optional parameters
   * @returns Promise<Models.PointOfSalesGetCurrenciesResponse>
   */
  getCurrencies(pointOfSalesId: number, options?: msRest.RequestOptionsBase): Promise<Models.PointOfSalesGetCurrenciesResponse>;
  /**
   * @param pointOfSalesId The point of sales.
   * @param callback The callback
   */
  getCurrencies(pointOfSalesId: number, callback: msRest.ServiceCallback<string[]>): void;
  /**
   * @param pointOfSalesId The point of sales.
   * @param options The optional parameters
   * @param callback The callback
   */
  getCurrencies(pointOfSalesId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
  getCurrencies(pointOfSalesId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string[]>, callback?: msRest.ServiceCallback<string[]>): Promise<Models.PointOfSalesGetCurrenciesResponse> {
    return this.client.sendOperationRequest(
      {
        pointOfSalesId,
        options
      },
      getCurrenciesOperationSpec,
      callback) as Promise<Models.PointOfSalesGetCurrenciesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const basicsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/pointofsales",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GalaxyApiModelsPointOfSalesPointOfSalesBasic"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const getCurrenciesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/pointofsales/currencies/{pointOfSalesId}",
  urlParameters: [
    Parameters.pointOfSalesId
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};