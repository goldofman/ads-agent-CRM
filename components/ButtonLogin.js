import Link from "next/link";

// This button is used to log in customers and open the dashboard
const ButtonLogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Your dashboard, {name}
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
