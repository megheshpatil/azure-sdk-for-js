/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GitHubAccessTokenRequest,
  WorkspaceGitRepoManagementGetGitHubAccessTokenOptionalParams,
  WorkspaceGitRepoManagementGetGitHubAccessTokenResponse,
} from "../models";

/** Interface representing a WorkspaceGitRepoManagement. */
export interface WorkspaceGitRepoManagement {
  /**
   * Get the GitHub access token.
   * @param gitHubAccessTokenRequest
   * @param options The options parameters.
   */
  getGitHubAccessToken(
    gitHubAccessTokenRequest: GitHubAccessTokenRequest,
    options?: WorkspaceGitRepoManagementGetGitHubAccessTokenOptionalParams,
  ): Promise<WorkspaceGitRepoManagementGetGitHubAccessTokenResponse>;
}
