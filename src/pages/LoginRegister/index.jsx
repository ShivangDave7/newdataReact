import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const LoginRegisterPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-row font-poppins items-center mx-auto p-[230px] md:px-10 sm:px-5 w-full">
        <div className="bg-white_A700 flex md:flex-col flex-row gap-10 items-center justify-center max-w-[900px] mx-auto pr-10 md:px-5 rounded-[10px] w-full">
          <Img
            src="images/img_rectangle38.png"
            className="md:flex-1 h-[564px] sm:h-auto object-cover w-[53%] md:w-full"
            alt="rectangleThirtyEight"
          />
          <div className="flex flex-col gap-10 items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <a href="javascript:" className="text-gray_900_01 w-auto">
                <Text as="h5" size="6xl">
                  Login
                </Text>
              </a>
              <Text className="!font-light text-gray_900_01 w-auto" size="4xl">
                Donec tortor quam at duis tortor.
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-end justify-start w-auto">
              <div className="flex flex-col gap-[5px] items-start justify-start w-[370px] sm:w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  E-Mail
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
              <div className="flex flex-col gap-[5px] items-start justify-start w-[370px] sm:w-full">
                <Text
                  className="!font-light text-gray_900_01 w-auto"
                  size="3xl"
                >
                  Password
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-light leading-[normal] p-0 placeholder:text-gray_900_01 text-base text-gray_900_01 text-left w-full"
                  name="frameTwentyEight_One"
                  placeholder="Placeholder content"
                  shape="RoundedBorder5"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
              <a
                href="javascript:"
                className="!font-semibold text-blue_gray_700 w-auto"
              >
                <Text size="3xl">Forgot password?</Text>
              </a>
              <Button
                className="cursor-pointer font-medium leading-[normal] text-base text-center text-white_A700 w-full"
                shape="RoundedBorder5"
                size="lg"
                variant="FillBlueA700"
              >
                Login
              </Button>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
              <div className="flex flex-row items-center justify-start w-[370px] sm:w-full">
                <Line className="bg-gray_300_01 h-px w-[46%]" />
                <div className="bg-white_A700 flex flex-row items-start justify-start px-2.5 py-[5px] w-auto">
                  <Text className="!font-light text-gray_500 w-auto" size="xl">
                    or
                  </Text>
                </div>
                <Line className="bg-gray_300_01 h-px w-[46%]" />
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] text-base text-blue_gray_700 text-center w-full"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineBluegray700"
              >
                Register now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterPage;
