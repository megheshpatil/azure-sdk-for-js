/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NginxManagementClient } = require("@azure/arm-nginx");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes a certificate from the NGINX deployment
 *
 * @summary Deletes a certificate from the NGINX deployment
 * x-ms-original-file: specification/nginx/resource-manager/NGINX.NGINXPLUS/preview/2024-01-01-preview/examples/Certificates_Delete.json
 */
async function certificatesDelete() {
  const subscriptionId =
    process.env["NGINX_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NGINX_RESOURCE_GROUP"] || "myResourceGroup";
  const deploymentName = "myDeployment";
  const certificateName = "default";
  const credential = new DefaultAzureCredential();
  const client = new NginxManagementClient(credential, subscriptionId);
  const result = await client.certificates.beginDeleteAndWait(
    resourceGroupName,
    deploymentName,
    certificateName,
  );
  console.log(result);
}

async function main() {
  certificatesDelete();
}

main().catch(console.error);
