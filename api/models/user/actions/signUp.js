import { applyParams, save, ActionOptions } from "gadget-server";

// Powers the form in web/routes/sign-up.jsx

/** @type { ActionRun } */
export const run = async ({ params, record, logger, api, session }) => {
  // Applies new 'email' and 'password' to the user record and saves to database
  applyParams(params, record);
  record.lastSignedIn = new Date();
  await save(record);
  if (record.emailVerified) {
    // Assigns the signed-in user to the active session
    session?.set("user", { _link: record.id });
  }
  return {
    result: "ok"
  }
};

 
/** @type { ActionOnSuccess } */
export const onSuccess = async ({ params, record, logger, api, session }) => {
  // Send verification email first since it's critical for user functionality
  if (!record.emailVerified) {
    await api.user.sendVerifyEmail({ email: record.email });
  }
  
  // Create the user's survey stats record
  try {
    await api.userSurveyStats.create({
      user: { _link: record.id }
    });
  } catch (error) {
    // Log but don't throw - we don't want to prevent completion of signup
    logger.error({ error, userId: record.id }, "Failed to create initial userSurveyStats record");
  }
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
  returnType: true,
  triggers: {
    googleOAuthSignUp: true,
    emailSignUp: true,
  },
};
