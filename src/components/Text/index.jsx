import React from "react";

const sizeClasses = {
  xs: "font-normal text-[6px]",
  s: "font-normal text-[8px]",
  md: "font-normal text-[10px]",
  lg: "font-semibold text-[11px]",
  xl: "font-normal text-xs",
  "2xl": "font-normal text-[13px]",
  "3xl": "font-normal text-sm",
  "4xl": "font-normal text-base",
  "5xl": "font-medium text-lg",
  "6xl": "font-semibold text-[22px] sm:text-lg md:text-xl",
  "7xl": "font-bold text-2xl md:text-[22px] sm:text-xl",
  "8xl": "font-semibold sm:text-[27px] md:text-[29px] text-[31px]",
  "9xl": "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  "10xl": "font-normal sm:text-[33px] md:text-[35px] text-[37px]",
  "11xl": "font-extrabold sm:text-4xl md:text-[38px] text-[40px]",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
