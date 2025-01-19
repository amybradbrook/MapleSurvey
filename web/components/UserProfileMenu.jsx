import React, { useEffect } from "react";
import { useAction } from "@gadgetinc/react"; 
import { api } from "../api";
import "./UserProfileMenu.css";
import PropTypes from "prop-types";

export default function UserProfileMenu({ isOpen, onClose, user }) {
  const [{ fetching, error }, signOut] = useAction(api.user.signOut);
 

  useEffect(() => {
 
    if (!isOpen) return;

    function handleClickOutside(event) {
 
      const dropdown = document.querySelector(".userProfileMenu-container");
      if (!dropdown?.contains(event.target)) {
 
        onClose();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSignOut = () => void signOut({ id: user.id });

  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ") || "Anonymous User";
 

  if (!isOpen) return null;
 

  return (
    <div className="userProfileMenu-container">
      <div className="userProfileMenu-header">
        <div className="userProfileMenu-userInfo">
          {user.googleImageUrl ? (
            <img
              src={user.googleImageUrl}
              alt="Profile"
              className="userProfileMenu-avatar"
            />
          ) : (
            <div className="userProfileMenu-avatarPlaceholder">
              {user.firstName?.[0]?.toUpperCase() || "?"}
          )
          <div className="userProfileMenu-userDetails">
            <h3 className="userProfileMenu-name">{fullName}</h3>
            <p className="userProfileMenu-email">{user.email}</p>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="userProfileMenu-close"
          aria-label="Close menu"
        >
          ×
        </button>
      </div>
      <div className="userProfileMenu-content">
        {error && (
          <p className="userProfileMenu-error">Error signing out. Please try again.</p>
        )}
        <button
          onClick={handleSignOut}
          className="userProfileMenu-signOut"
          disabled={fetching}
        >
          {fetching ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </div>
  );
}

UserProfileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string.isRequired,
    googleImageUrl: PropTypes.string
  }).isRequired
};
