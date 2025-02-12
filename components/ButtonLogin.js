"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

// This button is used to log in customers and open the dashboard
const ButtonLogin = ({ session, extraStyle }) => {
  const dashboardUrl = "/dashboard";
  console.log(extraStyle);
  if (session) {
    return (
      <Link
        href={dashboardUrl}
        className={`btn btn-primary  ${extraStyle ? extraStyle : ""}`}
        onClick={() => {
          signIn(undefined, { callbackUrl: dashboardUrl });
        }}
      >
        Open dashboard {session.user.name}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      }}
    >
      Get started
    </button>
  );

  // 1. Create a login page
  // 2. Create email/password form with input fields
  // 3. Create make a post request to api/auth/login
};

export default ButtonLogin;
