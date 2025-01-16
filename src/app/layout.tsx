import React from "react";
import type { Metadata } from "next";
import "../styles/globals.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/Generics/Header";
import GenericBody from "@/components/Generics/Body";
import Footer from "@/components/Generics/Footer";

export const metadata: Metadata = {
  title: "PetZone",
  description: "A loja preferida do seu pet",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          <GenericBody>{children}</GenericBody>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
