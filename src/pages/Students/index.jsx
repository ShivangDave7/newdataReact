import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  ReactTable,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const StudentsPage = () => {
  const tableData = React.useRef([
    {
      rowname: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Mana William ",
      city: "Jakarta",
      contactOne: "images/img_email.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Tony Soap",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "James Soap",
      city: "Jakarta",
      contactOne: "images/img_email.svg",
      grade: "VII B",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Karen Hope",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Justin Hope",
      city: "Jakarta",
      contactOne: "images/img_email.svg",
      grade: "VII C",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Jordan Nico",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Amanda Nico",
      city: "Jakarta",
      contactOne: "images/img_email.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Nadila Adja",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Jack Adja",
      city: "Jakarta",
      contactOne: "images/img_email.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      rowname: "Johnny Ahmad",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Danny Ahmad",
      city: "Jakarta",
      contactOne: "images/img_email.svg",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="flex flex-row gap-[30px] items-center justify-start p-8 sm:px-5">
            <Button
              className="flex h-6 items-center justify-center my-3 w-6"
              shape="icbRoundedBorder4"
              size="smIcn"
              variant="icbFillIndigo500"
            >
              <Img src="images/img_checkedbox.svg" alt="checkedbox" />
            </Button>
            <div className="flex flex-row gap-4 items-center justify-center w-[72%]">
              <div className="bg-indigo_100 h-12 rounded-[50%] w-12"></div>
              <Text className="!font-bold text-indigo_900" as="h6" size="5xl">
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[382px] sm:px-5 px-8 sm:w-full">
            <CheckBox
              className="font-semibold leading-[normal] sm:pl-5 text-indigo_900 text-left text-sm"
              inputClassName="h-6 mr-[5px] w-6"
              name="name"
              id="name"
              label="Name"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineIndigo100"
            ></CheckBox>
          </div>
        ),
      }),
      tableColumnHelper.accessor("id", {
        cell: (info) => (
          <Text
            className="!font-semibold py-[35px] text-indigo_500"
            as="h6"
            size="5xl"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="!font-semibold min-w-[176px] text-indigo_900"
            size="3xl"
          >
            ID
          </Text>
        ),
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => (
          <Text className="py-[35px] text-gray_500_01" size="3xl">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="!font-semibold min-w-[190px] text-indigo_900"
            size="3xl"
          >
            Date
          </Text>
        ),
      }),
      tableColumnHelper.accessor("parentname", {
        cell: (info) => (
          <Text className="py-[35px] text-indigo_900" size="3xl">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="!font-semibold min-w-[188px] text-indigo_900"
            size="3xl"
          >
            Parent Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("city", {
        cell: (info) => (
          <Text className="py-[35px] text-indigo_900" size="3xl">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="!font-semibold min-w-[142px] text-indigo_900"
            size="3xl"
          >
            City
          </Text>
        ),
      }),
      tableColumnHelper.accessor("contactOne", {
        cell: (info) => (
          <div className="flex flex-row gap-4 items-center justify-center sm:pr-5 pr-9 py-9">
            <Button
              className="flex h-10 items-center justify-center rounded-[50%] w-10"
              size="mdIcn"
              variant="icbFillIndigo50063"
            >
              <Img src="images/img_call.svg" className="h-6" alt="call" />
            </Button>
            <Button
              className="flex h-10 items-center justify-center mr-[52px] rounded-[50%] w-10"
              size="mdIcn"
              variant="icbFillIndigo50063"
            >
              <Img src={info?.getValue()} className="h-6" alt="email_One" />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="!font-semibold min-w-[184px] pl-[3px] text-center text-indigo_900"
            size="3xl"
          >
            Contact
          </Text>
        ),
      }),
      tableColumnHelper.accessor("grade", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-9 py-9">
            <Button
              className="cursor-pointer leading-[normal] min-w-[80px] mr-[19px] text-center text-sm text-white_A700"
              shape="CircleBorder20"
              size="lg"
              variant="FillDeeporange300"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="!font-semibold min-w-[135px] pl-0.5 text-center text-indigo_900"
            size="3xl"
          >
            Grade
          </Text>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-[22px] sm:px-5">
            <Img
              src={info?.getValue()}
              className="h-6 my-[22px] w-6"
              alt="dots"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="!font-semibold min-w-[78px] text-indigo_900"
            size="3xl"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
    {
      icon: (
        <Img src="images/img_student.svg" className="h-10 w-10" alt="student" />
      ),
      label: "Students",
      href: "/students",
      active: window.location.pathname === "/students",
    },
    {
      icon: (
        <Img src="images/img_teacher.svg" className="h-10 w-10" alt="teacher" />
      ),
      label: "Teachers",
    },
    {
      icon: (
        <Img
          src="images/img_calendar.svg"
          className="h-10 w-10"
          alt="calendar"
        />
      ),
      label: "Event",
    },
    {
      icon: <Img src="images/img_map.svg" className="h-10 w-10" alt="map" />,
      label: "Finance",
    },
    {
      icon: <Img src="images/img_food.svg" className="h-10 w-10" alt="food" />,
      label: "Food",
    },
    {
      icon: <Img src="images/img_user.svg" className="h-10 w-10" alt="user" />,
      label: "User",
    },
    {
      icon: <Img src="images/img_chat.svg" className="h-10 w-10" alt="chat" />,
      label: "Chat",
    },
    {
      icon: (
        <Img
          src="images/img_activity.svg"
          className="h-10 mb-[3px] w-10"
          alt="activity"
        />
      ),
      label: "Lastest Activity",
    },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100_01 flex font-poppins mx-auto md:pr-10 sm:pr-5 pr-[50px] relative w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[345px] bg-indigo_500 flex h-screen md:hidden justify-start my-auto overflow-auto md:px-5 top-[0]"
        >
          <Menu
            menuItemStyles={{
              button: {
                padding: "15px 15px 15px 23px",
                gap: "24px",
                "margin-top": "8px",
                color: "#c1bbeb",
                "font-weight": 500,
                "font-size": "18px",
                "border-top-left-radius": "40px",
                "border-bottom-left-radius": "40px",
                [`&:hover, &.ps-active`]: {
                  color: "#4d44b5",
                  "background-color": "#f3f4ffff !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mt-[199px] md:pl-10 sm:pl-5 pl-[46px] pt-[22px] w-[87%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          {!collapsed && (
            <div className="flex flex-col gap-[15px] items-start justify-start mb-[172px] md:ml-[0] ml-[34px] mr-[19px] mt-[101px]">
              <Text className="!font-bold text-white_A700" size="3xl">
                Akademi - School Admission Dashboard
              </Text>
              <Text className="text-white_A700" size="3xl">
                Made with ♥ by Peterdraw
              </Text>
            </div>
          )}
        </Sidebar>
        <div className="flex flex-row items-center justify-center mb-10 ml-[undefinedpx] mt-auto w-full z-[1]">
          <div className="bg-white_A700 flex flex-col gap-8 items-center justify-start py-8 rounded-[20px] w-full">
            <div className="h-[726px] relative w-full">
              <div className="overflow-auto absolute inset-[0] justify-center m-auto w-full">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={"border-b-[5px] border-indigo_500"}
                  headerClass=""
                />
              </div>
              <Img
                src="images/img_border.svg"
                className="h-[566px] mt-12 mx-auto"
                alt="border"
              />
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
              <Text className="text-indigo_900" size="3xl">
                <span className="text-gray_500_01 font-poppins text-left text-sm font-normal">
                  Showing{" "}
                </span>
                <span className="text-indigo_900 font-poppins text-left text-sm font-normal">
                  1-5
                </span>
                <span className="text-indigo_900 font-poppins text-left text-sm font-normal">
                  {" "}
                </span>
                <span className="text-gray_500_01 font-poppins text-left text-sm font-normal">
                  from
                </span>
                <span className="text-indigo_900 font-poppins text-left text-sm font-normal">
                  {" "}
                  100{" "}
                </span>
                <span className="text-gray_500_01 font-poppins text-left text-sm font-normal">
                  data
                </span>
              </Text>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img
                  src="images/img_arrowleft_gray_500_01_32x32.svg"
                  className="h-8 w-8"
                  alt="arrowleft"
                />
                <Text
                  className="!font-normal bg-indigo_500 flex h-[50px] items-center justify-center rounded-[50%] text-center text-shadow-ts text-white_A700 w-[50px]"
                  size="5xl"
                >
                  1
                </Text>
                <Text
                  className="!font-normal border-2 border-gray_500_01 border-solid flex h-[51px] items-center justify-center rounded-[25px] text-center text-gray_500_01 w-[51px]"
                  size="5xl"
                >
                  2
                </Text>
                <Text
                  className="!font-normal border-2 border-gray_500_01 border-solid flex h-[51px] items-center justify-center rounded-[25px] text-center text-gray_500_01 w-[51px]"
                  size="5xl"
                >
                  3
                </Text>
                <Img src="images/img_play.svg" className="h-8 w-8" alt="play" />
              </div>
            </div>
          </div>
        </div>
        <header className="flex flex-col items-center justify-center ml-[-299px] mr-auto mt-12 w-full z-[1]">
          <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="h-[54px] relative w-[3%] md:w-full">
              <div className="absolute bg-deep_orange_300 h-12 inset-[0] justify-center m-auto rounded-[16px] w-12"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-white_A700 w-max"
                as="h1"
                size="9xl"
              >
                A
              </Text>
            </div>
            <Text className="ml-4 md:ml-[0] text-white_A700" as="h1" size="9xl">
              Akademi
            </Text>
            <Text
              className="md:ml-[0] ml-[116px] text-indigo_900"
              as="h1"
              size="9xl"
            >
              Students
            </Text>
            <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[995px] w-[18%] md:w-full">
              <Img
                src="images/img_lightbulb.svg"
                className="h-[60px] w-[60px]"
                alt="lightbulb"
              />
              <Button
                className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                size="lgIcn"
                variant="icbOutlinePinkA7000c"
              >
                <Img src="images/img_gear.svg" className="h-8" alt="gear" />
              </Button>
              <div className="flex flex-col items-end justify-start">
                <Text className="!font-semibold text-indigo_900" size="3xl">
                  Nabila A.
                </Text>
                <Text className="mt-1 text-gray_500_01" size="3xl">
                  Admin
                </Text>
              </div>
              <div className="bg-indigo_100 h-[60px] rounded-[50%] w-[60px]"></div>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row md:gap-[50px] items-start justify-between mt-10 w-full">
            <div className="flex flex-row gap-6 h-16 md:h-auto items-center justify-start sm:px-5 px-6 py-4 rounded-bl-[40px] rounded-tl-[40px] shadow-bs4 w-[299px]">
              <Img src="images/img_home.svg" className="h-10 w-10" alt="home" />
              <Text className="text-indigo_100 w-auto" size="5xl">
                Dashboard
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-[81%] md:w-full">
              <Input
                value={searchbarvalue}
                onChange={(e) => setSearchbarvalue(e)}
                wrapClassName="flex w-[24%] md:w-full"
                className="leading-[normal] p-0 placeholder:text-gray_500_01 text-gray_500_01 text-left text-lg w-full"
                name="searchbar"
                placeholder="Search here..."
                prefix={
                  <Img
                    src="images/img_search_indigo_500.svg"
                    className="cursor-pointer mr-4 my-auto"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#a098ae"
                    className="cursor-pointer my-auto"
                    onClick={() => setSearchbarvalue("")}
                    style={{
                      visibility:
                        searchbarvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={32}
                    width={32}
                    viewBox="0 0 32 32"
                  />
                }
                shape="srcCircleBorder30"
                size="lgSrc"
                variant="srcFillWhiteA700"
              ></Input>
              <div className="border-2 border-indigo_500 border-solid flex flex-row h-[60px] md:h-auto items-center justify-center md:ml-[0] ml-[687px] md:px-10 sm:px-5 px-[43px] py-4 rounded-[30px] shadow-bs4 w-[207px]">
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Text
                    className="!font-normal text-indigo_500 w-auto"
                    size="5xl"
                  >
                    Newest
                  </Text>
                  <Img
                    src="images/img_dropdown.svg"
                    className="h-8 w-8"
                    alt="dropdown"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[207px] ml-6 md:ml-[0]"
                leftIcon={
                  <div className="h-4 mr-4 w-4 bg-white_A700 my-[5px]">
                    <Img
                      src="images/img_minimize_white_a700.svg"
                      alt="minimize"
                    />
                  </div>
                }
                shape="CircleBorder30"
                size="2xl"
                variant="OutlinePinkA7000c"
              >
                <div className="leading-[normal] text-left text-lg text-white_A700">
                  New Student
                </div>
              </Button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default StudentsPage;
