/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The list of available area codes. */
export interface PhoneNumberAreaCodes {
  /** Represents a list of available toll-free area codes. */
  areaCodes: PhoneNumberAreaCode[];
  /** Represents the URL link to the next page. */
  nextLink?: string;
}

/** Represents an Area Code. */
export interface PhoneNumberAreaCode {
  /** An area code. */
  areaCode?: string;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

/** Represents a wrapper around a list of countries. */
export interface PhoneNumberCountries {
  /** Represents the underlying list of countries. */
  countries?: PhoneNumberCountry[];
  /** Represents the URL link to the next page */
  nextLink?: string;
}

/** Represents a country. */
export interface PhoneNumberCountry {
  /** Represents the name of the country. */
  localizedName: string;
  /** Represents the abbreviated name of the country. */
  countryCode: string;
}

/** Represents a wrapper around a list of cities or towns. */
export interface PhoneNumberLocalities {
  /** Represents the underlying list of localities, e.g. cities or town. */
  phoneNumberLocalities?: PhoneNumberLocality[];
  /** Represents the URL link to the next page. */
  nextLink?: string;
}

/** Represents a locality. */
export interface PhoneNumberLocality {
  /** Represents the localized name of the locality. */
  localizedName: string;
  /** Represents an administrative division. e.g. state or province. */
  administrativeDivision?: PhoneNumberAdministrativeDivision;
}

/** Represents an administrative division. e.g. state or province. */
export interface PhoneNumberAdministrativeDivision {
  /** Represents the localized name of the administrative division of the locality. e.g. state or province localized name. */
  localizedName: string;
  /** Represents the abbreviated name of the administrative division of the locality. e.g. state or province abbreviation such as WA (Washington). */
  abbreviatedName: string;
}

/** Represents a wrapper around a list of offerings. */
export interface OfferingsResponse {
  /** Represents the underlying list of offerings. */
  phoneNumberOfferings?: PhoneNumberOffering[];
  /** Represents the URL link to the next page. */
  nextLink?: string;
}

/** Represents a phone number capability offering */
export interface PhoneNumberOffering {
  /** Represents the number type of the offering. */
  phoneNumberType?: PhoneNumberType;
  /** Represents the assignment type of the offering. */
  assignmentType?: PhoneNumberAssignmentType;
  /** Capabilities of a phone number. */
  availableCapabilities?: PhoneNumberCapabilities;
  /** The incurred cost for a single phone number. */
  cost: PhoneNumberCost;
}

/** Capabilities of a phone number. */
export interface PhoneNumberCapabilities {
  /** Capability value for calling. */
  calling: PhoneNumberCapabilityType;
  /** Capability value for SMS. */
  sms: PhoneNumberCapabilityType;
}

/** The incurred cost for a single phone number. */
export interface PhoneNumberCost {
  /** The cost amount. */
  amount: number;
  /** The ISO 4217 currency code for the cost amount, e.g. USD. */
  currencyCode: string;
  /** The frequency with which the cost gets billed. */
  billingFrequency: "monthly";
}

/** Represents a phone number search request to find phone numbers. Found phone numbers are temporarily held for a following purchase. */
export interface PhoneNumberSearchRequest {
  /** The type of phone numbers to search for, e.g. geographic, or tollFree. */
  phoneNumberType: PhoneNumberType;
  /** The assignment type of the phone numbers to search for. A phone number can be assigned to a person, or to an application. */
  assignmentType: PhoneNumberAssignmentType;
  /** Capabilities of a phone number. */
  capabilities: PhoneNumberCapabilities;
  /** The area code of the desired phone number, e.g. 425. */
  areaCode?: string;
  /** The quantity of desired phone numbers. The default value is 1. */
  quantity?: number;
}

/** The result of a phone number search operation. */
export interface PhoneNumberSearchResult {
  /** The search id. */
  searchId: string;
  /** The phone numbers that are available. Can be fewer than the desired search quantity. */
  phoneNumbers: string[];
  /** The phone number's type, e.g. geographic, or tollFree. */
  phoneNumberType: PhoneNumberType;
  /** Phone number's assignment type. */
  assignmentType: PhoneNumberAssignmentType;
  /** Capabilities of a phone number. */
  capabilities: PhoneNumberCapabilities;
  /** The incurred cost for a single phone number. */
  cost: PhoneNumberCost;
  /** The date that this search result expires and phone numbers are no longer on hold. A search result expires in less than 15min, e.g. 2020-11-19T16:31:49.048Z. */
  searchExpiresBy: Date;
}

export interface PhoneNumbersBrowseRequest {
  /** Represents the number type of the offering. */
  phoneNumberType?: PhoneNumberType;
  /** Capabilities of a phone number. */
  capabilities?: PhoneNumberCapabilitiesRequest;
  /** Represents the assignment type of the offering. Also known as the use case. */
  assignmentType?: PhoneNumberAssignmentType;
  /** The phone number prefix to match. If specified, the search will be limited to phone numbers that start with the any of the given prefixes. */
  phoneNumberPrefixes?: string[];
}

/** Capabilities of a phone number. */
export interface PhoneNumberCapabilitiesRequest {
  /** Capability value for calling. */
  calling?: PhoneNumberCapabilityType;
  /** Capability value for SMS. */
  sms?: PhoneNumberCapabilityType;
}

export interface PhoneNumbersBrowseResult {
  /** The phone numbers that are available for purchase. */
  phoneNumbers: AvailablePhoneNumber[];
}

/** Represents a phone number available in inventory */
export interface AvailablePhoneNumber {
  /** The id of the phone number. */
  id: string;
  /** The ISO 3166-2 country code, e.g. US. */
  countryCode: string;
  /** The phone number in E.164 format, e.g. +11234567890. */
  phoneNumber: string;
  /** Capabilities of a phone number. */
  capabilities: PhoneNumberCapabilities;
  /** Represents the number type of the offering. */
  phoneNumberType: PhoneNumberType;
  /** Represents the assignment type of the offering. Also known as the use case. */
  assignmentType: PhoneNumberAssignmentType;
  /** The incurred cost for a single phone number. */
  cost: PhoneNumberCost;
}

/** The phone number search purchase request. */
export interface PhoneNumberPurchaseRequest {
  /** The search id. */
  searchId?: string;
  /** The consent to not resell numbers. */
  consentToNotResellNumbers?: boolean;
}

export interface PhoneNumbersReservations {
  /** Represents a list of phone numbers. */
  reservations: PhoneNumbersReservation[];
  /** Represents the URL link to the next page of phone number results. */
  nextLink?: string;
}

export interface PhoneNumbersReservation {
  /** The id of the reservation. */
  id?: string;
  /** The time at which the reservation will expire. If a reservation is not purchased before this time, all of the reserved phone numbers will be released and made available for others to purchase. */
  expiresAt?: Date;
  phoneNumbers?: AvailablePhoneNumber[];
  status?: ReservationStatus;
}

export interface Paths16Yq815AvailablephonenumbersReservationsReservationidPutRequestbodyContentApplicationJsonSchema {
  phoneNumbers?: AvailablePhoneNumber[];
}

/** The phone number search purchase request. */
export interface PhoneNumbersReservationPurchaseRequest {
  /** The consent to not resell numbers. */
  consentToNotResellNumbers?: boolean;
}

export interface PhoneNumberOperation {
  /** The type of operation, e.g. Search */
  operationType: PhoneNumberOperationType;
  /** Status of operation. */
  status: PhoneNumberOperationStatus;
  /** URL for retrieving the result of the operation, if any. */
  resourceLocation?: string;
  /** The date that the operation was created. */
  createdDateTime: Date;
  /** The Communication Services error. */
  error?: CommunicationError;
  /** Id of operation. */
  id: string;
  /**
   * The most recent date that the operation was changed.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastActionDateTime?: Date;
}

/** Represents a purchased phone number. */
export interface PurchasedPhoneNumber {
  /** The id of the phone number, e.g. 11234567890. */
  id: string;
  /** String of the E.164 format of the phone number, e.g. +11234567890. */
  phoneNumber: string;
  /** The ISO 3166-2 code of the phone number's country, e.g. US. */
  countryCode: string;
  /** The phone number's type, e.g. geographic, tollFree. */
  phoneNumberType: PhoneNumberType;
  /** Capabilities of a phone number. */
  capabilities: PhoneNumberCapabilities;
  /** The assignment type of the phone number. A phone number can be assigned to a person, or to an application. */
  assignmentType: PhoneNumberAssignmentType;
  /** The date and time that the phone number was purchased. */
  purchaseDate: Date;
  /** The incurred cost for a single phone number. */
  cost: PhoneNumberCost;
}

/** The list of purchased phone numbers. */
export interface PurchasedPhoneNumbers {
  /** Represents a list of phone numbers. */
  phoneNumbers: PurchasedPhoneNumber[];
  /** Represents the URL link to the next page of phone number results. */
  nextLink?: string;
}

/** Defines headers for PhoneNumbers_searchAvailablePhoneNumbers operation. */
export interface PhoneNumbersSearchAvailablePhoneNumbersHeaders {
  /** URL to retrieve the final result after operation completes. */
  location?: string;
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The search operation id. */
  searchId?: string;
}

/** Defines headers for PhoneNumbers_purchasePhoneNumbers operation. */
export interface PhoneNumbersPurchasePhoneNumbersHeaders {
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The purchase operation id. */
  purchaseId?: string;
}

/** Defines headers for PhoneNumbers_startPurchase operation. */
export interface PhoneNumbersStartPurchaseHeaders {
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The reservation purchase operation id. */
  reservationPurchaseId?: string;
}

/** Defines headers for PhoneNumbers_getOperation operation. */
export interface PhoneNumbersGetOperationHeaders {
  /** Url to retrieve the final result after operation completes. */
  location?: string;
}

/** Defines headers for PhoneNumbers_updateCapabilities operation. */
export interface PhoneNumbersUpdateCapabilitiesHeaders {
  /** URL to retrieve the final result after operation completes. */
  location?: string;
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The capabilities operation id. */
  capabilitiesId?: string;
}

/** Defines headers for PhoneNumbers_releasePhoneNumber operation. */
export interface PhoneNumbersReleasePhoneNumberHeaders {
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The release operation id. */
  releaseId?: string;
}

/** Defines values for PhoneNumberType. */
export type PhoneNumberType = "geographic" | "tollFree";
/** Defines values for PhoneNumberAssignmentType. */
export type PhoneNumberAssignmentType = "person" | "application";
/** Defines values for PhoneNumberCapabilityType. */
export type PhoneNumberCapabilityType =
  | "none"
  | "inbound"
  | "outbound"
  | "inbound+outbound";
/** Defines values for ReservationStatus. */
export type ReservationStatus =
  | "active"
  | "submitted"
  | "completed"
  | "partiallyCompleted"
  | "cancelled"
  | "expired";
/** Defines values for PhoneNumberOperationType. */
export type PhoneNumberOperationType =
  | "purchase"
  | "releasePhoneNumber"
  | "search"
  | "updatePhoneNumberCapabilities"
  | "reservationPurchase";
/** Defines values for PhoneNumberOperationStatus. */
export type PhoneNumberOperationStatus =
  | "notStarted"
  | "running"
  | "succeeded"
  | "failed";

/** Optional parameters. */
export interface PhoneNumbersListAreaCodesOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  maxPageSize?: number;
  /** Filter by assignmentType, e.g. Person, Application. */
  assignmentType?: PhoneNumberAssignmentType;
  /** The name of locality or town in which to search for the area code. This is required if the number type is Geographic. */
  locality?: string;
  /** The name of the state or province in which to search for the area code. */
  administrativeDivision?: string;
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
}

/** Contains response data for the listAreaCodes operation. */
export type PhoneNumbersListAreaCodesResponse = PhoneNumberAreaCodes;

/** Optional parameters. */
export interface PhoneNumbersListAvailableCountriesOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  maxPageSize?: number;
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
}

