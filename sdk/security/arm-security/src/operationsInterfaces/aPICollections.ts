/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ApiCollection,
  APICollectionsListBySubscriptionOptionalParams,
  APICollectionsListByResourceGroupOptionalParams,
  APICollectionsListByAzureApiManagementServiceOptionalParams,
  APICollectionsGetByAzureApiManagementServiceOptionalParams,
  APICollectionsGetByAzureApiManagementServiceResponse,
  APICollectionsOnboardAzureApiManagementApiOptionalParams,
  APICollectionsOnboardAzureApiManagementApiResponse,
  APICollectionsOffboardAzureApiManagementApiOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a APICollections. */
export interface APICollections {
  /**
   * Gets a list of API collections within a subscription that have been onboarded to Microsoft Defender
   * for APIs.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: APICollectionsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ApiCollection>;
  /**
   * Gets a list of API collections within a resource group that have been onboarded to Microsoft
   * Defender for APIs.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: APICollectionsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ApiCollection>;
  /**
   * Gets a list of Azure API Management APIs that have been onboarded to Microsoft Defender for APIs. If
   * an Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the
   * operations within the Azure API Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByAzureApiManagementService(
    resourceGroupName: string,
    serviceName: string,
    options?: APICollectionsListByAzureApiManagementServiceOptionalParams,
  ): PagedAsyncIterableIterator<ApiCollection>;
  /**
   * Gets an Azure API Management API if it has been onboarded to Microsoft Defender for APIs. If an
   * Azure API Management API is onboarded to Microsoft Defender for APIs, the system will monitor the
   * operations within the Azure API Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  getByAzureApiManagementService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsGetByAzureApiManagementServiceOptionalParams,
  ): Promise<APICollectionsGetByAzureApiManagementServiceResponse>;
  /**
   * Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring
   * the operations within the Azure Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  beginOnboardAzureApiManagementApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsOnboardAzureApiManagementApiOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<APICollectionsOnboardAzureApiManagementApiResponse>,
      APICollectionsOnboardAzureApiManagementApiResponse
    >
  >;
  /**
   * Onboard an Azure API Management API to Microsoft Defender for APIs. The system will start monitoring
   * the operations within the Azure Management API for intrusive behaviors and provide alerts for
   * attacks that have been detected.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  beginOnboardAzureApiManagementApiAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsOnboardAzureApiManagementApiOptionalParams,
  ): Promise<APICollectionsOnboardAzureApiManagementApiResponse>;
  /**
   * Offboard an Azure API Management API from Microsoft Defender for APIs. The system will stop
   * monitoring the operations within the Azure API Management API for intrusive behaviors.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  offboardAzureApiManagementApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: APICollectionsOffboardAzureApiManagementApiOptionalParams,
  ): Promise<void>;
}
