import Link from "next/link";

const ButtonLogin = (props) => {
  console.log(props);

  if (props.isLoggedIn) {
    return <Link href="/dashboard">Yor dashboard</Link>;
  } else {
    return <button>Login</button>;
  }
};

export default ButtonLogin;
