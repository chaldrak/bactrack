import React from "react";
import { ImSpinner9 } from "react-icons/im";

const SpinLoader = ({ loading }) => {
  return loading ? <ImSpinner9 size={25} className="animate-spin" /> : null;
};

export default SpinLoader;
