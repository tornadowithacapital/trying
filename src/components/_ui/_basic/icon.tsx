"use client";
import React from "react";
import XIcon from "../../../assets/svg/twitter.svg";

type Props = {
  name: "twitter" | "arrow";
  size?: number;
};

const Icons: React.FC<Props> = ({ name, size = 20 }) => (
  <>
    {name === "twitter" && <XIcon width={size} height={size} />}
    {name === "arrow" && <></>}
  </>
);

export default Icons;
