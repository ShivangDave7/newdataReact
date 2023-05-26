import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text, TextArea } from "components";
import DashboardFormtable from "components/DashboardFormtable";
import DashboardInfobox from "components/DashboardInfobox";
import DashboardPagination from "components/DashboardPagination";

import { CloseSVG } from "../../assets/images";

const DashboardPage = () => {
  const [frametwentytwovalue, setFrametwentytwovalue] = React.useState("");
  const dashboardInfoboxPropList = [
    { price: "$2,456", totalsales: "Total Sales" },
    { price: "$3,326", totalsales: "Total Expenses" },
    { price: "5,325", totalsales: "Total Visitors" },
    { price: "1,326", totalsales: "Total Orders" },
  ];

  return (
    <>
      <div className="bg-gray_100 font-poppins h-[2307px] mx-auto pb-1 relative w-full">
        <Sidebar className="!sticky !w-[260px] bg-gray_900_01 flex h-screen md:hidden justify-start left-[0] overflow-auto md:px-5 top-[0]">
          <Menu
            menuItemStyles={{
              button: {
                padding: " 69px",
                margin: " ",
              },
            }}
            className="flex flex-col items-center justify-start pb-[602px] w-full"
          >
            <MenuItem>
              <div className="flex flex-row items-center justify-start md:px-10 sm:px-5">
                <div className="bg-gray_300_01 h-[27px] p-2.5 rounded-[5px] w-[70%]"></div>
              </div>
            </MenuItem>
            <Text
              className="!font-medium mt-[39px] text-white_A700 w-auto"
              size="4xl"
            >
              Dashboard
            </Text>
          </Menu>
        </Sidebar>
        <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full">
          <div className="bg-gray_900_02 flex flex-1 flex-row md:gap-10 items-center justify-between p-[9px] w-full">
            <ul className="flex sm:flex-col flex-row gap-[25px] sm:hidden items-start justify-start ml-[21px] w-auto common-row-list">
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[5px] items-center justify-start">
                    <Img
                      src="images/img_uhomealt.svg"
                      className="h-[18px] w-[18px]"
                      alt="uhomealt"
                    />
                    <Text className="text-white_A700 w-auto" size="3xl">
                      Home
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[5px] items-center justify-start">
                    <Img
                      src="images/img_ulistul.svg"
                      className="h-[18px] w-[18px]"
                      alt="ulistul"
                    />
                    <Text className="text-white_A700 w-auto" size="3xl">
                      Contents
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[5px] items-center justify-start">
                    <Img
                      src="images/img_ulistuialt.svg"
                      className="h-[18px] w-[18px]"
                      alt="ulistuialt"
                    />
                    <Text className="text-white_A700 w-auto" size="3xl">
                      Categories
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[5px] items-center justify-start">
                    <Img
                      src="images/img_ucog.svg"
                      className="h-[18px] w-[18px]"
                      alt="ucog"
                    />
                    <Text className="text-white_A700 w-auto" size="3xl">
                      Settings
                    </Text>
                  </div>
                </a>
              </li>
            </ul>
            <div className="bg-white_A700 flex flex-row gap-[5px] items-center justify-start mr-[21px] pl-[3px] pr-[15px] py-[3px] rounded-[18px] w-auto">
              <Img
                src="images/img_ellipse1.png"
                className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                alt="ellipseOne"
              />
              <Text className="text-gray_900_03 w-auto" size="3xl">
                İsmail İhsan Bülbül
              </Text>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[260px] p-4 w-[82%]">
            <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start ml-3.5 md:ml-[0] w-auto sm:w-full">
              <Text className="text-gray_900_01 w-auto" as="h5" size="6xl">
                Add new post
              </Text>
              <div className="flex flex-row gap-[25px] items-start justify-start w-auto">
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Img
                    src="images/img_uplus.svg"
                    className="h-6 w-6"
                    alt="uplus"
                  />
                  <Text className="text-gray_900_01 w-auto" size="4xl">
                    Add Content
                  </Text>
                </div>
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Img
                    src="images/img_ucog_gray_900_01.svg"
                    className="h-6 w-6"
                    alt="ucog_One"
                  />
                  <Text className="text-gray_900_01 w-auto" size="4xl">
                    Settings
                  </Text>
                </div>
              </div>
            </div>
            <Input
              value={frametwentytwovalue}
              onChange={(e) => setFrametwentytwovalue(e)}
              wrapClassName="flex mr-3.5 w-[350px] md:w-full"
              className="leading-[normal] p-0 placeholder:text-black_900 text-base text-black_900 text-left w-full"
              name="frameTwentyTwo"
              placeholder="Search content.."
              suffix={
                frametwentytwovalue?.length > 0 ? (
                  <CloseSVG
                    className="mt-auto mb-px cursor-pointer ml-[35px]"
                    onClick={() => setFrametwentytwovalue("")}
                    fillColor="#000000"
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                  />
                ) : (
                  <Img
                    src="images/img_search_black_900.svg"
                    className="mt-auto mb-px cursor-pointer ml-[35px]"
                    alt="search"
                  />
                )
              }
              shape="srcRoundedBorder5"
              size="mdSrc"
              variant="srcOutlineBluegray100"
            ></Input>
          </div>
        </header>
        <div className="absolute bottom-[0] flex flex-col gap-[30px] items-center justify-start md:px-5 right-[2%] w-auto">
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1120px] w-full"
            orientation="horizontal"
          >
            {dashboardInfoboxPropList.map((props, index) => (
              <React.Fragment key={`DashboardInfobox${index}`}>
                <DashboardInfobox
                  className="bg-white_A700 flex flex-1 flex-row gap-2.5 items-start justify-start p-5 rounded-[10px] w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div className="bg-white_A700 flex flex-col gap-5 items-start justify-start max-w-[1120px] p-[30px] sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Text className="text-gray_900_01 w-auto" as="h5" size="6xl">
                Form title
              </Text>
              <Text className="!font-light text-gray_900_01 w-auto" size="4xl">
                Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                gravida augue enim.
              </Text>
            </div>
            <Input
              wrapClassName="flex w-full"
              className="leading-[normal] p-0 placeholder:text-pink_900 text-base text-left text-pink_900 w-full"
              name="alertbox"
              placeholder="Senectus malesuada suspendisse bibendum elit amet vitae."
              prefix={
                <Img
                  src="images/img_uinfocircle.svg"
                  className="mt-auto mb-px mr-2.5"
                  alt="u:info-circle"
                />
              }
              shape="RoundedBorder5"
              size="md"
              variant="OutlineRed300"
            ></Input>
            <DashboardFormtable
              className="border border-blue_gray_100 border-solid flex flex-row items-center justify-center rounded-[5px] w-full"
              etiampurusin="Etiam purus in"
              aliquamvelitlac_One="Aliquam velit lacus"
              fermentum_scelerisque_ultricies="Fermentum scelerisque ultricies"
              integersemperpe_One="Integer semper pellentesque"
              ametpretiumeget_One="Amet, pretium eget"
              risusconsequat="Risus consequat sollicitudin"
              curabiturdonec="Curabitur donec duis"
              pellentesqueege_One="Pellentesque egestas placerat"
              nequeturpisenim_One="Neque turpis enim"
              inipsumvolutpat_One="In ipsum volutpat"
              adipiscingodio="Adipiscing odio nulla"
              morbipharetra="Morbi pharetra, accumsan"
              frameSixtySix="Commodo eget scelerisque"
              tortorhabitant="Tortor habitant sit"
              frameSixtyEight="Quam semper quis"
              egestasnonsocii_One="Egestas non sociis"
              frameSeventy="Pellentesque facilisis massa"
              utfeugiategesta_One="Ut feugiat egestas"
              frameSeventyTwo="Pharetra id sit"
              pharetraidsit_One="Pharetra id sit"
              tabletitle="Table Title"
              edit="Edit"
              delete="Delete"
              edit_One="Edit"
              delete_One="Delete"
              edit_Two="Edit"
              delete_Two="Delete"
              edit_Three="Edit"
              delete_Three="Delete"
              edit_Four="Edit"
              delete_Four="Delete"
              edit_Five="Edit"
              delete_Five="Delete"
              edit_Six="Edit"
              delete_Six="Delete"
              edit_Seven="Edit"
              delete_Seven="Delete"
              edit_Eight="Edit"
              delete_Eight="Delete"
            />
            <DashboardPagination className="flex flex-row gap-[5px] items-center justify-center w-full" />
          </div>
          <div className="bg-white_A700 flex flex-col gap-5 items-start justify-start max-w-[1120px] p-[30px] sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Text className="text-gray_900_01 w-auto" as="h5" size="6xl">
                Form title
              </Text>
              <Text className="!font-light text-gray_900_01 w-auto" size="4xl">
                Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                gravida augue enim.
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[101px]"
                leftIcon={
                  <div className="h-[25px] mb-px mr-[5px] w-[25px] rounded-[3px]">
                    <Img
                      src="images/img_minimize.svg"
                      className="rounded-[3px]"
                      alt="minimize"
                    />
                  </div>
                }
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineOrange800"
              >
                <div className="leading-[normal] text-base text-gray_900_01 text-left">
                  English
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[101px]"
                leftIcon={
                  <div className="h-[25px] mr-[5px] w-[25px] rounded-[3px]">
                    <Img
                      src="images/img_group.svg"
                      className="rounded-[3px]"
                      alt="Group"
                    />
                  </div>
                }
                shape="RoundedBorder5"
                size="md"
                variant="OutlineBluegray100"
              >
                <div className="leading-[normal] text-base text-gray_900_01 text-left">
                  Turkish
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
              <Text className="!font-light text-gray_900_01 w-auto" size="3xl">
                Label title
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                name="frameTwentyEight"
                placeholder="Placeholder content"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="flex w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_One"
                  placeholder="Chose"
                  suffix={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="mt-auto mb-px ml-[35px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Two"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Three"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Four"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Five"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
              <Text className="!font-light text-gray_900_01 w-auto" size="3xl">
                Label Title
              </Text>
              <TextArea
                className="font-light gap-2.5 h-[165px] leading-[normal] text-base placeholder:text-gray_900_01 text-gray_900_01 text-left w-full"
                name="frameTwentyEight_Six"
                placeholder="Placeholder content"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineBluegray100"
              ></TextArea>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1120px] w-full">
            <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text className="text-gray_900_01 w-auto" as="h5" size="6xl">
                  Form title
                </Text>
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="4xl"
                >
                  Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                  gravida augue enim.
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Seven"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="flex w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Eight"
                  placeholder="Chose"
                  suffix={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="mt-auto mb-px ml-[35px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                  <Text
                    className="!font-light text-gray_900_01 w-auto"
                    size="3xl"
                  >
                    Label title
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                    name="frameTwentyEight_Nine"
                    placeholder="Placeholder content"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-[5px] items-start justify-start w-full">
                  <Text
                    className="!font-light text-gray_900_01 w-auto"
                    size="3xl"
                  >
                    Label title
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                    name="frameTwentyEight_Ten"
                    placeholder="Placeholder content"
                    shape="RoundedBorder5"
                    size="sm"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label Title
                </Text>
                <TextArea
                  className="font-light gap-2.5 h-[165px] leading-[normal] text-base placeholder:text-gray_900_01 text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Eleven"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></TextArea>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-[310px]">
              <div className="flex flex-row items-start justify-start w-auto">
                <Text className="text-gray_900_01 w-auto" as="h5" size="6xl">
                  Form title
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Twelve"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label title
                </Text>
                <Input
                  wrapClassName="flex w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Thirteen"
                  placeholder="Chose"
                  suffix={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="mt-auto mb-px ml-[35px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Label Title
                </Text>
                <TextArea
                  className="font-light gap-2.5 h-[165px] leading-[normal] text-base placeholder:text-gray_900_01 text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_Fourteen"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] text-base text-center text-white_A700 w-full"
                shape="RoundedBorder5"
                size="lg"
                variant="FillBlueA700"
              >
                Button title
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
