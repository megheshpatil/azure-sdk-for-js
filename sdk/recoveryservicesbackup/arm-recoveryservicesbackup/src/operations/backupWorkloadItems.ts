/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BackupWorkloadItems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  WorkloadItemResource,
  BackupWorkloadItemsListNextOptionalParams,
  BackupWorkloadItemsListOptionalParams,
  BackupWorkloadItemsListResponse,
  BackupWorkloadItemsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BackupWorkloadItems operations. */
export class BackupWorkloadItemsImpl implements BackupWorkloadItems {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class BackupWorkloadItems class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Provides a pageable list of workload item of a specific container according to the query filter and
   * the pagination
   * parameters.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container.
   * @param options The options parameters.
   */
  public list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: BackupWorkloadItemsListOptionalParams,
  ): PagedAsyncIterableIterator<WorkloadItemResource> {
    const iter = this.listPagingAll(
      vaultName,
      resourceGroupName,
      fabricName,
      containerName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          vaultName,
          resourceGroupName,
          fabricName,
          containerName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: BackupWorkloadItemsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<WorkloadItemResource[]> {
    let result: BackupWorkloadItemsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: BackupWorkloadItemsListOptionalParams,
  ): AsyncIterableIterator<WorkloadItemResource> {
    for await (const page of this.listPagingPage(
      vaultName,
      resourceGroupName,
      fabricName,
      containerName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Provides a pageable list of workload item of a specific container according to the query filter and
   * the pagination
   * parameters.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container.
   * @param options The options parameters.
   */
  private _list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: BackupWorkloadItemsListOptionalParams,
  ): Promise<BackupWorkloadItemsListResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, containerName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    nextLink: string,
    options?: BackupWorkloadItemsListNextOptionalParams,
  ): Promise<BackupWorkloadItemsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/items",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadItemResourceList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skipToken,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadItemResourceList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.nextLink,
    Parameters.containerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
