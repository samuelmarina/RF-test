import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingSpinner = ({ size }) => {
  return <Loader type="ThreeDots" height={size} width={size} color="#9c9c9c" />;
};

export default LoadingSpinner;
