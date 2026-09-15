import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import MobileStickyCTA from "@/components/feature/MobileStickyCTA";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-950 font-sans">
      <Navbar />
      <main className={`${isHome ? "" : "pt-16 md:pt-20"} pb-24 lg:pb-0`}>
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}