import Link from "next/link";

// This button is used to log in customers and open the dashboard
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  console.log(extraStyle);
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary  ${extraStyle ? extraStyle : ""}`}
      >
        Your dashboard, {name}
      </Link>
    );
  }
  return <button>Login</button>;

  // 1. Create a login page
  // 2. Create email/password form with input fields
  // 3. Create make a post request to api/auth/login
};

export default ButtonLogin;
