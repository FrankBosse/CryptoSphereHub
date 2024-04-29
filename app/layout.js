import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./_utils/auth-context";
import { APIContextProvider } from "./_utils/API-Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Sphere Hub",
  description: "Crypto Market Data Analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <APIContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </APIContextProvider>
      </body>
    </html>
  );
}
