import type { Metadata } from "next";
import "./globals.css";

import QueryProvider from "@/config/QueryProvider";
import RecoilProvider from "@/config/RecoilProvider";
import { Sidebar } from "@/app/components/Sidebar";
export const metadata: Metadata = {
  title: "PG Dashboard",
  description: "Payment Dashboard with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <RecoilProvider>
            <div className="flex max-h-screen">
              <Sidebar/>
              <main className="flex-1 overflow-auto bg-gray-300 p-4">
                {children}
              </main>
            </div>
          </RecoilProvider>
        </QueryProvider>
      </body>
    </html>
  );
}