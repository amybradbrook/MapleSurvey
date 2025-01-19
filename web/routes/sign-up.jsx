import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { useLocation, Link } from "react-router";
 
 
import './sign-in.css';

export default function () {
  const {
    register,
    submit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useActionForm(api.user.signUp);
  const { search } = useLocation();

  return (
    <div className="signInContainer">
      <form className="custom-form tropical-theme" onSubmit={submit}>
        <h1 className="form-title welcome-text">WELCOME!</h1>
        <div className="custom-form">
          <a 
            className="google-oauth-button" 
            href={`/auth/google/start${search}`}
            role="button"
            aria-label="Sign up with Google"
          >
            <img src="https://assets.gadget.dev/assets/default-app-assets/google.svg" width={22} height={22} /> Continue with Google
          </a>
          <input 
            className="custom-input tropical-input" 
            placeholder="EMAIL" 
            aria-label="Email address"
            aria-invalid={!!errors?.user?.email}
            {...register("email")} 
          />
          {errors?.user?.email?.message && <p className="format-message error">Email: {errors.user.email.message}</p>}
          <input 
            className="custom-input tropical-input" 
            placeholder="PASSWORD" 
            type="password"
            aria-label="Password"
            aria-invalid={!!errors?.user?.password}
            {...register("password")} 
          />
          {errors?.user?.password?.message && <p className="format-message error">Password: {errors.user.password.message}</p>}
          {errors?.root?.message && <p className="format-message error">{errors.root.message}</p>}
          {isSubmitSuccessful && <p className="format-message success">Please check your inbox</p>}
          <button disabled={isSubmitting} type="submit" className="submit-button">
            SIGN UP
          </button>
          <p className="sign-in-link">Already have an account? <Link to="/sign-in">Sign in</Link></p>
        </div>
      </form>
    </div>
  );
}