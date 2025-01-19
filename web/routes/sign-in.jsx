import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { Link, useLocation } from "react-router";
import './sign-in.css';

import PropTypes from "prop-types";
 
export default function SignInPage() {
  // Use form state management from Gadget
  const {
    register,
    submit,
    formState: { errors, isSubmitting },
  } = useActionForm(api.user.signIn);
  const { search } = useLocation();

  return (
    <div className="signInContainer">
      <form className="custom-form tropical-theme" onSubmit={submit}>
        <h1 className="form-title welcome-text">WELCOME!</h1>
        <div className="custom-form">
          <a 
            className="google-oauth-button tropical-button" 
            href={`/auth/google/start${search}`}
            aria-label="Sign in with Google"
          >
            <img src="https://assets.gadget.dev/assets/default-app-assets/google.svg" width={22} height={22} /> Continue with Google
          </a>
          <input 
            className="custom-input tropical-input" 
            placeholder="USER NAME" 
            aria-label="Email address"
            {...register("email")} 
          />
          <input 
            className="custom-input tropical-input" 
            placeholder="PASSWORD" 
            type="password" 
            aria-label="Password"
            {...register("password")} 
          />
          {errors?.root?.message && <p className="format-message error">{errors.root.message}</p>}
          <button disabled={isSubmitting} type="submit" className="submit-button">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
          <div className="divider tropical-divider" />
        </div>
        <p>
          Forgot your password? <Link to="/forgot-password">Reset password</Link>
        </p>
        <p>
          Don't have an account yet? <Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

SignInPage.propTypes = {
  // Add props if needed in the future
};
