import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-[5px]",
  RoundedBorder8: "rounded-lg",
  RoundedBorder16: "rounded-[16px]",
  CircleBorder20: "rounded-[20px]",
  CircleBorder30: "rounded-[30px]",
  icbCircleBorder20: "rounded-[20px]",
  icbRoundedBorder16: "rounded-[16px]",
  icbRoundedBorder4: "rounded",
  icbCircleBorder30: "rounded-[30px]",
};
const variants = {
  FillBlue800: "bg-blue_800",
  FillGray40059: "bg-gray_400_59 text-black_900_7f",
  OutlineTeal40033: "bg-teal_400 shadow-bs2 text-white_A700",
  OutlineBlue700:
    "bg-white_A700 border border-blue_700 border-solid text-blue_700",
  FillBlue900: "bg-blue_900 text-white_A700",
  OutlineTeal40033_1: "bg-teal_400 shadow-bs3 text-white_A700",
  OutlineBlack90026: "bg-white_A700 shadow-bs5 text-blue_900",
  OutlineBlack90026_1: "bg-white_A700 shadow-bs text-blue_900",
  FillBluegray800: "bg-blue_gray_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-blue_gray_900",
  FillAmber60063: "bg-amber_600_63 text-amber_600",
  FillAmber600: "bg-amber_600 text-white_A700",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBluegray700:
    "border border-blue_gray_700 border-solid text-blue_gray_700",
  OutlineOrange800:
    "bg-amber_200 border border-orange_800 border-solid text-gray_900_01",
  OutlineBluegray100:
    "border border-blue_gray_100 border-solid text-gray_900_01",
  FillDeeporange300: "bg-deep_orange_300 text-white_A700",
  FillYellow700: "bg-yellow_700 text-white_A700",
  FillIndigo500: "bg-indigo_500 text-white_A700",
  OutlinePinkA7000c: "bg-indigo_500 shadow-bs4 text-white_A700",
  FillGray100: "bg-gray_100",
  FillOrange800: "bg-orange_800",
  OutlineGray500: "border border-gray_500 border-solid",
  icbFillIndigo50063: "bg-indigo_500_63",
  icbFillAmber600: "bg-amber_600",
  icbFillIndigo500: "bg-indigo_500",
  icbOutlinePinkA7000c: "bg-white_A700 shadow-bs4",
};
const sizes = {
  sm: "p-0.5",
  md: "p-[5px]",
  lg: "p-2",
  xl: "p-3",
  "2xl": "p-[15px]",
  smIcn: "p-[5px]",
  mdIcn: "p-2",
  lgIcn: "p-4",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder8",
    "RoundedBorder16",
    "CircleBorder20",
    "CircleBorder30",
    "icbCircleBorder20",
    "icbRoundedBorder16",
    "icbRoundedBorder4",
    "icbCircleBorder30",
  ]),
  variant: PropTypes.oneOf([
    "FillBlue800",
    "FillGray40059",
    "OutlineTeal40033",
    "OutlineBlue700",
    "FillBlue900",
    "OutlineTeal40033_1",
    "OutlineBlack90026",
    "OutlineBlack90026_1",
    "FillBluegray800",
    "FillWhiteA700",
    "FillAmber60063",
    "FillAmber600",
    "FillBlueA700",
    "OutlineBluegray700",
    "OutlineOrange800",
    "OutlineBluegray100",
    "FillDeeporange300",
    "FillYellow700",
    "FillIndigo500",
    "OutlinePinkA7000c",
    "FillGray100",
    "FillOrange800",
    "OutlineGray500",
    "icbFillIndigo50063",
    "icbFillAmber600",
    "icbFillIndigo500",
    "icbOutlinePinkA7000c",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
