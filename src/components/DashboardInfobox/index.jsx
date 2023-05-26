import React from "react";

import { Img, Text } from "components";

const DashboardInfobox = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.userimage}
          className="h-[45px] w-[45px]"
          alt="ushoppingbag"
        />
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <Text className="font-light font-poppins text-gray_900_01 text-xs w-auto">
            {props?.totalsales}
          </Text>
          <Text className="font-poppins font-semibold text-[22px] text-gray_900_01 sm:text-lg md:text-xl w-auto">
            {props?.price}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardInfobox.defaultProps = { totalsales: "Total Sales", price: "$2,456" };

export default DashboardInfobox;
