"use client";

import { useEffect } from "react";

// Loads Bootstrap's JS in the browser (needed for the mobile navbar toggle).
export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
