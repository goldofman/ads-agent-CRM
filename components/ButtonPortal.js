"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonPortal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBilling = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      // const response = await axios.post("/api/billing/create-portal"); // for LS
      const response = await axios.post("/api/billing/create-portal", {
        returnUrl: window.location.href,
      }); // for Stripe
      const portalUrl = response.data.url;
      window.location.href = portalUrl; // for Stripe
      // window.open(portalUrl, "_black"); // for LS
      setIsLoading(false); // for LS
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";

      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={() => handleBilling()}>
      {isLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      Billing
    </button>
  );
};

export default ButtonPortal;
