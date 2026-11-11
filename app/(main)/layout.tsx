import type { Metadata } from "next";
import BootstrapClient from "@/components/BootstrapClient";
// Same order as the original index.html: custom CSS first, then Bootstrap.
import "@/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Mary || Frontend/Full Stack Developer",
  icons: { icon: "/Assets/Images/logo1.png" },
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        {/* Google Fonts (Sofia + neon effect used by the hero subtitle) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple"
        />
      </head>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
