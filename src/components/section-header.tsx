import React, { PropsWithChildren } from "react";

const SectionHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-semibold capitalize">
      {children}
    </h2>
  );
};

export default SectionHeader;