/** Contains response data for the listAvailableCountries operation. */
export type PhoneNumbersListAvailableCountriesResponse = PhoneNumberCountries;

/** Optional parameters. */
export interface PhoneNumbersListAvailableLocalitiesOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  maxPageSize?: number;
  /** An optional parameter for the name of the state or province in which to search for the area code. */
  administrativeDivision?: string;
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
}

/** Contains response data for the listAvailableLocalities operation. */
export type PhoneNumbersListAvailableLocalitiesResponse = PhoneNumberLocalities;

/** Optional parameters. */
export interface PhoneNumbersListOfferingsOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  maxPageSize?: number;
  /** Filter by assignmentType, e.g. Person, Application. */
  assignmentType?: PhoneNumberAssignmentType;
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
  /** Filter by numberType, e.g. Geographic, TollFree. */
  phoneNumberType?: PhoneNumberType;
}

/** Contains response data for the listOfferings operation. */
export type PhoneNumbersListOfferingsResponse = OfferingsResponse;

/** Optional parameters. */
export interface PhoneNumbersSearchAvailablePhoneNumbersOptionalParams
  extends coreClient.OperationOptions {
  /** The area code of the desired phone number, e.g. 425. */
  areaCode?: string;
  /** The quantity of desired phone numbers. The default value is 1. */
  quantity?: number;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the searchAvailablePhoneNumbers operation. */
export type PhoneNumbersSearchAvailablePhoneNumbersResponse = PhoneNumbersSearchAvailablePhoneNumbersHeaders &
  PhoneNumberSearchResult;

/** Optional parameters. */
export interface PhoneNumbersBrowseAvailableNumbersOptionalParams
  extends coreClient.OperationOptions {
  /** Represents the number type of the offering. */
  phoneNumberType?: PhoneNumberType;
  /** Capabilities of a phone number. */
  capabilities?: PhoneNumberCapabilitiesRequest;
  /** Represents the assignment type of the offering. Also known as the use case. */
  assignmentType?: PhoneNumberAssignmentType;
  /** The phone number prefix to match. If specified, the search will be limited to phone numbers that start with the any of the given prefixes. */
  phoneNumberPrefixes?: string[];
}

/** Contains response data for the browseAvailableNumbers operation. */
export type PhoneNumbersBrowseAvailableNumbersResponse = PhoneNumbersBrowseResult;

/** Optional parameters. */
export interface PhoneNumbersGetSearchResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSearchResult operation. */
export type PhoneNumbersGetSearchResultResponse = PhoneNumberSearchResult;

/** Optional parameters. */
export interface PhoneNumbersPurchasePhoneNumbersOptionalParams
  extends coreClient.OperationOptions {
  /** The search id. */
  searchId?: string;
  /** The consent to not resell numbers. */
  consentToNotResellNumbers?: boolean;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the purchasePhoneNumbers operation. */
export type PhoneNumbersPurchasePhoneNumbersResponse = PhoneNumbersPurchasePhoneNumbersHeaders;

/** Optional parameters. */
export interface PhoneNumbersGetReservationsOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  top?: number;
}

/** Contains response data for the getReservations operation. */
export type PhoneNumbersGetReservationsResponse = PhoneNumbersReservations;

/** Optional parameters. */
export interface PhoneNumbersCreateReservationOptionalParams
  extends coreClient.OperationOptions {
  /** Array of AvailablePhoneNumber */
  phoneNumbers?: AvailablePhoneNumber[];
}

/** Contains response data for the createReservation operation. */
export type PhoneNumbersCreateReservationResponse = PhoneNumbersReservation;

/** Optional parameters. */
export interface PhoneNumbersGetReservationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getReservation operation. */
export type PhoneNumbersGetReservationResponse = PhoneNumbersReservation;

/** Optional parameters. */
export interface PhoneNumbersDeleteReservationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PhoneNumbersAddToReservationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addToReservation operation. */
export type PhoneNumbersAddToReservationResponse = PhoneNumbersReservation;

/** Optional parameters. */
export interface PhoneNumbersRemoveFromReservationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the removeFromReservation operation. */
export type PhoneNumbersRemoveFromReservationResponse = PhoneNumbersReservation;

/** Optional parameters. */
export interface PhoneNumbersStartPurchaseOptionalParams
  extends coreClient.OperationOptions {
  /** The consent to not resell numbers. */
  consentToNotResellNumbers?: boolean;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the startPurchase operation. */
export type PhoneNumbersStartPurchaseResponse = PhoneNumbersStartPurchaseHeaders;

/** Optional parameters. */
export interface PhoneNumbersGetOperationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOperation operation. */
export type PhoneNumbersGetOperationResponse = PhoneNumbersGetOperationHeaders &
  PhoneNumberOperation;

/** Optional parameters. */
export interface PhoneNumbersCancelOperationOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PhoneNumbersUpdateCapabilitiesOptionalParams
  extends coreClient.OperationOptions {
  /** Capability value for calling. */
  calling?: PhoneNumberCapabilityType;
  /** Capability value for SMS. */
  sms?: PhoneNumberCapabilityType;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the updateCapabilities operation. */
export type PhoneNumbersUpdateCapabilitiesResponse = PhoneNumbersUpdateCapabilitiesHeaders &
  PurchasedPhoneNumber;

/** Optional parameters. */
export interface PhoneNumbersGetByNumberOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getByNumber operation. */
export type PhoneNumbersGetByNumberResponse = PurchasedPhoneNumber;

/** Optional parameters. */
export interface PhoneNumbersReleasePhoneNumberOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the releasePhoneNumber operation. */
export type PhoneNumbersReleasePhoneNumberResponse = PhoneNumbersReleasePhoneNumberHeaders;

/** Optional parameters. */
export interface PhoneNumbersListPhoneNumbersOptionalParams
  extends coreClient.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  top?: number;
}

/** Contains response data for the listPhoneNumbers operation. */
export type PhoneNumbersListPhoneNumbersResponse = PurchasedPhoneNumbers;

/** Optional parameters. */
export interface PhoneNumbersListAreaCodesNextOptionalParams
  extends coreClient.OperationOptions {
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
}

/** Contains response data for the listAreaCodesNext operation. */
export type PhoneNumbersListAreaCodesNextResponse = PhoneNumberAreaCodes;

/** Optional parameters. */
export interface PhoneNumbersListAvailableCountriesNextOptionalParams
  extends coreClient.OperationOptions {
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
}

/** Contains response data for the listAvailableCountriesNext operation. */
export type PhoneNumbersListAvailableCountriesNextResponse = PhoneNumberCountries;

/** Optional parameters. */
export interface PhoneNumbersListAvailableLocalitiesNextOptionalParams
  extends coreClient.OperationOptions {
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
}

/** Contains response data for the listAvailableLocalitiesNext operation. */
export type PhoneNumbersListAvailableLocalitiesNextResponse = PhoneNumberLocalities;

/** Optional parameters. */
export interface PhoneNumbersListOfferingsNextOptionalParams
  extends coreClient.OperationOptions {
  /** The locale to display in the localized fields in the response. e.g. 'en-US' */
  acceptLanguage?: string;
}

/** Contains response data for the listOfferingsNext operation. */
export type PhoneNumbersListOfferingsNextResponse = OfferingsResponse;

/** Optional parameters. */
export interface PhoneNumbersGetReservationsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getReservationsNext operation. */
export type PhoneNumbersGetReservationsNextResponse = PhoneNumbersReservations;

/** Optional parameters. */
export interface PhoneNumbersListPhoneNumbersNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listPhoneNumbersNext operation. */
export type PhoneNumbersListPhoneNumbersNextResponse = PurchasedPhoneNumbers;

/** Optional parameters. */
export interface PhoneNumbersClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
