import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import styled from "styled-components";
import SupabaseProvider from "./supabase-provider";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const dynamic = "force-dynamic";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <SupabaseProvider>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </SupabaseProvider>
    </html>
  );
}
