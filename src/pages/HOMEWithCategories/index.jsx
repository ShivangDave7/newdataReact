import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import {
  Button,
  Img,
  Input,
  List,
  Radio,
  RadioGroup,
  RatingBar,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const collapsedFiltersOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HOMEWithCategoriesPage = () => {
  const [grouptwentysevenvalue, setGrouptwentysevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <header className="bg-white_A700 border border-black_900_19 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 rounded-bl-[5px] rounded-br-[5px] w-full">
            <Button
              className="cursor-pointer font-extrabold min-w-[213px] ml-8 md:ml-[0] md:mt-0 my-[11px] text-black_900_7f text-center text-lg"
              shape="RoundedBorder8"
              size="2xl"
              variant="FillGray40059"
            >
              LOGO
            </Button>
            <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-center md:ml-[0] ml-[49px] md:mt-0 my-[29px] w-2/5 md:w-full common-row-list">
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[7px] items-end justify-between">
                    <Text className="text-blue_700 text-center" size="xl">
                      Review
                    </Text>
                    <Img
                      src="images/img_arrowdown_blue_700.svg"
                      className="h-[5px] mb-1 mt-2"
                      alt="arrowdown"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1.5 items-end justify-center ml-[45px]">
                    <Text
                      className="text-black_900 hover:text-blue_700 text-center"
                      size="xl"
                    >
                      Tools
                    </Text>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-[5px] mb-1 mt-[7px]"
                      alt="arrowdown_One"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-2 items-end justify-center ml-[46px]">
                    <Text
                      className="text-black_900 hover:text-blue_700 text-center"
                      size="xl"
                    >
                      Resources
                    </Text>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-[5px] mb-1 mt-[7px]"
                      alt="arrowdown_Two"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[47px] text-black_900_a7 hover:text-blue_700 text-center"
                >
                  <Text size="xl">Write Review</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row items-start justify-evenly ml-[53px]">
                    <Img
                      src="images/img_vector.png"
                      className="h-3.5 md:h-auto object-cover"
                      alt="vector"
                    />
                    <Text
                      className="bg-clip-text bg-gradient  hover:text-blue_700 text-center text-transparent"
                      size="xl"
                    >
                      Hosting Coupons
                    </Text>
                  </div>
                </a>
              </li>
            </ul>
            <Input
              value={grouptwentysevenvalue}
              onChange={(e) => setGrouptwentysevenvalue(e)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[94px] md:mt-0 my-6 w-1/5 md:w-full"
              className="p-0 placeholder:text-black_900_7f text-black_900_7f text-center text-xs w-full"
              name="groupTwentySeven"
              placeholder="Search For a specific host"
              suffix={
                <div className="h-[15px] mt-px mb-0.5 ml-[35px] w-[15px] bg-black_900_99">
                  {grouptwentysevenvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer my-auto"
                      onClick={() => setGrouptwentysevenvalue("")}
                      fillColor="#7f000000"
                      height={15}
                      width={15}
                      viewBox="0 0 15 15"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer my-auto"
                      alt="search"
                    />
                  )}
                </div>
              }
              shape="srcRoundedBorder15"
              size="smSrc"
              variant="srcFillGray200"
            ></Input>
            <div className="flex md:flex-1 flex-row font-opensans items-start justify-start ml-7 md:ml-[0] mr-[61px] md:mt-0 my-[29px] w-[7%] md:w-full">
              <Text
                className="!font-semibold text-black_900_d8 text-center"
                size="3xl"
              >
                USD
              </Text>
              <Img
                src="images/img_arrowdown_black_900.svg"
                className="h-1.5 ml-[3px] mt-2"
                alt="arrowdown_Three"
              />
              <Text
                className="!font-semibold ml-[27px] text-black_900_d8 text-center"
                size="3xl"
              >
                EN
              </Text>
              <Img
                src="images/img_arrowdown_black_900.svg"
                className="h-1.5 ml-[3px] mt-2"
                alt="arrowdown_Four"
              />
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-7xl mt-[60px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/4 md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-blue_900 border border-blue_200 border-solid flex flex-row font-poppins gap-[53px] items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="h-[17px] ml-[17px]"
                    alt="arrowleft"
                  />
                  <Text
                    className="!font-semibold text-center text-white_A700"
                    as="h4"
                    size="7xl"
                  >
                    Categories
                  </Text>
                </div>
                <Text
                  className="font-inter ml-0.5 md:ml-[0] mt-[49px] text-gray_900 tracking-[0.44px]"
                  size="4xl"
                >
                  Popular Hosting Categories
                </Text>
                <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[22px] mt-10 w-[81%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row gap-3 items-start justify-start ml-7 md:ml-[0] w-[47%] md:w-full">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-3"
                        alt="arrowright"
                      />
                      <Text
                        className="text-gray_900 tracking-[0.35px]"
                        size="4xl"
                      >
                        VPS Hosting
                      </Text>
                    </div>
                    <Accordion
                      preExpanded={[0]}
                      className="flex flex-col gap-px mt-3.5 w-full"
                    >
                      {[...Array(4)].map((item, index) => (
                        <AccordionItem uuid={index} key={Math.random()}>
                          <div className="flex flex-col items-center justify-start w-full">
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {({ expanded }) => (
                                    <div className="bg-gray_50 flex flex-row items-center justify-between p-[9px] rounded w-[99%] md:w-full">
                                      {expanded && (
                                        <Img
                                          src="images/img_arrowright_blue_700_12x7.svg"
                                          className="h-3 ml-[13px]"
                                          alt="arrowright_One"
                                        />
                                      )}
                                      {!expanded && (
                                        <Img
                                          src="images/img_arrowright_blue_700_12x7.svg"
                                          className="h-3 ml-[21px]"
                                          alt="arrowright_Three"
                                        />
                                      )}
                                      <Text
                                        className="ml-[17px] text-gray_900 tracking-[0.35px]"
                                        size="4xl"
                                      >
                                        Cloud Hosting
                                      </Text>
                                    </div>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="relative w-full ">
                              <div className="h-14 mx-auto relative w-full">
                                <div className="absolute bg-gray_50 flex flex-row h-full inset-[0] items-center justify-center m-auto p-[15px] rounded w-[99%]">
                                  <Img
                                    src="images/img_arrowright_blue_700.svg"
                                    className="h-3 mb-3 ml-3"
                                    alt="arrowright_Two"
                                  />
                                </div>
                                <Text
                                  className="absolute right-[0] text-gray_900 top-[20%] tracking-[0.44px]"
                                  size="4xl"
                                >
                                  Dedicated Server Hosting
                                </Text>
                              </div>
                            </AccordionItemPanel>
                          </div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="flex flex-row font-roboto gap-[18px] items-center justify-start md:ml-[0] ml-[71px] mt-[11px] w-[34%] md:w-full">
                      <Text
                        className="!font-bold capitalize text-blue_700 text-center tracking-[0.75px]"
                        size="3xl"
                      >
                        Expand
                      </Text>
                      <Img
                        src="images/img_arrowright_blue_a400.svg"
                        className="h-4 w-4"
                        alt="arrowright_Six"
                      />
                    </div>
                  </div>
                </div>
                <SelectBox
                  className="font-roboto mt-[43px] text-base text-gray_900 text-left tracking-[0.44px] w-full"
                  placeholderClassName="text-gray_900"
                  indicator={
                    <Img
                      src="images/img_arrowright_blue_700_12x7.svg"
                      className="h-[7px] mr-[0] w-3"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                  isSearchable={false}
                  placeholder="Collapsed filters"
                  shape="RoundedBorder8"
                  isMulti={false}
                  options={collapsedFiltersOptionsList}
                  name="groupTwentyFour"
                  variant="OutlineBlue700"
                />
                <Text
                  className="font-inter mt-[50px] text-gray_900 tracking-[0.44px]"
                  size="4xl"
                >
                  Refine your results
                </Text>
                <div className="flex flex-col font-inter items-start justify-start md:ml-[0] ml-[22px] mt-[49px] w-[90%] md:w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      src="images/img_locationonblack24dp.svg"
                      className="h-5 w-5"
                      alt="locationonblack"
                    />
                    <Text
                      className="ml-0.5 text-gray_900 tracking-[0.35px]"
                      size="4xl"
                    >
                      Server Location
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-[7px] ml-[120px]"
                      alt="arrowup"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[25px] w-full">
                    <Img
                      src="images/img_attachmoneyblack24dp.svg"
                      className="h-5 w-5"
                      alt="attachmoneyblac"
                    />
                    <Text
                      className="ml-0.5 text-gray_900 tracking-[0.35px]"
                      size="4xl"
                    >
                      Payment type: Any
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-[7px] ml-[95px] mt-[9px]"
                      alt="arrowup_One"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[21px] w-full">
                    <Img
                      src="images/img_sortblack24dp.svg"
                      className="h-5 w-5"
                      alt="sortblack24dp"
                    />
                    <Text
                      className="!font-medium ml-0.5 text-gray_900 tracking-[0.35px]"
                      size="4xl"
                    >
                      Sort by
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-[7px] ml-[185px] mt-1"
                      alt="arrowup_Two"
                    />
                  </div>
                  <RadioGroup
                    className="flex flex-col md:ml-[0] ml-[50px] mt-6 w-[71%]"
                    name="radiogroupcaptionone"
                  >
                    <Radio
                      value="Relevancy"
                      className="sm:pr-5 text-base text-gray_900 text-left tracking-[0.44px]"
                      inputClassName="h-[17px] mr-[5px] w-[17px]"
                      checked={false}
                      name="radiogroupcaptionone"
                      label="Relevancy"
                      id="Relevancy"
                      variant="OutlineGray400"
                    ></Radio>
                    <Radio
                      value="Popularity"
                      className="mt-[23px] sm:pr-5 text-base text-gray_900 text-left tracking-[0.44px]"
                      inputClassName="h-[17px] mr-[5px] w-[17px]"
                      checked={false}
                      name="radiogroupcaptionone"
                      label="Popularity"
                      id="Popularity"
                      size="sm"
                      variant="OutlineGray400"
                    ></Radio>
                    <Radio
                      value="UserRatings"
                      className="mt-6 sm:pr-5 text-base text-gray_900 text-left tracking-[0.44px]"
                      inputClassName="h-[17px] mr-[5px] w-[17px]"
                      checked={false}
                      name="radiogroupcaptionone"
                      label="User Ratings"
                      id="UserRatings"
                      variant="OutlineGray400"
                    ></Radio>
                    <Radio
                      value="Recommendation"
                      className="mt-[22px] sm:pr-5 text-base text-gray_900 text-left tracking-[0.44px]"
                      inputClassName="h-[17px] mr-[5px] w-[17px]"
                      checked={false}
                      name="radiogroupcaptionone"
                      label="Recommendation"
                      id="Recommendation"
                      variant="OutlineGray400"
                    ></Radio>
                    <Radio
                      value="PriceLowHigh"
                      className="mt-[25px] sm:pr-5 text-base text-gray_900 text-left tracking-[0.44px]"
                      inputClassName="h-[17px] mr-[5px] w-[17px]"
                      checked={false}
                      name="radiogroupcaptionone"
                      label="Price Low  High"
                      id="PriceLowHigh"
                      variant="OutlineGray400"
                    ></Radio>
                  </RadioGroup>
                  <div className="flex flex-row gap-[35px] items-start justify-end md:ml-[0] ml-[50px] mt-[23px] w-[71%] md:w-full">
                    <div className="flex flex-row items-center justify-evenly w-[74%]">
                      <Text
                        className="text-gray_900 tracking-[0.44px]"
                        size="4xl"
                      >
                        Price: High → Low
                      </Text>
                    </div>
                    <div className="border-2 border-blue_700 border-solid flex flex-col h-[17px] items-center justify-start p-1 rounded-lg w-[17px]">
                      <div className="bg-blue_700 h-[9px] rounded w-[9px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[70%] md:w-full">
              <div className="h-64 md:h-[305px] relative w-full">
                <Img
                  src="images/img_rectangle15.png"
                  className="h-64 m-auto object-cover rounded-[5px] w-full"
                  alt="rectangleFifteen"
                />
                <div className="absolute flex md:flex-col flex-row gap-[41px] h-max inset-[0] items-start justify-center m-auto w-[89%]">
                  <div className="flex flex-row items-center justify-evenly md:mt-0 mt-[76px] w-[68%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="font-poppins sm:text-[27.55px] md:text-[29.55px] text-[31.55px] text-white_A700"
                        as="h3"
                        size="8xl"
                      >
                        Best Web Hosting Services of 2021
                      </Text>
                      <Text
                        className="font-opensans ml-0.5 md:ml-[0] text-[8.38px] text-center text-white_A700"
                        size="s"
                      >
                        75,145 Authentic User reviews by paying customers on
                        4,634 Different Hosting Services.
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_illustration.svg"
                    className="h-[203px]"
                    alt="illustration"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[107px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[104px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center p-[11px] rounded-md shadow-bs6 w-full">
                  <Text
                    className="!font-semibold mt-2 text-[14.82px] text-black_900"
                    size="3xl"
                  >
                    1 . FastComet
                  </Text>
                  <Img
                    src="images/img_group33.svg"
                    className="h-[29px] mt-[13px]"
                    alt="groupThirtyThree"
                  />
                  <div className="flex flex-col items-center justify-start mt-5 w-[79%] md:w-full">
                    <Img
                      src="images/img_image1.png"
                      className="h-[34px] md:h-auto object-cover w-full"
                      alt="imageOne"
                    />
                    <div className="font-poppins md:h-[65px] h-[66px] mt-2 relative w-[36%]">
                      <Text
                        className="absolute h-[57px] inset-x-[0] mx-auto sm:text-[33.8px] md:text-[35.8px] text-[37.8px] text-black_900 top-[0] w-max"
                        size="10xl"
                      >
                        9.6
                      </Text>
                      <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-full">
                        <RatingBar
                          className="flex justify-between w-[58px]"
                          value={5}
                          starCount={5}
                          activeColor="#fab426"
                          size={11}
                        ></RatingBar>
                      </div>
                    </div>
                    <Text
                      className="font-poppins mt-1 text-[10.38px] text-blue_700"
                      size="md"
                    >
                      Reviews (1085)
                    </Text>
                    <Text
                      className="font-poppins leading-[100.00%] mt-[15px] text-[10.38px] text-black_900 w-[96%] sm:w-full"
                      size="md"
                    >
                      <span className="text-black_900_bf font-opensans text-left font-normal">
                        Price Starting At
                      </span>
                      <span className="text-black_900 text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-amber_300 text-left text-[17.79px] font-semibold">
                        $2.45{" "}
                      </span>
                      <span className="text-black_900_bf font-opensans text-left font-normal">
                        /MO
                      </span>
                    </Text>
                    <Text
                      className="!font-semibold font-opensans mt-[9px] text-[10.38px] text-black_900_bf"
                      size="md"
                    >
                      Money Back in 45 Days
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-6 mt-[27px] w-[99%] md:w-full">
                    <Button
                      className="cursor-pointer font-bold font-poppins min-w-[201px] text-[10.38px] text-center text-white_A700"
                      shape="RoundedBorder5"
                      size="lg"
                      variant="OutlineTeal40033"
                    >
                      Visit FastComet
                    </Button>
                    <Button
                      className="cursor-pointer font-bold font-inter min-w-[201px] mt-[17px] text-[10.38px] text-blue_700 text-center"
                      shape="RoundedBorder5"
                      size="lg"
                      variant="OutlineBlue700"
                    >
                      Compare
                    </Button>
                    <div className="flex flex-col font-poppins gap-2.5 items-center justify-start mt-[23px] w-full">
                      <Text
                        className="text-[11.86px] text-black_900_a7 text-center"
                        size="lg"
                      >
                        Expert Overview
                      </Text>
                      <Text
                        className="leading-[135.00%] text-[8.89px] text-black_900 text-center w-full"
                        size="s"
                      >
                        <span className="text-black_900 font-opensans font-semibold">
                          Bruno Mirchevski:
                        </span>
                        <span className="text-black_900_d8 font-opensans font-normal">
                          {" "}
                          FastComet has been making waves in the hosting
                          industry since it established back in 2013. Owing to
                          its variety of hosting options, flexible price points,
                          and reliable customer service, it’s one of the most
                          popular providers available in the US and around the
                          world.{" "}
                        </span>
                        <span className="text-blue_700 font-opensans font-semibold">
                          Read More
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center p-[11px] rounded-md shadow-bs6 w-full">
                  <Text
                    className="!font-semibold mt-2 text-[14.82px] text-black_900"
                    size="3xl"
                  >
                    1 . FastComet
                  </Text>
                  <Img
                    src="images/img_group33.svg"
                    className="h-[29px] mt-[13px]"
                    alt="groupThirtyThree"
                  />
                  <div className="flex flex-col items-center justify-start mt-5 w-[79%] md:w-full">
                    <Img
                      src="images/img_image1.png"
                      className="h-[34px] md:h-auto object-cover w-full"
                      alt="imageOne"
                    />
                    <div className="font-poppins md:h-[65px] h-[66px] mt-2 relative w-[36%]">
                      <Text
                        className="absolute h-[57px] inset-x-[0] mx-auto sm:text-[33.8px] md:text-[35.8px] text-[37.8px] text-black_900 top-[0] w-max"
                        size="10xl"
                      >
                        9.6
                      </Text>
                      <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-full">
                        <RatingBar
                          className="flex justify-between w-[58px]"
                          value={5}
                          starCount={5}
                          activeColor="#fab426"
                          size={11}
                        ></RatingBar>
                      </div>
                    </div>
                    <Text
                      className="font-poppins mt-1 text-[10.38px] text-blue_700"
                      size="md"
                    >
                      Reviews (1085)
                    </Text>
                    <Text
                      className="font-poppins leading-[100.00%] mt-[15px] text-[10.38px] text-black_900 w-[96%] sm:w-full"
                      size="md"
                    >
                      <span className="text-black_900_bf font-opensans text-left font-normal">
                        Price Starting At
                      </span>
                      <span className="text-black_900 text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-amber_300 text-left text-[17.79px] font-semibold">
                        $2.45{" "}
                      </span>
                      <span className="text-black_900_bf font-opensans text-left font-normal">
                        /MO
                      </span>
                    </Text>
                    <Text
                      className="!font-semibold font-opensans mt-[9px] text-[10.38px] text-black_900_bf"
                      size="md"
                    >
                      Money Back in 45 Days
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-6 mt-[27px] w-[99%] md:w-full">
                    <Button
                      className="cursor-pointer font-bold font-poppins min-w-[201px] text-[10.38px] text-center text-white_A700"
                      shape="RoundedBorder5"
                      size="lg"
                      variant="OutlineTeal40033"
                    >
                      Visit FastComet
                    </Button>
                    <Button
                      className="cursor-pointer font-bold font-inter min-w-[201px] mt-[17px] text-[10.38px] text-blue_700 text-center"
                      shape="RoundedBorder5"
                      size="lg"
                      variant="OutlineBlue700"
                    >
                      Compare
                    </Button>
                    <div className="flex flex-col font-poppins gap-2.5 items-center justify-start mt-[23px] w-full">
                      <Text
                        className="text-[11.86px] text-black_900_a7 text-center"
                        size="lg"
                      >
                        Expert Overview
                      </Text>
                      <Text
                        className="leading-[135.00%] text-[8.89px] text-black_900 text-center w-full"
                        size="s"
                      >
                        <span className="text-black_900 font-opensans font-semibold">
                          Bruno Mirchevski:
                        </span>
                        <span className="text-black_900_d8 font-opensans font-normal">
                          {" "}
                          FastComet has been making waves in the hosting
                          industry since it established back in 2013. Owing to
                          its variety of hosting options, flexible price points,
                          and reliable customer service, it’s one of the most
                          popular providers available in the US and around the
                          world.{" "}
                        </span>
                        <span className="text-blue_700 font-opensans font-semibold">
                          Read More
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center p-[11px] rounded-md shadow-bs6 w-full">
                  <Text
                    className="!font-semibold mt-2 text-[14.82px] text-black_900"
                    size="3xl"
                  >
                    1 . FastComet
                  </Text>
                  <Img
                    src="images/img_group33.svg"
                    className="h-[29px] mt-[13px]"
                    alt="groupThirtyThree"
                  />
                  <div className="flex flex-col items-center justify-start mt-5 w-[79%] md:w-full">
                    <Img
                      src="images/img_image1.png"
                      className="h-[34px] md:h-auto object-cover w-full"
                      alt="imageOne"
                    />
                    <div className="font-poppins md:h-[65px] h-[66px] mt-2 relative w-[36%]">
                      <Text
                        className="absolute h-[57px] inset-x-[0] mx-auto sm:text-[33.8px] md:text-[35.8px] text-[37.8px] text-black_900 top-[0] w-max"
                        size="10xl"
                      >
                        9.6
                      </Text>
                      <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-full">
                        <RatingBar
                          className="flex justify-between w-[58px]"
                          value={5}
                          starCount={5}
                          activeColor="#fab426"
                          size={11}
                        ></RatingBar>
                      </div>
                    </div>
                    <Text
                      className="font-poppins mt-1 text-[10.38px] text-blue_700"
                      size="md"
                    >
                      Reviews (1085)
                    </Text>
                    <Text
                      className="font-poppins leading-[100.00%] mt-[15px] text-[10.38px] text-black_900 w-[96%] sm:w-full"
                      size="md"
                    >
                      <span className="text-black_900_bf font-opensans text-left font-normal">
                        Price Starting At
                      </span>
                      <span className="text-black_900 text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-amber_300 text-left text-[17.79px] font-semibold">
                        $2.45{" "}
                      </span>
                      <span className="text-black_900_bf font-opensans text-left font-normal">
                        /MO
                      </span>
                    </Text>
                    <Text
                      className="!font-semibold font-opensans mt-[9px] text-[10.38px] text-black_900_bf"
                      size="md"
                    >
                      Money Back in 45 Days
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-6 mt-[27px] w-[99%] md:w-full">
                    <Button
                      className="cursor-pointer font-bold font-poppins min-w-[201px] text-[10.38px] text-center text-white_A700"
                      shape="RoundedBorder5"
                      size="lg"
                      variant="OutlineTeal40033"
                    >
                      Visit FastComet
                    </Button>
                    <Button
                      className="cursor-pointer font-bold font-inter min-w-[201px] mt-[17px] text-[10.38px] text-blue_700 text-center"
                      shape="RoundedBorder5"
                      size="lg"
                      variant="OutlineBlue700"
                    >
                      Compare
                    </Button>
                    <div className="flex flex-col font-poppins gap-2.5 items-center justify-start mt-[23px] w-full">
                      <Text
                        className="text-[11.86px] text-black_900_a7 text-center"
                        size="lg"
                      >
                        Expert Overview
                      </Text>
                      <Text
                        className="leading-[135.00%] text-[8.89px] text-black_900 text-center w-full"
                        size="s"
                      >
                        <span className="text-black_900 font-opensans font-semibold">
                          Bruno Mirchevski:
                        </span>
                        <span className="text-black_900_d8 font-opensans font-normal">
                          {" "}
                          FastComet has been making waves in the hosting
                          industry since it established back in 2013. Owing to
                          its variety of hosting options, flexible price points,
                          and reliable customer service, it’s one of the most
                          popular providers available in the US and around the
                          world.{" "}
                        </span>
                        <span className="text-blue_700 font-opensans font-semibold">
                          Read More
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-10 items-center justify-start mt-14 w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[893px] md:min-w-full sm:text-[27.42px] md:text-[29.42px] text-[31.42px] text-center text-white_A700"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillBlue900"
                >
                  Other Options By Ranking
                </Button>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[19px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                      <div className="bg-white_A700 flex flex-col gap-[21px] items-center justify-start p-[11px] rounded-md shadow-bs7 w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-[34%] md:w-full">
                          <div className="flex flex-col gap-[11px] justify-start w-[98%] md:w-full">
                            <Text
                              className="!font-semibold md:ml-[0] ml-[13px] text-[14.76px] text-black_900"
                              size="3xl"
                            >
                              4 . Hostinger
                            </Text>
                            <Img
                              src="images/img_group33.svg"
                              className="h-[29px]"
                              alt="groupThirtyThree"
                            />
                          </div>
                          <Img
                            src="images/img_image2.png"
                            className="h-[33px] md:h-auto object-cover w-full"
                            alt="imageTwo"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start mb-[47px] w-[90%] md:w-full">
                          <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start w-[41%]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="font-poppins md:h-[57px] h-[66px] relative w-[39%]">
                                  <Text
                                    className="absolute h-[57px] inset-x-[0] mx-auto sm:text-[33.65px] md:text-[35.65px] text-[37.65px] text-black_900 top-[0] w-max"
                                    size="10xl"
                                  >
                                    9.6
                                  </Text>
                                  <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-full">
                                    <RatingBar
                                      className="flex justify-between w-[58px]"
                                      value={5}
                                      starCount={5}
                                      activeColor="#fab426"
                                      size={11}
                                    ></RatingBar>
                                  </div>
                                </div>
                                <div className="flex flex-col font-poppins gap-6 items-start justify-start mt-1 w-[52%] md:w-full">
                                  <Text
                                    className="ml-0.5 md:ml-[0] text-[10.33px] text-blue_700"
                                    size="md"
                                  >
                                    Reviews (1085)
                                  </Text>
                                  <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                                    <Img
                                      src="images/img_thumbupblack24dp.svg"
                                      className="h-[17px] mb-0.5 w-[17px]"
                                      alt="thumbupblack24d"
                                    />
                                    <Text
                                      className="mt-1 text-[6.64px] text-teal_400"
                                      size="xs"
                                    >
                                      896
                                    </Text>
                                    <Img
                                      src="images/img_thumbupblack24dp_deep_orange_a700_01.svg"
                                      className="h-[17px] mt-0.5 w-[17px]"
                                      alt="thumbupblack24d_One"
                                    />
                                    <Text
                                      className="mt-[3px] text-[6.64px] text-deep_orange_A700_c6"
                                      size="xs"
                                    >
                                      7
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-poppins leading-[100.00%] mt-[5px] text-[10.33px] text-black_900 w-full"
                                  size="md"
                                >
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    Price Starting At
                                  </span>
                                  <span className="text-black_900 text-left font-normal">
                                    {" "}
                                  </span>
                                  <span className="text-amber_300 text-left text-[17.72px] font-semibold">
                                    $2.45
                                  </span>
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    /MO
                                  </span>
                                </Text>
                                <Text
                                  className="!font-semibold font-opensans mt-[9px] text-[10.33px] text-black_900_bf"
                                  size="md"
                                >
                                  Money Back in 45 Days
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[31px] items-center justify-start mt-2.5 w-[55%]">
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <Text
                                  className="text-[11.81px] text-black_900_a7 text-center"
                                  size="lg"
                                >
                                  Expert Overview
                                </Text>
                                <Text
                                  className="leading-[135.00%] text-[8.86px] text-black_900 text-center w-full"
                                  size="s"
                                >
                                  <span className="text-black_900 font-opensans font-semibold">
                                    Bruno Mirchevski:
                                  </span>
                                  <span className="text-black_900_d8 font-opensans font-normal">
                                    {" "}
                                    FastComet has been making waves in the
                                    hosting industry since it established back
                                    in 2013. Owing to its variety of hosting
                                    options, flexible price points, and reliable
                                    customer service, it’s one of the most
                                    popular providers available in the US and
                                    around the world.{" "}
                                  </span>
                                  <span className="text-blue_700 font-opensans font-semibold">
                                    Read More
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                                <Button
                                  className="cursor-pointer font-bold font-poppins min-w-[201px] text-[10.33px] text-center text-white_A700"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineTeal40033_1"
                                >
                                  Visit Hostinger
                                </Button>
                                <Button
                                  className="cursor-pointer font-bold font-inter min-w-[201px] text-[10.33px] text-blue_700 text-center"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineBlue700"
                                >
                                  Compare
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                      <div className="bg-white_A700 flex flex-col gap-[21px] items-center justify-start p-[11px] rounded-md shadow-bs7 w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-[34%] md:w-full">
                          <div className="flex flex-col gap-[11px] justify-start w-[98%] md:w-full">
                            <Text
                              className="!font-semibold md:ml-[0] ml-[13px] text-[14.76px] text-black_900"
                              size="3xl"
                            >
                              5 . Hostinger
                            </Text>
                            <Img
                              src="images/img_group33.svg"
                              className="h-[29px]"
                              alt="groupThirtyThree"
                            />
                          </div>
                          <Img
                            src="images/img_image2.png"
                            className="h-[33px] md:h-auto object-cover w-full"
                            alt="imageTwo"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start mb-[47px] w-[90%] md:w-full">
                          <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start w-[41%]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="font-poppins md:h-[57px] h-[66px] relative w-[39%]">
                                  <Text
                                    className="absolute h-[57px] inset-x-[0] mx-auto sm:text-[33.65px] md:text-[35.65px] text-[37.65px] text-black_900 top-[0] w-max"
                                    size="10xl"
                                  >
                                    9.6
                                  </Text>
                                  <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-full">
                                    <RatingBar
                                      className="flex justify-between w-[58px]"
                                      value={5}
                                      starCount={5}
                                      activeColor="#fab426"
                                      size={11}
                                    ></RatingBar>
                                  </div>
                                </div>
                                <div className="flex flex-col font-poppins gap-6 items-start justify-start mt-1 w-[52%] md:w-full">
                                  <Text
                                    className="ml-0.5 md:ml-[0] text-[10.33px] text-blue_700"
                                    size="md"
                                  >
                                    Reviews (1085)
                                  </Text>
                                  <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                                    <Img
                                      src="images/img_thumbupblack24dp.svg"
                                      className="h-[17px] mb-0.5 w-[17px]"
                                      alt="thumbupblack24d"
                                    />
                                    <Text
                                      className="mt-1 text-[6.64px] text-teal_400"
                                      size="xs"
                                    >
                                      896
                                    </Text>
                                    <Img
                                      src="images/img_thumbupblack24dp_deep_orange_a700_01.svg"
                                      className="h-[17px] mt-0.5 w-[17px]"
                                      alt="thumbupblack24d_One"
                                    />
                                    <Text
                                      className="mt-[3px] text-[6.64px] text-deep_orange_A700_c6"
                                      size="xs"
                                    >
                                      7
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-poppins leading-[100.00%] mt-[5px] text-[10.33px] text-black_900 w-full"
                                  size="md"
                                >
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    Price Starting At
                                  </span>
                                  <span className="text-black_900 text-left font-normal">
                                    {" "}
                                  </span>
                                  <span className="text-amber_300 text-left text-[17.72px] font-semibold">
                                    $2.45
                                  </span>
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    /MO
                                  </span>
                                </Text>
                                <Text
                                  className="!font-semibold font-opensans mt-[9px] text-[10.33px] text-black_900_bf"
                                  size="md"
                                >
                                  Money Back in 45 Days
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[31px] items-center justify-start mt-2.5 w-[55%]">
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <Text
                                  className="text-[11.81px] text-black_900_a7 text-center"
                                  size="lg"
                                >
                                  Expert Overview
                                </Text>
                                <Text
                                  className="leading-[135.00%] text-[8.86px] text-black_900 text-center w-full"
                                  size="s"
                                >
                                  <span className="text-black_900 font-opensans font-semibold">
                                    Bruno Mirchevski:
                                  </span>
                                  <span className="text-black_900_d8 font-opensans font-normal">
                                    {" "}
                                    FastComet has been making waves in the
                                    hosting industry since it established back
                                    in 2013. Owing to its variety of hosting
                                    options, flexible price points, and reliable
                                    customer service, it’s one of the most
                                    popular providers available in the US and
                                    around the world.{" "}
                                  </span>
                                  <span className="text-blue_700 font-opensans font-semibold">
                                    Read More
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                                <Button
                                  className="cursor-pointer font-bold font-poppins min-w-[201px] text-[10.33px] text-center text-white_A700"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineTeal40033_1"
                                >
                                  Visit Hostinger
                                </Button>
                                <Button
                                  className="cursor-pointer font-bold font-inter min-w-[201px] text-[10.33px] text-blue_700 text-center"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineBlue700"
                                >
                                  Compare
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                      <div className="bg-white_A700 flex flex-col gap-[21px] items-center justify-start p-[11px] rounded-md shadow-bs7 w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-[34%] md:w-full">
                          <div className="flex flex-col gap-[11px] justify-start w-[98%] md:w-full">
                            <Text
                              className="!font-semibold md:ml-[0] ml-[13px] text-[14.76px] text-black_900"
                              size="3xl"
                            >
                              4 . Hostinger
                            </Text>
                            <Img
                              src="images/img_group33.svg"
                              className="h-[29px]"
                              alt="groupThirtyThree"
                            />
                          </div>
                          <Img
                            src="images/img_image2.png"
                            className="h-[33px] md:h-auto object-cover w-full"
                            alt="imageTwo"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start mb-[47px] w-[90%] md:w-full">
                          <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start w-[41%]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="font-poppins md:h-[57px] h-[66px] relative w-[39%]">
                                  <Text
                                    className="absolute h-[57px] inset-x-[0] mx-auto sm:text-[33.65px] md:text-[35.65px] text-[37.65px] text-black_900 top-[0] w-max"
                                    size="10xl"
                                  >
                                    9.6
                                  </Text>
                                  <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-full">
                                    <RatingBar
                                      className="flex justify-between w-[58px]"
                                      value={5}
                                      starCount={5}
                                      activeColor="#fab426"
                                      size={11}
                                    ></RatingBar>
                                  </div>
                                </div>
                                <div className="flex flex-col font-poppins gap-6 items-start justify-start mt-1 w-[52%] md:w-full">
                                  <Text
                                    className="ml-0.5 md:ml-[0] text-[10.33px] text-blue_700"
                                    size="md"
                                  >
                                    Reviews (1085)
                                  </Text>
                                  <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                                    <Img
                                      src="images/img_thumbupblack24dp.svg"
                                      className="h-[17px] mb-0.5 w-[17px]"
                                      alt="thumbupblack24d"
                                    />
                                    <Text
                                      className="mt-1 text-[6.64px] text-teal_400"
                                      size="xs"
                                    >
                                      896
                                    </Text>
                                    <Img
                                      src="images/img_thumbupblack24dp_deep_orange_a700_01.svg"
                                      className="h-[17px] mt-0.5 w-[17px]"
                                      alt="thumbupblack24d_One"
                                    />
                                    <Text
                                      className="mt-[3px] text-[6.64px] text-deep_orange_A700_c6"
                                      size="xs"
                                    >
                                      7
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-poppins leading-[100.00%] mt-[5px] text-[10.33px] text-black_900 w-full"
                                  size="md"
                                >
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    Price Starting At
                                  </span>
                                  <span className="text-black_900 text-left font-normal">
                                    {" "}
                                  </span>
                                  <span className="text-amber_300 text-left text-[17.72px] font-semibold">
                                    $2.45
                                  </span>
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    /MO
                                  </span>
                                </Text>
                                <Text
                                  className="!font-semibold font-opensans mt-[9px] text-[10.33px] text-black_900_bf"
                                  size="md"
                                >
                                  Money Back in 45 Days
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[31px] items-center justify-start mt-2.5 w-[55%]">
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <Text
                                  className="text-[11.81px] text-black_900_a7 text-center"
                                  size="lg"
                                >
                                  Expert Overview
                                </Text>
                                <Text
                                  className="leading-[135.00%] text-[8.86px] text-black_900 text-center w-full"
                                  size="s"
                                >
                                  <span className="text-black_900 font-opensans font-semibold">
                                    Bruno Mirchevski:
                                  </span>
                                  <span className="text-black_900_d8 font-opensans font-normal">
                                    {" "}
                                    FastComet has been making waves in the
                                    hosting industry since it established back
                                    in 2013. Owing to its variety of hosting
                                    options, flexible price points, and reliable
                                    customer service, it’s one of the most
                                    popular providers available in the US and
                                    around the world.{" "}
                                  </span>
                                  <span className="text-blue_700 font-opensans font-semibold">
                                    Read More
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                                <Button
                                  className="cursor-pointer font-bold font-poppins min-w-[201px] text-[10.33px] text-center text-white_A700"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineTeal40033_1"
                                >
                                  Visit Hostinger
                                </Button>
                                <Button
                                  className="cursor-pointer font-bold font-inter min-w-[201px] text-[10.33px] text-blue_700 text-center"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineBlue700"
                                >
                                  Compare
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                      <div className="bg-white_A700 flex flex-col gap-[21px] items-center justify-start p-[11px] rounded-md shadow-bs7 w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-[34%] md:w-full">
                          <div className="flex flex-col gap-[11px] justify-start w-[98%] md:w-full">
                            <Text
                              className="!font-semibold md:ml-[0] ml-[13px] text-[14.76px] text-black_900"
                              size="3xl"
                            >
                              5 . Hostinger
                            </Text>
                            <Img
                              src="images/img_group33.svg"
                              className="h-[29px]"
                              alt="groupThirtyThree"
                            />
                          </div>
                          <Img
                            src="images/img_image2.png"
                            className="h-[33px] md:h-auto object-cover w-full"
                            alt="imageTwo"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start mb-[47px] w-[90%] md:w-full">
                          <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start w-[41%]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="font-poppins md:h-[57px] h-[66px] relative w-[39%]">
                                  <Text
                                    className="absolute h-[57px] inset-x-[0] mx-auto sm:text-[33.65px] md:text-[35.65px] text-[37.65px] text-black_900 top-[0] w-max"
                                    size="10xl"
                                  >
                                    9.6
                                  </Text>
                                  <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-evenly mx-auto w-full">
                                    <RatingBar
                                      className="flex justify-between w-[58px]"
                                      value={5}
                                      starCount={5}
                                      activeColor="#fab426"
                                      size={11}
                                    ></RatingBar>
                                  </div>
                                </div>
                                <div className="flex flex-col font-poppins gap-6 items-start justify-start mt-1 w-[52%] md:w-full">
                                  <Text
                                    className="ml-0.5 md:ml-[0] text-[10.33px] text-blue_700"
                                    size="md"
                                  >
                                    Reviews (1085)
                                  </Text>
                                  <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                                    <Img
                                      src="images/img_thumbupblack24dp.svg"
                                      className="h-[17px] mb-0.5 w-[17px]"
                                      alt="thumbupblack24d"
                                    />
                                    <Text
                                      className="mt-1 text-[6.64px] text-teal_400"
                                      size="xs"
                                    >
                                      896
                                    </Text>
                                    <Img
                                      src="images/img_thumbupblack24dp_deep_orange_a700_01.svg"
                                      className="h-[17px] mt-0.5 w-[17px]"
                                      alt="thumbupblack24d_One"
                                    />
                                    <Text
                                      className="mt-[3px] text-[6.64px] text-deep_orange_A700_c6"
                                      size="xs"
                                    >
                                      7
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-poppins leading-[100.00%] mt-[5px] text-[10.33px] text-black_900 w-full"
                                  size="md"
                                >
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    Price Starting At
                                  </span>
                                  <span className="text-black_900 text-left font-normal">
                                    {" "}
                                  </span>
                                  <span className="text-amber_300 text-left text-[17.72px] font-semibold">
                                    $2.45
                                  </span>
                                  <span className="text-black_900_bf font-opensans text-left font-normal">
                                    /MO
                                  </span>
                                </Text>
                                <Text
                                  className="!font-semibold font-opensans mt-[9px] text-[10.33px] text-black_900_bf"
                                  size="md"
                                >
                                  Money Back in 45 Days
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[31px] items-center justify-start mt-2.5 w-[55%]">
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <Text
                                  className="text-[11.81px] text-black_900_a7 text-center"
                                  size="lg"
                                >
                                  Expert Overview
                                </Text>
                                <Text
                                  className="leading-[135.00%] text-[8.86px] text-black_900 text-center w-full"
                                  size="s"
                                >
                                  <span className="text-black_900 font-opensans font-semibold">
                                    Bruno Mirchevski:
                                  </span>
                                  <span className="text-black_900_d8 font-opensans font-normal">
                                    {" "}
                                    FastComet has been making waves in the
                                    hosting industry since it established back
                                    in 2013. Owing to its variety of hosting
                                    options, flexible price points, and reliable
                                    customer service, it’s one of the most
                                    popular providers available in the US and
                                    around the world.{" "}
                                  </span>
                                  <span className="text-blue_700 font-opensans font-semibold">
                                    Read More
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                                <Button
                                  className="cursor-pointer font-bold font-poppins min-w-[201px] text-[10.33px] text-center text-white_A700"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineTeal40033_1"
                                >
                                  Visit Hostinger
                                </Button>
                                <Button
                                  className="cursor-pointer font-bold font-inter min-w-[201px] text-[10.33px] text-blue_700 text-center"
                                  shape="RoundedBorder5"
                                  size="lg"
                                  variant="OutlineBlue700"
                                >
                                  Compare
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-8 w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[230px] text-[16.33px] text-blue_900 text-center"
                  shape="RoundedBorder5"
                  size="lg"
                  variant="OutlineBlack90026"
                >
                  Show More
                </Button>
                <div className="flex sm:flex-1 flex-row items-center justify-between w-1/4 sm:w-full">
                  <Button
                    className="cursor-pointer font-semibold h-[43px] text-[16.33px] text-center text-white_A700 w-[43px]"
                    shape="RoundedBorder5"
                    size="lg"
                    variant="FillBlue900"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[43px] text-[16.33px] text-blue_900 text-center w-[43px]"
                    shape="RoundedBorder5"
                    size="lg"
                    variant="OutlineBlack90026_1"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[43px] text-[16.33px] text-blue_900 text-center w-[43px]"
                    shape="RoundedBorder5"
                    size="lg"
                    variant="OutlineBlack90026_1"
                  >
                    ...
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[43px] text-[16.33px] text-blue_900 text-center w-[43px]"
                    shape="RoundedBorder5"
                    size="lg"
                    variant="OutlineBlack90026_1"
                  >
                    114
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[42px] items-center justify-start md:ml-[0] ml-[445px] mt-[61px] md:px-5">
            <Text
              className="bg-blue_900 font-poppins h-[74px] justify-center max-w-[893px] md:max-w-full pb-[9px] pt-4 sm:px-5 px-[35px] rounded-[5px] sm:text-[27.51px] md:text-[29.51px] text-[31.51px] text-white_A700 w-full"
              as="h3"
              size="8xl"
            >
              Familiarize Yourself With Web Hosting Tiers
            </Text>
            <Text
              className="font-opensans text-[13.33px] text-black_900_a2"
              size="2xl"
            >
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                <>
                  What Is Shared Web Hosting?
                  <br />
                </>
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  Shared hosting is web hosting in which the provider houses
                  multiple sites on a single server. For example, Site A shares
                  the same server with Site B, Site C, Site D, and Site E. The
                  upside is that the multiple sites share the server cost, so
                  shared web hosting is generally very inexpensive. It&#39;s
                  cheap web hosting. In fact, you can find an option for less
                  than $10 per month.
                  <br />
                  <br />
                  You could think of the sites that share your server as your
                  roommates; there&#39;s really not that much separating you
                  from them. Sure, you can close the bedroom door, but they can
                  still cause nightmares for you in the kitchen and the
                  bathroom. In web hosting terms, all the sites share a single
                  server&#39;s resources, so huge traffic spikes on Site A may
                  impact the neighboring sites&#39; performances. It&#39;s even
                  possible that another site could take down the shared server
                  altogether, if it crashed hard enough.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                <>
                  What Is VPS Web Hosting?
                  <br />
                </>
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  VPS hosting is similar to shared hosting in that multiple
                  sites share the same server, but the similarities end there.
                  In housing terms, VPS hosting is like renting your own
                  apartment in a larger building. You&#39;re much more isolated
                  than in the roommate situation mentioned above; it&#39;s still
                  possible that a neighboring apartment could causes annoyance
                  for you, but far less likely. In web hosting terms, Site
                  A&#39;s traffic surge won&#39;t have nearly as much impact on
                  Site B or Site C. As you&#39;d expect, VPS hosting costs more
                  than shared hosting. You&#39;ll pay roughly $20 to $60 per
                  month.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                What Is Dedicated Web Hosting?
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  <br />
                  Dedicated hosting, on the other hand, is both powerful and
                  pricey. It&#39;s reserved for sites that require an incredible
                  amount of server resources.
                  <br />
                  <br />
                  Unlike shared or VPS hosting, dedicated hosting makes your
                  website the lone tenant on a server. To extend the housing
                  metaphor, having a dedicated server is like owning your own
                  home. The means that your website taps the server&#39;s full
                  power, and pays for the privilege. If you&#39;re looking for a
                  high-powered site—an online mansion for your
                  business—dedicated hosting is the way to go. That said, many
                  dedicated web hosting services task you with handling backend,
                  technical issues, much as homeowners have manage maintenance
                  that renters generally leave to their landlords.
                  <br />
                  <br />
                  On the topic of dedicated hosting, many web hosting services
                  also offer managed hosting. This type of hosting sees the web
                  host act as your IT department, handling a server&#39;s
                  maintenance and upkeep. This hosting option is something that
                  you&#39;d typically find with dedicated servers, so it&#39;s a
                  business-centric addition. Naturally, it adds a few bucks to
                  the hosting cost, but nothing that should break the bank if
                  you have the resources for a dedicated server.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                <>
                  What Is WordPress Web Hosting?
                  <br />
                </>
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  WordPress hosting is for people who want to build their sites
                  on the back of the popular WordPress content management system
                  (CMS) from WordPress.org. There are multiple ways to set up
                  shop using this free, open-source blogging and site-building
                  platform.
                  <br />
                  You gain the most web-building functionality if you create a
                  self-hosted site. This typically involves transferring the
                  free WordPress CMS to server or signing up for a web
                  host&#39;s optimized WordPress plan. With an optimized plan,
                  the host automatically handles backend stuff, so you don&#39;t
                  have to worry about updating the plug-ins and CMS, and
                  enabling automatic backups. In these instances, the WordPress
                  environment typically comes pre-installed on the server.
                  <br />
                  <br />
                  You can also host your website on WordPress.com, but
                  that&#39;s different from the kind of hosting mentioned above.
                  WordPress.com uses the same code from WordPress.org, but it
                  hides the server code and handles the hosting for you. In that
                  sense, it resembles entries in our online site builder
                  roundup. It&#39;s a simpler but less flexible and customizable
                  way to approach WordPress hosting. It&#39;s definitely easier,
                  but if you want to tinker and adjust and optimize every aspect
                  of your site, it might not be for you.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                Business-Friendly Features
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  <br />
                  When it&#39;s time to set up shop, look for a web host that
                  offers the aforementioned dedicated servers, as well as
                  advanced cloud server platforms (such as Amazon Web Services
                  or Google Cloud), custom server builds should you need it, and
                  24/7 customer support. Depending on your business&#39; focus,
                  you may need a web host that can handle pageviews or visitors
                  that rank in the high thousands or millions. Many busy hosting
                  plans offer an onboarding specialist that can help you get
                  started, too.
                  <br />
                  <br />
                  If you&#39;re planning on selling a product, look for a web
                  host that offers a Secure Sockets Layer (SSL) certificate,
                  because it encrypts the data between the customer&#39;s
                  browser and web host to safeguard purchasing information.
                  You&#39;re probably familiar with SSL; it&#39;s the green
                  padlock that appears in your web browser&#39;s address bar as
                  you visit an online financial institution or retail outlet. A
                  few companies toss in a SSL certificate free of charge; others
                  may charge you roughly $100 per year for that extra security
                  layer.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                <>
                  Extra Web Hosting Info
                  <br />
                </>
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  If you&#39;re not sure of the type of hosting your business
                  needs, you might want to start small, with shared web hosting.
                  You can always graduate to a more robust, feature-rich package
                  of, say, VPS hosting or even dedicated hosting in the future.
                  Unfortunately, some hosts don&#39;t offer all hosting types.
                  Consider how much you expect to grow your website, and how
                  soon, before you commit to anything longer than a one-year
                  plan. It&#39;s worth spending the time up front to make sure
                  that the host you select with is able to provide the growth
                  you envision for your site, as switching web hosting providers
                  midstream is not a trivial undertaking.
                  <br />
                  <br />
                  Once you decide your price range, you need to consider how
                  long you&#39;ll need web hosting. If it&#39;s a short-term
                  project—say, less than a month or two—you can typically
                  receive a refund should you cancel your hosting within 60
                  days. Some companies offer 30-day money-back guarantees,
                  others offer 90-day money-back guarantees. Once again,
                  it&#39;s beneficial to do your homework.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                The Web Hosting Features You Need
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  <br />
                  Many web hosts offer limited features in their starter
                  packages and then expand the offerings (sometimes
                  tremendously) for higher-tier plans. Read the small print to
                  make sure the plan you are selecting offers what you need. If
                  you need a site builder application to design your website,
                  make sure that the low-cost web host you are picking actually
                  comes with a site builder. Many of them require you to pay for
                  the builder as a separate add-on. Website builders usually
                  don&#39;t cost a lot of money, but if you can find a web host
                  that includes one for free, that&#39;s money in your pocket.
                  And, if it&#39;s integrated with your hosting service,
                  you&#39;re more likely to have a smooth, supported experience.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                <>
                  Email Hosting
                  <br />
                </>
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  If you aim to have a web presence, you must have email.
                  It&#39;s a convenient way for potential customers and clients
                  to send you a message, Word document, or other files.
                  Thankfully, most web hosts include email in their hosting
                  plans. Some web hosts offer unlimited email account creation
                  (which is great for future growth), while others offer a
                  finite amount. You, naturally, should want unlimited email.
                  <br />
                  <br />
                  That said, not all web hosts offer email. WP Engine, for
                  example, does not. In such instances, you must sign up for
                  email accounts from a company other than your web host.
                  GoDaddy, for instance, sells email packages starting at $5.99
                  per user, per month. That might sound like a hassle, and just
                  one more thing to keep track of, but there are actually some
                  webmasters who feel that separating your email hosting and web
                  hosting services is smart. That way, one provider going
                  offline won&#39;t completely bork your business.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                Uptime, Uptime, Uptime!
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  <br />
                  The aforementioned features are valuable to the web hosting
                  experience, but none matches the importance of site uptime. If
                  your site is down, clients or customers will be unable to find
                  you or access your products or services.
                  <br />
                  We&#39;ve added uptime monitoring to our review process, and
                  the results show that most web hosts do an excellent job of
                  keeping sites up and running. Web hosts with uptime issues are
                  heavily penalized during the review process and are unable to
                  qualify for top ratings.
                  <br />
                  See How We Test Web Hosting Services.
                  <br />
                </>
              </span>
              <span className="text-black_900 font-poppins text-left text-[17.77px] font-semibold">
                <>
                  Ecommerce and Marketing
                  <br />
                </>
              </span>
              <span className="text-black_900 text-left font-normal">
                <>
                  One thing we learned in reviewing the services listed here
                  (and many more) is that even though the packages are similar,
                  they are not identical. Some are more security-focused than
                  others, offering anti-spam and anti-malware tools at every
                  price tier. Others offer a variety of email marketing tools.
                  While most of the hosts we&#39;ve reviewed have built-in
                  e-commerce, you may want to consider using a more-robust
                  third-party online shopping cart application, such as
                  PinnacleCart, Shopify, or Wix Stores.
                </>
              </span>
            </Text>
          </div>
          <footer className="flex items-center justify-center mt-[41px] md:px-5 w-full">
            <div className="h-[540px] md:h-[594px] mb-[84px] relative w-full">
              <div className="absolute bg-blue_900 bottom-[0] flex flex-row inset-x-[0] items-center justify-start mx-auto p-1.5 w-full">
                <div className="flex flex-col gap-[46px] justify-start mb-[17px] ml-[179px] w-3/4">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <div className="flex relative w-[38%] md:w-full">
                      <Img
                        src="images/img_vector_150x64.png"
                        className="h-[150px] my-auto object-cover"
                        alt="vector_One"
                      />
                      <Text
                        className="ml-[-54.8px] mr-auto mt-auto text-white_A700 z-[1]"
                        as="h1"
                        size="11xl"
                      >
                        Company Tagline
                      </Text>
                    </div>
                    <Img
                      src="images/img_facebookblack24dp.svg"
                      className="h-[41px] md:ml-[0] ml-[434px] md:mt-0 mt-[94px] w-[41px]"
                      alt="facebookblackTwentyFour"
                    />
                    <Img
                      src="images/img_twitter1.svg"
                      className="h-[41px] md:ml-[0] ml-[33px] md:mt-0 mt-[94px] w-[41px]"
                      alt="twitterOne"
                    />
                    <Img
                      src="images/img_instagram1.svg"
                      className="h-[37px] md:ml-[0] ml-[33px] md:mt-0 mt-24 w-[37px]"
                      alt="instagramOne"
                    />
                  </div>
                  <div className="md:h-[204px] h-[284px] ml-2.5 md:ml-[0] relative w-full">
                    <Img
                      src="images/img_vector_150x64.png"
                      className="absolute bottom-[0] h-[150px] object-cover right-[17%]"
                      alt="vector_Two"
                    />
                    <div className="absolute flex flex-row inset-x-[0] items-center justify-evenly mx-auto top-[0] w-full">
                      <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                        <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="!font-extrabold text-white_A700"
                            >
                              <Text as="h6" size="5xl">
                                USEFUL
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="!font-extrabold md:ml-[0] ml-[196px] text-white_A700"
                            >
                              <Text as="h6" size="5xl">
                                ABOUT
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="!font-extrabold md:ml-[0] ml-[196px] text-white_A700"
                            >
                              <Text as="h6" size="5xl">
                                LEGAL
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="!font-extrabold md:ml-[0] ml-[221px] text-center text-white_A700"
                            >
                              <Text as="h6" size="5xl">
                                SUBSCRIBE NOW
                              </Text>
                            </a>
                          </li>
                        </ul>
                        <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-start justify-between w-full">
                          <ul className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[67%] md:w-full common-column-list">
                            <li>
                              <a href="javascript:">
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                  <Text
                                    className="!font-semibold text-white_A700"
                                    as="h6"
                                    size="5xl"
                                  >
                                    Overall Best Web Hosts
                                  </Text>
                                  <Text
                                    className="!font-semibold md:ml-[0] ml-[61px] text-white_A700"
                                    as="h6"
                                    size="5xl"
                                  >
                                    About Us
                                  </Text>
                                  <a
                                    href="javascript:"
                                    className="!font-semibold md:ml-[0] ml-[181px] text-white_A700"
                                  >
                                    <Text as="h6" size="5xl">
                                      Terms & Conditions
                                    </Text>
                                  </a>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                                  <Text
                                    className="!font-semibold text-white_A700"
                                    as="h6"
                                    size="5xl"
                                  >
                                    Who Is Hosting?
                                  </Text>
                                  <a
                                    href="javascript:"
                                    className="!font-semibold md:ml-[0] ml-[125px] text-white_A700"
                                  >
                                    <Text as="h6" size="5xl">
                                      Contact Us
                                    </Text>
                                  </a>
                                  <a
                                    href="javascript:"
                                    className="!font-semibold md:ml-[0] ml-[166px] text-white_A700"
                                  >
                                    <Text as="h6" size="5xl">
                                      Privacy Policy
                                    </Text>
                                  </a>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                                  <Text
                                    className="!font-semibold text-white_A700"
                                    as="h6"
                                    size="5xl"
                                  >
                                    Write Review
                                  </Text>
                                  <a
                                    href="javascript:"
                                    className="!font-semibold md:ml-[0] ml-[149px] text-white_A700"
                                  >
                                    <Text as="h6" size="5xl">
                                      FAQs
                                    </Text>
                                  </a>
                                  <Text
                                    className="!font-semibold md:ml-[0] ml-[216px] text-white_A700"
                                    as="h6"
                                    size="5xl"
                                  >
                                    Terms of Use
                                  </Text>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[100px] items-start justify-start">
                                  <Text
                                    className="!font-semibold sm:mt-0 mt-0.5 text-white_A700"
                                    as="h6"
                                    size="5xl"
                                  >
                                    Claim Web Hosting
                                  </Text>
                                  <Text
                                    className="!font-semibold leading-[150.00%] text-white_A700 w-[46%] sm:w-full"
                                    as="h6"
                                    size="5xl"
                                  >
                                    Personal Data Removal Request
                                  </Text>
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div className="flex md:flex-1 flex-col gap-4 items-start justify-start md:mt-0 mt-0.5 w-[24%] md:w-full">
                            <Input
                              wrapClassName="w-full"
                              className="font-opensans p-0 placeholder:text-gray_500 text-[15px] text-gray_500 text-left w-full"
                              type="email"
                              name="groupThirtyThree"
                              placeholder="E-Mail Adress"
                              shape="RoundedBorder8"
                              size="md"
                              variant="FillGray5001"
                            ></Input>
                            <Button
                              className="cursor-pointer font-extrabold font-poppins min-w-[161px] text-center text-lg text-white_A700"
                              shape="RoundedBorder8"
                              size="lg"
                              variant="FillBluegray800"
                            >
                              Send
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_illustration_amber_300.png"
                className="absolute h-[274px] object-cover right-[0] top-[0]"
                alt="illustration_One"
              />
              <Img
                src="images/img_illustration_amber_300.png"
                className="absolute bottom-[2%] h-[180px] left-[0] object-cover"
                alt="illustration_Two"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HOMEWithCategoriesPage;
