import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-8">
          <Header />

          {children}
        </div>
      </div>
    </main>
  );
}