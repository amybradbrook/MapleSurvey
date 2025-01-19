import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "userStats" model, go to https://maplesurvey.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "cIif2k33C4tk",
  comment:
    "Tracks survey completion statistics for each user. Each user can only have one userStats record, and users can only view their own records.",
  fields: {
    lastSurveyCompletedAt: {
      type: "dateTime",
      includeTime: true,
      storageKey: "cIif2k33C4tk-lastSurveyCompletedAt",
    },
    surveysCompleted: {
      type: "number",
      default: 0,
      decimals: 0,
      storageKey: "cIif2k33C4tk-surveysCompleted",
    },
    user: {
      type: "belongsTo",
      validations: { required: true, unique: true },
      parent: { model: "user" },
      storageKey: "cIif2k33C4tk-user",
    },
  },
};
