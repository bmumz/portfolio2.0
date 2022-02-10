import React, { FC } from "react";

import { Background, HamburgerMenu } from "../components";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Background>{children}</Background>
  </>
);

export default Layout;
