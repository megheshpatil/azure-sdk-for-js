/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  WebApplicationFirewallPolicy,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or update policy with specified rule set name within a resource group.
 *
 * @summary Creates or update policy with specified rule set name within a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-11-01/examples/WafPolicyCreateOrUpdate.json
 */
async function createsOrUpdatesAWafPolicyWithinAResourceGroup() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const policyName = "Policy1";
  const parameters: WebApplicationFirewallPolicy = {
    customRules: [
      {
        name: "Rule1",
        action: "Block",
        matchConditions: [
          {
            matchValues: ["192.168.1.0/24", "10.0.0.0/24"],
            matchVariables: [
              { selector: undefined, variableName: "RemoteAddr" },
            ],
            operator: "IPMatch",
          },
        ],
        priority: 1,
        ruleType: "MatchRule",
      },
      {
        name: "Rule2",
        action: "Block",
        matchConditions: [
          {
            matchValues: ["192.168.1.0/24"],
            matchVariables: [
              { selector: undefined, variableName: "RemoteAddr" },
            ],
            operator: "IPMatch",
          },
          {
            matchValues: ["Windows"],
            matchVariables: [
              { selector: "UserAgent", variableName: "RequestHeaders" },
            ],
            operator: "Contains",
          },
        ],
        priority: 2,
        ruleType: "MatchRule",
      },
      {
        name: "RateLimitRule3",
        action: "Block",
        groupByUserSession: [
          { groupByVariables: [{ variableName: "ClientAddr" }] },
        ],
        matchConditions: [
          {
            matchValues: ["192.168.1.0/24", "10.0.0.0/24"],
            matchVariables: [
              { selector: undefined, variableName: "RemoteAddr" },
            ],
            negationConditon: true,
            operator: "IPMatch",
          },
        ],
        priority: 3,
        rateLimitDuration: "OneMin",
        rateLimitThreshold: 10,
        ruleType: "RateLimitRule",
      },
      {
        name: "Rule4",
        action: "JSChallenge",
        matchConditions: [
          {
            matchValues: ["192.168.1.0/24"],
            matchVariables: [
              { selector: undefined, variableName: "RemoteAddr" },
            ],
            operator: "IPMatch",
          },
          {
            matchValues: ["Bot"],
            matchVariables: [
              { selector: "UserAgent", variableName: "RequestHeaders" },
            ],
            operator: "Contains",
          },
        ],
        priority: 4,
        ruleType: "MatchRule",
      },
    ],
    location: "WestUs",
    managedRules: {
      exclusions: [
        {
          exclusionManagedRuleSets: [
            {
              ruleGroups: [
                {
                  ruleGroupName: "REQUEST-930-APPLICATION-ATTACK-LFI",
                  rules: [{ ruleId: "930120" }],
                },
                { ruleGroupName: "REQUEST-932-APPLICATION-ATTACK-RCE" },
              ],
              ruleSetType: "OWASP",
              ruleSetVersion: "3.2",
            },
          ],
          matchVariable: "RequestArgNames",
          selector: "hello",
          selectorMatchOperator: "StartsWith",
        },
        {
          exclusionManagedRuleSets: [
            { ruleGroups: [], ruleSetType: "OWASP", ruleSetVersion: "3.1" },
          ],
          matchVariable: "RequestArgNames",
          selector: "hello",
          selectorMatchOperator: "EndsWith",
        },
        {
          matchVariable: "RequestArgNames",
          selector: "test",
          selectorMatchOperator: "StartsWith",
        },
        {
          matchVariable: "RequestArgValues",
          selector: "test",
          selectorMatchOperator: "StartsWith",
        },
      ],
      managedRuleSets: [
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: "REQUEST-931-APPLICATION-ATTACK-RFI",
              rules: [
                { action: "Log", ruleId: "931120", state: "Enabled" },
                {
                  action: "AnomalyScoring",
                  ruleId: "931130",
                  state: "Disabled",
                },
              ],
            },
          ],
          ruleSetType: "OWASP",
          ruleSetVersion: "3.2",
        },
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: "UnknownBots",
              rules: [
                { action: "JSChallenge", ruleId: "300700", state: "Enabled" },
              ],
            },
          ],
          ruleSetType: "Microsoft_BotManagerRuleSet",
          ruleSetVersion: "1.0",
        },
      ],
    },
    policySettings: {
      jsChallengeCookieExpirationInMins: 100,
      logScrubbing: {
        scrubbingRules: [
          {
            matchVariable: "RequestArgNames",
            selector: "test",
            selectorMatchOperator: "Equals",
            state: "Enabled",
          },
          {
            matchVariable: "RequestIPAddress",
            selectorMatchOperator: "EqualsAny",
            state: "Enabled",
          },
        ],
        state: "Enabled",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.webApplicationFirewallPolicies.createOrUpdate(
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createsOrUpdatesAWafPolicyWithinAResourceGroup();
}

main().catch(console.error);
