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
  SubvolumeInfo,
  SubvolumesListByVolumeOptionalParams,
  SubvolumesGetOptionalParams,
  SubvolumesGetResponse,
  SubvolumesCreateOptionalParams,
  SubvolumesCreateResponse,
  SubvolumePatchRequest,
  SubvolumesUpdateOptionalParams,
  SubvolumesUpdateResponse,
  SubvolumesDeleteOptionalParams,
  SubvolumesGetMetadataOptionalParams,
  SubvolumesGetMetadataResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Subvolumes. */
export interface Subvolumes {
  /**
   * Returns a list of the subvolumes in the volume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  listByVolume(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: SubvolumesListByVolumeOptionalParams,
  ): PagedAsyncIterableIterator<SubvolumeInfo>;
  /**
   * Returns the path associated with the subvolumeName provided
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    options?: SubvolumesGetOptionalParams,
  ): Promise<SubvolumesGetResponse>;
  /**
   * Creates a subvolume in the path or clones the subvolume mentioned in the parentPath
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param body Subvolume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    body: SubvolumeInfo,
    options?: SubvolumesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SubvolumesCreateResponse>,
      SubvolumesCreateResponse
    >
  >;
  /**
   * Creates a subvolume in the path or clones the subvolume mentioned in the parentPath
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param body Subvolume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    body: SubvolumeInfo,
    options?: SubvolumesCreateOptionalParams,
  ): Promise<SubvolumesCreateResponse>;
  /**
   * Patch a subvolume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param body Subvolume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    body: SubvolumePatchRequest,
    options?: SubvolumesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SubvolumesUpdateResponse>,
      SubvolumesUpdateResponse
    >
  >;
  /**
   * Patch a subvolume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param body Subvolume object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    body: SubvolumePatchRequest,
    options?: SubvolumesUpdateOptionalParams,
  ): Promise<SubvolumesUpdateResponse>;
  /**
   * Delete subvolume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    options?: SubvolumesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete subvolume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    options?: SubvolumesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get details of the specified subvolume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param options The options parameters.
   */
  beginGetMetadata(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    options?: SubvolumesGetMetadataOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SubvolumesGetMetadataResponse>,
      SubvolumesGetMetadataResponse
    >
  >;
  /**
   * Get details of the specified subvolume
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param subvolumeName The name of the subvolume.
   * @param options The options parameters.
   */
  beginGetMetadataAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    subvolumeName: string,
    options?: SubvolumesGetMetadataOptionalParams,
  ): Promise<SubvolumesGetMetadataResponse>;
}
