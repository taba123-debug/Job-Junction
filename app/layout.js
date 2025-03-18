import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Job Junction: AI-Powered Skills Validation & Career Launchpad",
  description:
    "Bridging the gap between students and their dream careers with AI-powered tools like Skills Passport, personalized learning paths, and HR mock interviews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-white text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}