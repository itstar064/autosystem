import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="h-full">{children}</main>
    <Footer />
  </>
);

export default Layout;
