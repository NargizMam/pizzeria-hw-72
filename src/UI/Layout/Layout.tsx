import React from 'react';
import './Layout.css';
import Toolbar from "../../components/Toolbar/Toolbar";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
        <Toolbar/>
        <main className="Content-Layout">{children}</main>
    </>
  );
};

export default Layout;