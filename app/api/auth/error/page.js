"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "Виникла помилка при вході в систему.";
  let description = "Спробуйте ще раз або зверніться в службу підтримки.";
  let action = {
    text: "Спробувати знову",
    href: "/auth/signin",
  };

  // Індивідуальні повідомлення для різних помилок
  if (error === "UserNotFound") {
    errorMessage = "Ваш email не знайдено в системі.";
    description = "Можливо, ви ще не придбали наші послуги.";
    action = {
      text: "Переглянути тарифи",
      href: "/#pricing",
    };
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {errorMessage}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {description}
          </p>
        </div>
        <div className="mt-5">
          <Link
            href={action.href}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {action.text}
          </Link>
        </div>
      </div>
    </div>
  );
}
