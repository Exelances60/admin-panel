// withSearchHeader.tsx
import React from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import { DefaultStyles } from "../DefaultStyles/DefaultStyles";
import { FloatButton } from "antd";

const withSearchHeader = (WrappedComponent: React.FC) => {
  return (props: React.ComponentProps<React.FC>) => (
    <div className={`${DefaultStyles.layout}`}>
      <SearchHeader />
      <WrappedComponent {...props} />
      <FloatButton.BackTop />
    </div>
  );
};

export default withSearchHeader;
