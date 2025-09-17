import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/lib/AuthContext";

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
});

// export const metadata = {
//   title: "MI Store",
//   description: "Flower Store",
// };

export const metadata = {
  title: {
    default: "MI Store",
    template: "%s | MI Store"
  },
  keywords: ["Store", "Bloom", "Flower", "Garden"],
  description: "Flower Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
            <AuthProvider>
              {children}
            </AuthProvider>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
