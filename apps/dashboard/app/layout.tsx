import React from "react";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "Store Dashboard",
  description: "Dashboard for managing products and inventory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
