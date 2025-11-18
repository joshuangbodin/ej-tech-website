import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <React.Fragment>
      <div className="">
        <NavBar />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
