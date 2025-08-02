import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={classNames("max-w-7xl mx-auto px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
