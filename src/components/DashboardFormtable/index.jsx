import React from "react";

import { Button, Img, List, Text } from "components";

const DashboardFormtable = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[84%] md:w-full"
          orientation="horizontal"
        >
          <div className="bg-white_A700 flex flex-col items-start justify-start w-full">
            <div className="bg-blue_gray_100 flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-medium font-poppins text-gray_900_01 text-lg w-auto">
                {props?.tabletitle}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.etiampurusin}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSixtySix}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.aliquamvelitlac_One}
              </Text>
            </div>
            <Button
              className="cursor-pointer font-poppins leading-[normal] text-base text-center text-gray_900_01 w-full"
              size="lg"
              variant="FillGray100"
            >
              {props?.fermentum_scelerisque_ultricies}
            </Button>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.integersemperpe_One}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSeventy}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.ametpretiumeget_One}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSeventyTwo}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.risusconsequat}
              </Text>
            </div>
          </div>
          <div className="bg-white_A700 border-gray_300_01 border-l border-solid flex flex-col items-start justify-start w-full">
            <div className="bg-blue_gray_100 flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-medium font-poppins text-gray_900_01 text-lg w-auto">
                {props?.tabletitle}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.curabiturdonec}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSixtySix}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.pellentesqueege_One}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSixtyEight}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.nequeturpisenim_One}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSeventy}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.inipsumvolutpat_One}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSeventyTwo}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.adipiscingodio}
              </Text>
            </div>
          </div>
          <div className="bg-white_A700 border-gray_300_01 border-l border-solid flex flex-col items-start justify-start w-full">
            <div className="bg-blue_gray_100 flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-medium font-poppins text-gray_900_01 text-lg w-auto">
                {props?.tabletitle}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.morbipharetra}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSixtySix}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.tortorhabitant}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSixtyEight}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.egestasnonsocii_One}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSeventy}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.utfeugiategesta_One}
              </Text>
            </div>
            <Text className="bg-gray_100 font-poppins justify-center px-5 py-2.5 text-base text-gray_900_01 w-full">
              {props?.frameSeventyTwo}
            </Text>
            <div className="flex flex-row items-start justify-start px-5 py-2.5 w-full">
              <Text className="font-poppins text-base text-gray_900_01 w-auto">
                {props?.pharetraidsit_One}
              </Text>
            </div>
          </div>
        </List>
        <div className="bg-white_A700 border-gray_300_01 border-l border-solid flex flex-col items-start justify-start w-[180px]">
          <div className="bg-blue_gray_100 flex flex-row items-start justify-start px-5 py-2.5 w-full">
            <Text className="font-medium font-poppins text-gray_900_01 text-lg w-auto">
              {props?.tabletitle}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete}
              </div>
            </Button>
          </div>
          <div className="bg-gray_100 flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_One}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_One}
              </div>
            </Button>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_Two}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_Two}
              </div>
            </Button>
          </div>
          <div className="bg-gray_100 flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_Three}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_Three}
              </div>
            </Button>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_Four}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_Four}
              </div>
            </Button>
          </div>
          <div className="bg-gray_100 flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_Five}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_Five}
              </div>
            </Button>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_Six}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_Six}
              </div>
            </Button>
          </div>
          <div className="bg-gray_100 flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_Seven}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_Seven}
              </div>
            </Button>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-5 py-2.5 w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[55px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillBlue800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.edit_Eight}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[72px]"
              leftIcon={
                <Img
                  src="images/img_usave.svg"
                  className="mt-px mr-[5px]"
                  alt="u:save"
                />
              }
              shape="RoundedBorder5"
              size="sm"
              variant="FillOrange800"
            >
              <div className="font-poppins leading-[normal] text-left text-white_A700 text-xs">
                {props?.delete_Eight}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardFormtable.defaultProps = {
  tabletitle: "Table Title",
  etiampurusin: "Etiam purus in",
  frameSixtySix: "Duis eget habitant",
  aliquamvelitlac_One: "Aliquam velit lacus",
  fermentum_scelerisque_ultricies: "Fermentum scelerisque ultricies",
  integersemperpe_One: "Integer semper pellentesque",
  frameSeventy: "Parturient at id",
  ametpretiumeget_One: "Amet, pretium eget",
  frameSeventyTwo: "Risus consequat sollicitudin",
  risusconsequat: "Risus consequat sollicitudin",
  tabletitle: "Table Title",
  curabiturdonec: "Curabitur donec duis",
  frameSixtySix: "At amet odio",
  pellentesqueege_One: "Pellentesque egestas placerat",
  frameSixtyEight: "Morbi sagittis nulla",
  nequeturpisenim_One: "Neque turpis enim",
  frameSeventy: "Sem neque, mattis",
  inipsumvolutpat_One: "In ipsum volutpat",
  frameSeventyTwo: "Adipiscing odio nulla",
  adipiscingodio: "Adipiscing odio nulla",
  tabletitle: "Table Title",
  morbipharetra: "Morbi pharetra, accumsan",
  frameSixtySix: "Commodo eget scelerisque",
  tortorhabitant: "Tortor habitant sit",
  frameSixtyEight: "Quam semper quis",
  egestasnonsocii_One: "Egestas non sociis",
  frameSeventy: "Pellentesque facilisis massa",
  utfeugiategesta_One: "Ut feugiat egestas",
  frameSeventyTwo: "Pharetra id sit",
  pharetraidsit_One: "Pharetra id sit",
  tabletitle: "Table Title",
  edit: "Edit",
  delete: "Delete",
  edit_One: "Edit",
  delete_One: "Delete",
  edit_Two: "Edit",
  delete_Two: "Delete",
  edit_Three: "Edit",
  delete_Three: "Delete",
  edit_Four: "Edit",
  delete_Four: "Delete",
  edit_Five: "Edit",
  delete_Five: "Delete",
  edit_Six: "Edit",
  delete_Six: "Delete",
  edit_Seven: "Edit",
  delete_Seven: "Delete",
  edit_Eight: "Edit",
  delete_Eight: "Delete",
};

export default DashboardFormtable;
