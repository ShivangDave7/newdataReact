import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcFillGray200: "bg-gray_200",
  srcFillWhiteA700: "bg-white_A700",
  srcOutlineBluegray100:
    "bg-white_A700 border border-blue_gray_100 border-solid",
  OutlineBluegray100: "bg-white_A700 border border-blue_gray_100 border-solid",
  FillGray5001: "bg-gray_50_01",
  OutlineRed300: "bg-red_50 border border-red_300 border-solid",
};
const shapes = {
  srcRoundedBorder15: "rounded-[15px]",
  srcRoundedBorder5: "rounded-[5px]",
  srcCircleBorder30: "rounded-[30px]",
  RoundedBorder5: "rounded-[5px]",
  RoundedBorder8: "rounded-lg",
};
const sizes = {
  smSrc: "px-[5px] py-1.5",
  mdSrc: "p-[9px]",
  lgSrc: "p-3.5",
  sm: "p-[9px]",
  md: "p-[13px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder15",
    "srcRoundedBorder5",
    "srcCircleBorder30",
    "RoundedBorder5",
    "RoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "srcFillGray200",
    "srcFillWhiteA700",
    "srcOutlineBluegray100",
    "OutlineBluegray100",
    "FillGray5001",
    "OutlineRed300",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "lgSrc", "sm", "md"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
