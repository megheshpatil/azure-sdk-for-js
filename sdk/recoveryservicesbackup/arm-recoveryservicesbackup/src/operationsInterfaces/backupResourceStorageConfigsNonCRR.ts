/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  BackupResourceStorageConfigsNonCRRGetOptionalParams,
  BackupResourceStorageConfigsNonCRRGetResponse,
  BackupResourceConfigResource,
  BackupResourceStorageConfigsNonCRRUpdateOptionalParams,
  BackupResourceStorageConfigsNonCRRUpdateResponse,
  BackupResourceStorageConfigsNonCRRPatchOptionalParams,
} from "../models";

/** Interface representing a BackupResourceStorageConfigsNonCRR. */
export interface BackupResourceStorageConfigsNonCRR {
  /**
   * Fetches resource storage config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupResourceStorageConfigsNonCRRGetOptionalParams,
  ): Promise<BackupResourceStorageConfigsNonCRRGetResponse>;
  /**
   * Updates vault storage model type.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters Vault storage config request
   * @param options The options parameters.
   */
  update(
    vaultName: string,
    resourceGroupName: string,
    parameters: BackupResourceConfigResource,
    options?: BackupResourceStorageConfigsNonCRRUpdateOptionalParams,
  ): Promise<BackupResourceStorageConfigsNonCRRUpdateResponse>;
  /**
   * Updates vault storage model type.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters Vault storage config request
   * @param options The options parameters.
   */
  patch(
    vaultName: string,
    resourceGroupName: string,
    parameters: BackupResourceConfigResource,
    options?: BackupResourceStorageConfigsNonCRRPatchOptionalParams,
  ): Promise<void>;
}
