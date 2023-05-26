import React from "react";

import { Button, Img } from "components";

const DashboardPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_rewind.svg"
          className="h-[18px] w-[18px]"
          alt="rewind"
        />
        <Button
          className="cursor-pointer font-medium font-poppins h-[35px] leading-[normal] text-center text-gray_900_01 text-sm w-[35px]"
          shape="RoundedBorder5"
          size="lg"
          variant="OutlineGray500"
        >
          {props?.onelabel}
        </Button>
        <Button
          className="cursor-pointer font-medium font-poppins h-[35px] leading-[normal] text-center text-sm text-white_A700 w-[35px]"
          shape="RoundedBorder5"
          size="lg"
          variant="FillBlueA700"
        >
          {props?.twolabel}
        </Button>
        <Button
          className="cursor-pointer font-medium font-poppins h-[35px] leading-[normal] text-center text-gray_900_01 text-sm w-[35px]"
          shape="RoundedBorder5"
          size="lg"
          variant="OutlineGray500"
        >
          {props?.threelabel}
        </Button>
        <Button
          className="cursor-pointer font-medium font-poppins h-[35px] leading-[normal] text-center text-gray_900_01 text-sm w-[35px]"
          shape="RoundedBorder5"
          size="lg"
          variant="OutlineGray500"
        >
          {props?.fourlabel}
        </Button>
        <Button
          className="cursor-pointer font-medium font-poppins h-[35px] leading-[normal] text-center text-gray_900_01 text-sm w-[35px]"
          shape="RoundedBorder5"
          size="lg"
          variant="OutlineGray500"
        >
          {props?.fivelabel}
        </Button>
        <Img
          src="images/img_forward.svg"
          className="h-[18px] w-[18px]"
          alt="forward"
        />
      </div>
    </>
  );
};

DashboardPagination.defaultProps = {};

export default DashboardPagination;
