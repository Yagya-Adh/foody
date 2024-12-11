import React from "react";

import { IIconsInterface } from "../interface";

const QualityIcon = ({ className }: IIconsInterface) => {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="50" fill="#FD7D1A" />
      <path
        d="M50.0001 68.5714C54.9256 68.5714 59.6493 66.6148 63.1321 63.132C66.6149 59.6492 68.5716 54.9254 68.5716 50H31.4287C31.4287 54.9254 33.3853 59.6492 36.8682 63.132C38.5927 64.8565 40.64 66.2245 42.8932 67.1578C45.1464 68.0911 47.5613 68.5714 50.0001 68.5714V68.5714Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.4287 44.2856L60.0001 31.4285"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.7144 45.7141L65.7144 37.1427"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QualityIcon;
