"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ButtonLogin = ({ session, extraStyle }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dashboardUrl = "/dashboard";
  const pricingUrl = "/#pricing";

  const handleLogin = async () => {
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        // Порожні значення, оскільки вони будуть заповнені на сторінці авторизації
      });

      if (!result) {
        // Користувач скасував авторизацію
        console.log("Авторизація скасована");
      } else if (result.error) {
        console.error("Помилка входу:", result.error);

        if (result.error === "UserNotFound") {
          router.push(pricingUrl);
        } else {
          console.error("Інша помилка:", result.error);
        }
      } else {
        // Успішний вхід - перенаправляємо на dashboard
        router.push(dashboardUrl);
      }
    } catch (error) {
      console.error("Неочікувана помилка:", error);
    } finally {
      setLoading(false);
    }
  };

  // Якщо користувач вже увійшов, показуємо кнопку dashboard
  if (session) {
    return (
      <button
        className={`btn hover:drop-shadow-sm opacity-75 hover:opacity-100 ${
          extraStyle ? extraStyle : ""
        }`}
        onClick={() => router.push(dashboardUrl)}
      >
        Open dashboard →
      </button>
    );
  }

  return (
    <button
      className={`btn hover:drop-shadow-sm opacity-75 hover:opacity-100 ${
        extraStyle ? extraStyle : ""
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? "Loading..." : "Sign in"}
    </button>
  );
};

export default ButtonLogin;
