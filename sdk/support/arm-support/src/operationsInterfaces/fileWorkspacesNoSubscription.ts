/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  FileWorkspacesNoSubscriptionGetOptionalParams,
  FileWorkspacesNoSubscriptionGetResponse,
  FileWorkspacesNoSubscriptionCreateOptionalParams,
  FileWorkspacesNoSubscriptionCreateResponse,
} from "../models";

/** Interface representing a FileWorkspacesNoSubscription. */
export interface FileWorkspacesNoSubscription {
  /**
   * Gets details for a specific file workspace.
   * @param fileWorkspaceName File Workspace Name
   * @param options The options parameters.
   */
  get(
    fileWorkspaceName: string,
    options?: FileWorkspacesNoSubscriptionGetOptionalParams,
  ): Promise<FileWorkspacesNoSubscriptionGetResponse>;
  /**
   * Creates a new file workspace.
   * @param fileWorkspaceName File workspace name.
   * @param options The options parameters.
   */
  create(
    fileWorkspaceName: string,
    options?: FileWorkspacesNoSubscriptionCreateOptionalParams,
  ): Promise<FileWorkspacesNoSubscriptionCreateResponse>;
}
