import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
