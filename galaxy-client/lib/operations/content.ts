/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/contentMappers";
import * as Parameters from "../models/parameters";
import { GalaxyApiContext } from "../galaxyApiContext";

/** Class representing a Content. */
export class Content {
  private readonly client: GalaxyApiContext;

  /**
   * Create a Content.
   * @param {GalaxyApiContext} client Reference to the service client.
   */
  constructor(client: GalaxyApiContext) {
    this.client = client;
  }

  /**
   * @summary Get available attributes
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentGetAttributesResponse>
   */
  getAttributes(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentGetAttributesResponse>;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param callback The callback
   */
  getAttributes(pointOfSalesId: number, acceptLanguage: string, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedAttribute[]>): void;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAttributes(pointOfSalesId: number, acceptLanguage: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedAttribute[]>): void;
  getAttributes(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalaxyApiModelsSharedAttribute[]>, callback?: msRest.ServiceCallback<Models.GalaxyApiModelsSharedAttribute[]>): Promise<Models.ContentGetAttributesResponse> {
    return this.client.sendOperationRequest(
      {
        pointOfSalesId,
        acceptLanguage,
        options
      },
      getAttributesOperationSpec,
      callback) as Promise<Models.ContentGetAttributesResponse>;
  }

  /**
   * @summary Get available attributes
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentGetGeoTreeResponse>
   */
  getGeoTree(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentGetGeoTreeResponse>;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param callback The callback
   */
  getGeoTree(pointOfSalesId: number, acceptLanguage: string, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedGeo>): void;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param options The optional parameters
   * @param callback The callback
   */
  getGeoTree(pointOfSalesId: number, acceptLanguage: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedGeo>): void;
  getGeoTree(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalaxyApiModelsSharedGeo>, callback?: msRest.ServiceCallback<Models.GalaxyApiModelsSharedGeo>): Promise<Models.ContentGetGeoTreeResponse> {
    return this.client.sendOperationRequest(
      {
        pointOfSalesId,
        acceptLanguage,
        options
      },
      getGeoTreeOperationSpec,
      callback) as Promise<Models.ContentGetGeoTreeResponse>;
  }

  /**
   * @summary Get available categories
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentGetCategoryTreeResponse>
   */
  getCategoryTree(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentGetCategoryTreeResponse>;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param callback The callback
   */
  getCategoryTree(pointOfSalesId: number, acceptLanguage: string, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedCategory>): void;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param options The optional parameters
   * @param callback The callback
   */
  getCategoryTree(pointOfSalesId: number, acceptLanguage: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedCategory>): void;
  getCategoryTree(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalaxyApiModelsSharedCategory>, callback?: msRest.ServiceCallback<Models.GalaxyApiModelsSharedCategory>): Promise<Models.ContentGetCategoryTreeResponse> {
    return this.client.sendOperationRequest(
      {
        pointOfSalesId,
        acceptLanguage,
        options
      },
      getCategoryTreeOperationSpec,
      callback) as Promise<Models.ContentGetCategoryTreeResponse>;
  }

  /**
   * @summary Get available POIs
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentGetPoisResponse>
   */
  getPois(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase): Promise<Models.ContentGetPoisResponse>;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param callback The callback
   */
  getPois(pointOfSalesId: number, acceptLanguage: string, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedPoi[]>): void;
  /**
   * @param pointOfSalesId
   * @param acceptLanguage The culture you wish to get data in, api/content/language can provide
   * valid cultures.
   * @param options The optional parameters
   * @param callback The callback
   */
  getPois(pointOfSalesId: number, acceptLanguage: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalaxyApiModelsSharedPoi[]>): void;
  getPois(pointOfSalesId: number, acceptLanguage: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalaxyApiModelsSharedPoi[]>, callback?: msRest.ServiceCallback<Models.GalaxyApiModelsSharedPoi[]>): Promise<Models.ContentGetPoisResponse> {
    return this.client.sendOperationRequest(
      {
        pointOfSalesId,
        acceptLanguage,
        options
      },
      getPoisOperationSpec,
      callback) as Promise<Models.ContentGetPoisResponse>;
  }

  /**
   * @summary Get available languages
   * @param pointOfSalesId
   * @param [options] The optional parameters
   * @returns Promise<Models.ContentGetLanguagesResponse>
   */
  getLanguages(pointOfSalesId: number, options?: msRest.RequestOptionsBase): Promise<Models.ContentGetLanguagesResponse>;
  /**
   * @param pointOfSalesId
   * @param callback The callback
   */
  getLanguages(pointOfSalesId: number, callback: msRest.ServiceCallback<string[]>): void;
  /**
   * @param pointOfSalesId
   * @param options The optional parameters
   * @param callback The callback
   */
  getLanguages(pointOfSalesId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
  getLanguages(pointOfSalesId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string[]>, callback?: msRest.ServiceCallback<string[]>): Promise<Models.ContentGetLanguagesResponse> {
    return this.client.sendOperationRequest(
      {
        pointOfSalesId,
        options
      },
      getLanguagesOperationSpec,
      callback) as Promise<Models.ContentGetLanguagesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAttributesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/content/attribute/{pointOfSalesId}",
  urlParameters: [
    Parameters.pointOfSalesId
  ],
  headerParameters: [
    Parameters.acceptLanguage
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
              className: "GalaxyApiModelsSharedAttribute"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const getGeoTreeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/content/geo/{pointOfSalesId}",
  urlParameters: [
    Parameters.pointOfSalesId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalaxyApiModelsSharedGeo
    },
    default: {}
  },
  serializer
};

const getCategoryTreeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/content/category/{pointOfSalesId}",
  urlParameters: [
    Parameters.pointOfSalesId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalaxyApiModelsSharedCategory
    },
    default: {}
  },
  serializer
};

const getPoisOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/content/poi/{pointOfSalesId}",
  urlParameters: [
    Parameters.pointOfSalesId
  ],
  headerParameters: [
    Parameters.acceptLanguage
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
              className: "GalaxyApiModelsSharedPoi"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const getLanguagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "v3/api/content/language/{pointOfSalesId}",
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