"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const ButtonLogin = ({ session, extraStyle }) => {
  const [loading, setLoading] = useState(false);
  const dashboardUrl = "/dashboard";
  const pricingUrl = "/#pricing";

  const handleLogin = async () => {
    setLoading(true);

    try {
      // Виконуємо signIn через next-auth
      const result = await signIn("email", { redirect: false });

      if (!result?.error) {
        // Отримуємо email користувача після входу
        const userEmail = result.email;

        // Виконуємо запит до API, щоб перевірити, чи є email у базі
        const res = await fetch("/api/check-customer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        });

        const data = await res.json();

        if (data.exists) {
          // Якщо email є в базі — перенаправляємо на dashboard
          window.location.href = dashboardUrl;
        } else {
          // Якщо email відсутній — перенаправляємо на сторінку тарифів
          window.location.href = pricingUrl;
        }
      } else {
        console.error("Login error:", result.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`btn hover:drop-shadow-sm opacity-75 hover:opacity-100 ${
        extraStyle ? extraStyle : ""
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? "Checking..." : session ? "Sign in →" : "Sign in"}
    </button>
  );
};

export default ButtonLogin;
