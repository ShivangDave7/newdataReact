import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FavoriteMenuPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const sideBarMenu = [
    {
      icon: (
        <Img
          src="images/img_deliveryscooter.svg"
          className="h-10 w-10"
          alt="deliveryscooter"
        />
      ),
      label: "Food Order",
    },
    {
      icon: (
        <Img src="images/img_review.svg" className="h-10 w-10" alt="review" />
      ),
      label: "Favorite",
      href: "/favoritemenu",
      active: window.location.pathname === "/favoritemenu",
    },
    {
      icon: (
        <Img
          src="images/img_orderdiscussion.svg"
          className="h-10 mb-[5px] w-10"
          alt="orderdiscussion"
        />
      ),
      label: "Message",
    },
    {
      icon: (
        <Img
          src="images/img_music.svg"
          className="h-10 mb-[3px] w-10"
          alt="music"
        />
      ),
      label: "Order History",
    },
    {
      icon: <Img src="images/img_bill.svg" className="h-10 w-10" alt="bill" />,
      label: "Bills",
    },
    {
      icon: (
        <Img
          src="images/img_setting.svg"
          className="h-10 mb-1 w-10"
          alt="setting"
        />
      ),
      label: "Setting",
    },
  ];

  return (
    <>
      <div className="bg-gray_100 font-poppins h-[1225px] mx-auto pr-10 sm:pr-5 relative w-full">
        <header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[12%] w-full">
          <div className="flex flex-row gap-6 h-16 md:h-auto items-center justify-start md:mt-0 mt-[30px] sm:px-5 px-6 py-4 rounded-[16px] shadow-bs8 w-[252px]">
            <Img
              src="images/img_restaurantlocation.svg"
              className="h-10 w-10"
              alt="restaurantlocat"
            />
            <Text className="text-gray_500_01 w-auto" size="5xl">
              Dashboard
            </Text>
          </div>
          <Input
            value={searchbarvalue}
            onChange={(e) => setSearchbarvalue(e)}
            wrapClassName="flex md:flex-1 gap-2 mb-[34px] md:ml-[0] ml-[87px] w-[41%] md:w-full"
            className="leading-[normal] p-0 placeholder:text-gray_500_01 text-gray_500_01 text-left text-lg w-full"
            name="searchbar"
            placeholder="What do you want eat today..."
            prefix={
              <Img
                src="images/img_search_amber_600.svg"
                className="cursor-pointer mr-2 my-auto"
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
            shape="srcRoundedBorder15"
            size="lgSrc"
            variant="srcFillWhiteA700"
          ></Input>
          <Img
            src="images/img_button.svg"
            className="h-[60px] mb-[34px] md:ml-[0] ml-[612px] w-36"
            alt="button"
          />
        </header>
        <div className="absolute flex sm:flex-col flex-row md:gap-10 items-start justify-between md:px-5 right-[3%] top-[4%] w-full">
          <Text className="text-blue_gray_900" as="h1" size="9xl">
            Favorite Menu
          </Text>
          <Img src="images/img_menu.svg" className="h-[60px]" alt="menu" />
        </div>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[345px] bg-white_A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]"
        >
          <Text
            className="!font-bold md:ml-[0] mt-[55px] mx-[88px] text-blue_gray_900"
            as="h1"
            size="11xl"
          >
            <span className="md:text-[38px] sm:text-4xl text-blue_gray_900 font-poppins text-left text-[40px]">
              GoMeal
            </span>
            <span className="md:text-[38px] sm:text-4xl text-amber_600 font-poppins text-left text-[40px]">
              .
            </span>
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "15px 15px 15px 23px",
                gap: "24px",
                "margin-top": "15px",
                color: "#a098ae",
                "font-weight": 500,
                "font-size": "18px",
                "border-radius": "20px",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  "background-color": "#f8b602ff !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mt-[120px] pt-[22px] md:px-10 sm:px-5 px-[46px] w-[74%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          {!collapsed && (
            <div className="h-[202px] md:h-[489px] mb-[209px] md:ml-[0] mt-[78px] mx-[46px] relative w-[74%]">
              <div className="bg-gradient1  h-[202px] m-auto rounded-[32px] shadow-bs9 w-[61%]"></div>
              <div className="absolute bg-gradient1  flex flex-row h-full inset-[0] items-center justify-center m-auto rounded-[16px] w-full">
                <div
                  className="bg-cover bg-no-repeat md:h-[118px] sm:h-[156px] h-[202px] p-3.5 relative w-full"
                  style={{ backgroundImage: "url('images/img_group2.png')" }}
                >
                  <div className="flex flex-col md:gap-10 gap-[78px] h-full justify-start ml-auto mt-[9px] w-[82%]">
                    <Img
                      src="images/img_grid.svg"
                      className="h-[29px] md:ml-[0] ml-[184px]"
                      alt="grid"
                    />
                    <Button
                      className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[107px] mr-[99px] text-blue_gray_900 text-center text-sm"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillWhiteA700"
                    >
                      Upgrade
                    </Button>
                  </div>
                  <Text
                    className="!font-bold absolute inset-x-[0] mx-auto text-white_A700 top-[16%]"
                    as="h6"
                    size="5xl"
                  >
                    <>
                      Upgrade your
                      <br />
                      Account to Get Free Voucher
                    </>
                  </Text>
                </div>
              </div>
            </div>
          )}
        </Sidebar>
        <div className="absolute bottom-[3%] flex sm:flex-col flex-row md:gap-10 items-center justify-between md:px-5 right-[3%] w-full">
          <Text className="text-blue_gray_900" size="3xl">
            <span className="text-gray_500_01 font-poppins text-left text-sm font-normal">
              Showing{" "}
            </span>
            <span className="text-blue_gray_900 font-poppins text-left text-sm font-normal">
              1-5
            </span>
            <span className="text-blue_gray_900 font-poppins text-left text-sm font-normal">
              {" "}
            </span>
            <span className="text-gray_500_01 font-poppins text-left text-sm font-normal">
              from
            </span>
            <span className="text-blue_gray_900 font-poppins text-left text-sm font-normal">
              {" "}
            </span>
            <span className="text-blue_gray_900 font-poppins text-left text-sm font-normal">
              100
            </span>
            <span className="text-blue_gray_900 font-poppins text-left text-sm font-normal">
              {" "}
            </span>
            <span className="text-gray_500_01 font-poppins text-left text-sm font-normal">
              data
            </span>
          </Text>
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Img
              src="images/img_arrowleft_gray_500_01.svg"
              className="h-8 w-8"
              alt="arrowleft"
            />
            <Button
              className="cursor-pointer h-[50px] leading-[normal] text-amber_600 text-center text-lg w-[50px]"
              shape="RoundedBorder16"
              size="xl"
              variant="FillAmber60063"
            >
              1
            </Button>
            <Button
              className="cursor-pointer h-[51px] leading-[normal] text-center text-lg text-white_A700 w-[51px]"
              shape="RoundedBorder16"
              size="xl"
              variant="FillAmber600"
            >
              2
            </Button>
            <Button
              className="cursor-pointer h-[51px] leading-[normal] text-amber_600 text-center text-lg w-[51px]"
              shape="RoundedBorder16"
              size="xl"
              variant="FillAmber60063"
            >
              3
            </Button>
            <Img src="images/img_info.svg" className="h-8 w-8" alt="info" />
          </div>
        </div>
        <div className="absolute bottom-[11%] flex flex-row items-center justify-center md:px-5 right-[3%] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Fish Burger
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-[5px] w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1_16x16.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-4 w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Beef Burger
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-1.5 w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1_1.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Cheese Burger
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-[5px] w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1_2.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Double Burger
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-[5px] w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1_3.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-4 w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Pepperoni Pizza
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-1.5 w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1_4.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Japanese Ramen
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-[5px] w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1_5.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Fried Rice
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-[7px] w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                  <div className="flex flex-row gap-[34px] items-start justify-end w-[81%] md:w-full">
                    <Img
                      src="images/img_image.svg"
                      className="h-[180px] w-[180px]"
                      alt="image"
                    />
                    <Img
                      src="images/img_love.svg"
                      className="h-6 w-6"
                      alt="love"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-blue_gray_900"
                      size="5xl"
                    >
                      Fast Food Resto
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[3px] mt-[7px] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          src="images/img_star1_6.svg"
                          className="h-4 w-4"
                          alt="starOne"
                        />
                        <Text className="text-gray_500_01" size="3xl">
                          5.0
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Text className="text-gray_500_01 w-auto" size="3xl">
                          1k+ Reviews
                        </Text>
                      </div>
                      <div className="bg-gray_400 h-1 rounded-[50%] w-1"></div>
                      <Text className="text-gray_500_01 w-auto" size="3xl">
                        2.97km
                      </Text>
                    </div>
                    <Line className="bg-gray_300 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-blue_gray_900" size="5xl">
                          Vegan Pizza
                        </Text>
                        <Text className="text-red_400" as="h4" size="7xl">
                          <span className="md:text-[22px] sm:text-xl text-amber_600 font-poppins text-left text-2xl font-bold">
                            $
                          </span>
                          <span className="md:text-[22px] sm:text-xl text-blue_gray_900 font-poppins text-left text-2xl font-bold">
                            5.59
                          </span>
                        </Text>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center my-[5px] w-12"
                        shape="icbRoundedBorder16"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="h-4"
                          alt="plus"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteMenuPage;
