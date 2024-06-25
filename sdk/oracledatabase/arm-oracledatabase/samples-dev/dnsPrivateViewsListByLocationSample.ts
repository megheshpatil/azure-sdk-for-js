/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OracleDatabaseManagementClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List DnsPrivateView resources by Location
 *
 * @summary List DnsPrivateView resources by Location
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/preview/2023-09-01-preview/examples/dnsPrivateViews_listByLocation.json
 */
async function listDnsPrivateViewsByLocation() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dnsPrivateViews.listByLocation(location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listDnsPrivateViewsByLocation();
}

main().catch(console.error);
