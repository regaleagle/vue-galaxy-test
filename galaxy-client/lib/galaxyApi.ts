/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { GalaxyApiContext } from "./galaxyApiContext";

class GalaxyApi extends GalaxyApiContext {
  // Operation groups
  accommodation: operations.Accommodation;
  fuzzyAccommodationSearch: operations.FuzzyAccommodationSearch;
  accommodationSearch: operations.AccommodationSearch;
  activitySearch: operations.ActivitySearch;
  basketSupplierMessages: operations.BasketSupplierMessages;
  basketCreateDel: operations.BasketCreateDel;
  basketAdd: operations.BasketAdd;
  commit: operations.Commit;
  basketCustomer: operations.BasketCustomer;
  basketGuest: operations.BasketGuest;
  basketOptional: operations.BasketOptional;
  content: operations.Content;
  countryCode: operations.CountryCode;
  ping: operations.Ping;
  pointOfSales: operations.PointOfSales;
  reservation: operations.Reservation;

  /**
   * Initializes a new instance of the GalaxyApi class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.GalaxyApiOptions) {
    super(credentials, options);
    this.accommodation = new operations.Accommodation(this);
    this.fuzzyAccommodationSearch = new operations.FuzzyAccommodationSearch(this);
    this.accommodationSearch = new operations.AccommodationSearch(this);
    this.activitySearch = new operations.ActivitySearch(this);
    this.basketSupplierMessages = new operations.BasketSupplierMessages(this);
    this.basketCreateDel = new operations.BasketCreateDel(this);
    this.basketAdd = new operations.BasketAdd(this);
    this.commit = new operations.Commit(this);
    this.basketCustomer = new operations.BasketCustomer(this);
    this.basketGuest = new operations.BasketGuest(this);
    this.basketOptional = new operations.BasketOptional(this);
    this.content = new operations.Content(this);
    this.countryCode = new operations.CountryCode(this);
    this.ping = new operations.Ping(this);
    this.pointOfSales = new operations.PointOfSales(this);
    this.reservation = new operations.Reservation(this);
  }
}

// Operation Specifications

export {
  GalaxyApi,
  GalaxyApiContext,
  Models as GalaxyApiModels,
  Mappers as GalaxyApiMappers
};
export * from "./operations";
