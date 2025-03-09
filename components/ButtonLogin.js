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
      console.log("Починаємо процес входу...");
      const result = await signIn("email", { redirect: false });

      console.log("Результат входу:", result);

      if (result?.error) {
        console.error("Помилка входу:", result.error);
        alert(`Login error: ${result.error}`);
        return;
      }

      console.log("Отримуємо сесію...");
      const session = await fetch("/api/auth/session").then((res) =>
        res.json()
      );

      console.log("Сесія отримана:", session);

      if (!session?.user?.email) {
        throw new Error("Не вдалося отримати email користувача");
      }

      const userEmail = session.user.email;

      const res = await fetch("/api/check-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await res.json();
      console.log("Результат перевірки користувача:", data);

      if (data.exists) {
        window.location.href = dashboardUrl;
      } else {
        window.location.href = pricingUrl;
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert(`Unexpected error: ${error.message}`);
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
      Sign in
    </button>
  );
};

export default ButtonLogin;
