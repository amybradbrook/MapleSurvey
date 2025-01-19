import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "survey" model, go to https://maplesurvey.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "D-WGsuh8EGTq",
  comment:
    "Stores survey information created by users with a belongsTo relationship to the user model. It includes basic metadata and metrics.",
  fields: {
    description: {
      type: "string",
      storageKey: "D-WGsuh8EGTq-description",
    },
    responseCount: {
      type: "number",
      default: 0,
      decimals: 0,
      storageKey: "D-WGsuh8EGTq-responseCount",
    },
    title: {
      type: "string",
      validations: {
        required: true,
        stringLength: { min: 1, max: 200 },
      },
      storageKey: "D-WGsuh8EGTq-title",
    },
    user: {
      type: "belongsTo",
      validations: { required: true },
      parent: { model: "user" },
      storageKey: "D-WGsuh8EGTq-user",
    },
  },
};
