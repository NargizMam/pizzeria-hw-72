import React from 'react';
import './Layout.csx';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <main className="Content-Layout">{children}</main>
    </>
  );
};

export default Layout;