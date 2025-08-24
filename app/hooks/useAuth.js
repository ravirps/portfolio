"use client";

import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "knowRavi";
const STORAGE_KEY = "biodataAuthenticated";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [error, setError] = useState("");

  // Handle hydration and localStorage check
  useEffect(() => {
    // Set hydrated first to prevent hydration mismatch
    setIsHydrated(true);
    
    // Use setTimeout to ensure this runs after hydration
    const timer = setTimeout(() => {
      const authStatus = localStorage.getItem(STORAGE_KEY);
      if (authStatus === "true") {
        setIsAuthenticated(true);
        setShowModal(false);
      } else {
        setShowModal(true);
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  const handlePasswordSubmit = (password) => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setShowModal(false);
      setError("");
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowModal(true);
    setError("");
    localStorage.removeItem(STORAGE_KEY);
  };

  const closeModal = () => {
    setShowModal(false);
    if (!isAuthenticated) {
      window.location.href = "/";
    }
  };

  return {
    isAuthenticated,
    showModal,
    isHydrated,
    error,
    handlePasswordSubmit,
    handleLogout,
    closeModal,
  };
};
