import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://maplesurvey.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "YMhnbHH1pteF",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "-dZVOiNRNqn0",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "BI8HZEpHzmkw",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "wPWLV5xlKUlW",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "R1yO9XsPR1Dr",
    },
    firstName: { type: "string", storageKey: "nkmVyGDSHRyS" },
    googleImageUrl: { type: "url", storageKey: "TBUPKJhcPXfq" },
    googleProfileId: { type: "string", storageKey: "cZfUHvZq_Ljj" },
    lastName: { type: "string", storageKey: "4T2U6MBBM8vJ" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "j9SlbDfq70b3",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "iVbL24KpvMSd",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "J58iu8sIx4gC",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "GBDKsNgTpxbr",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "UfWfmRreKDrz",
    },
    stats: {
      type: "hasOne",
      child: { model: "userStats", belongsToField: "user" },
      storageKey: "YMhnbHH1pteF-stats",
    },
  },
};
