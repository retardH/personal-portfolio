"use client";
import { ActiveSectionProvider } from "@/contexts/active-section";
import React, { PropsWithChildren } from "react";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </>
  );
};

export default Providers;
