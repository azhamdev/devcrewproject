import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventboom!",
  description: "Your modern eventmakers!",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-slate-50" lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}