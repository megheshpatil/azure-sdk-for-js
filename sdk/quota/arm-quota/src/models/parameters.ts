/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  GroupQuotasEntity as GroupQuotasEntityMapper,
  GroupQuotasEntityPatch as GroupQuotasEntityPatchMapper,
  SubmittedResourceRequestStatus as SubmittedResourceRequestStatusMapper,
  QuotaAllocationRequestStatus as QuotaAllocationRequestStatusMapper,
  GroupQuotasEnforcementResponse as GroupQuotasEnforcementResponseMapper,
  CurrentQuotaLimitBase as CurrentQuotaLimitBaseMapper,
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const groupQuotaPutRequestBody: OperationParameter = {
  parameterPath: ["options", "groupQuotaPutRequestBody"],
  mapper: GroupQuotasEntityMapper,
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const managementGroupId: OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    constraints: {
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "managementGroupId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const groupQuotaName: OperationURLParameter = {
  parameterPath: "groupQuotaName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9]*$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "groupQuotaName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const groupQuotasPatchRequestBody: OperationParameter = {
  parameterPath: ["options", "groupQuotasPatchRequestBody"],
  mapper: GroupQuotasEntityPatchMapper,
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const requestId: OperationURLParameter = {
  parameterPath: "requestId",
  mapper: {
    serializedName: "requestId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceProviderName: OperationURLParameter = {
  parameterPath: "resourceProviderName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^((?!-)[a-zA-Z0-9-]{1,63}(?<!-)\\.)+[a-zA-Z]{2,63}$",
      ),
    },
    serializedName: "resourceProviderName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9]*$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const filter: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    constraints: {
      MinLength: 12,
    },
    serializedName: "$filter",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const groupQuotaRequest: OperationParameter = {
  parameterPath: ["options", "groupQuotaRequest"],
  mapper: SubmittedResourceRequestStatusMapper,
};

export const allocationId: OperationURLParameter = {
  parameterPath: "allocationId",
  mapper: {
    serializedName: "allocationId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const allocateQuotaRequest: OperationParameter = {
  parameterPath: "allocateQuotaRequest",
  mapper: QuotaAllocationRequestStatusMapper,
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const locationSettings: OperationParameter = {
  parameterPath: ["options", "locationSettings"],
  mapper: GroupQuotasEnforcementResponseMapper,
};

export const resourceName1: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const scope: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const createQuotaRequest: OperationParameter = {
  parameterPath: "createQuotaRequest",
  mapper: CurrentQuotaLimitBaseMapper,
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const filter1: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1,
    },
    serializedName: "$top",
    type: {
      name: "Number",
    },
  },
};

export const skiptoken: OperationQueryParameter = {
  parameterPath: ["options", "skiptoken"],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String",
    },
  },
};
