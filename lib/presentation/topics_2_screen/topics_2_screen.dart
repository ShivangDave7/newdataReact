import '../topics_2_screen/widgets/animalprofile_item_widget.dart';
import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';
import 'package:shivang_s_application42/widgets/custom_button.dart';

class Topics2Screen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        body: Container(
          width: double.maxFinite,
          padding: getPadding(
            left: 24,
            top: 10,
            right: 24,
            bottom: 10,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    padding: getPadding(
                      left: 38,
                      top: 24,
                      right: 38,
                      bottom: 24,
                    ),
                    decoration: AppDecoration.fillWhiteA700.copyWith(
                      borderRadius: BorderRadiusStyle.roundedBorder15,
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Align(
                          alignment: Alignment.center,
                          child: Container(
                            height: getVerticalSize(
                              54,
                            ),
                            width: getHorizontalSize(
                              50,
                            ),
                            margin: getMargin(
                              top: 8,
                            ),
                            child: Stack(
                              alignment: Alignment.center,
                              children: [
                                Align(
                                  alignment: Alignment.bottomLeft,
                                  child: Container(
                                    height: getVerticalSize(
                                      30,
                                    ),
                                    width: getHorizontalSize(
                                      41,
                                    ),
                                    margin: getMargin(
                                      left: 2,
                                    ),
                                    decoration: BoxDecoration(
                                      color: ColorConstant.gray400,
                                      borderRadius: BorderRadius.circular(
                                        getHorizontalSize(
                                          20,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                CustomImageView(
                                  imagePath: ImageConstant.imgImage41,
                                  height: getVerticalSize(
                                    54,
                                  ),
                                  width: getHorizontalSize(
                                    50,
                                  ),
                                  alignment: Alignment.center,
                                ),
                              ],
                            ),
                          ),
                        ),
                        Padding(
                          padding: getPadding(
                            top: 20,
                          ),
                          child: Text(
                            "Technology",
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.left,
                            style: AppStyle.txtDMSansRegular13Gray700,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    height: getSize(
                      150,
                    ),
                    width: getSize(
                      150,
                    ),
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        Align(
                          alignment: Alignment.topRight,
                          child: Container(
                            padding: getPadding(
                              left: 45,
                              top: 19,
                              right: 45,
                              bottom: 19,
                            ),
                            decoration: AppDecoration.fillWhiteA700.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder15,
                            ),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                Container(
                                  height: getSize(
                                    45,
                                  ),
                                  width: getSize(
                                    45,
                                  ),
                                  margin: getMargin(
                                    top: 8,
                                  ),
                                  child: Stack(
                                    alignment: Alignment.center,
                                    children: [
                                      Align(
                                        alignment: Alignment.bottomCenter,
                                        child: Container(
                                          height: getVerticalSize(
                                            25,
                                          ),
                                          width: getHorizontalSize(
                                            37,
                                          ),
                                          decoration: BoxDecoration(
                                            color: ColorConstant.gray400,
                                            borderRadius: BorderRadius.circular(
                                              getHorizontalSize(
                                                18,
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                      CustomImageView(
                                        imagePath: ImageConstant.imgImage4,
                                        height: getSize(
                                          45,
                                        ),
                                        width: getSize(
                                          45,
                                        ),
                                        alignment: Alignment.center,
                                      ),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: getPadding(
                                    left: 6,
                                    top: 17,
                                  ),
                                  child: Text(
                                    "Sport",
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle.txtRobotoRegular13,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Align(
                          alignment: Alignment.center,
                          child: Container(
                            padding: getPadding(
                              left: 50,
                              top: 24,
                              right: 50,
                              bottom: 24,
                            ),
                            decoration: AppDecoration.fillDeeppurple50.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder15,
                            ),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                Container(
                                  height: getVerticalSize(
                                    54,
                                  ),
                                  width: getHorizontalSize(
                                    50,
                                  ),
                                  margin: getMargin(
                                    top: 8,
                                  ),
                                  child: Stack(
                                    alignment: Alignment.center,
                                    children: [
                                      Align(
                                        alignment: Alignment.bottomCenter,
                                        child: Container(
                                          height: getVerticalSize(
                                            30,
                                          ),
                                          width: getHorizontalSize(
                                            41,
                                          ),
                                          decoration: BoxDecoration(
                                            color: ColorConstant.gray400,
                                            borderRadius: BorderRadius.circular(
                                              getHorizontalSize(
                                                20,
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                      CustomImageView(
                                        imagePath: ImageConstant.imgImage554x50,
                                        height: getVerticalSize(
                                          54,
                                        ),
                                        width: getHorizontalSize(
                                          50,
                                        ),
                                        alignment: Alignment.center,
                                      ),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: getPadding(
                                    left: 3,
                                    top: 20,
                                  ),
                                  child: Text(
                                    "Nature",
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle
                                        .txtDMSansRegular13DeeppurpleA200,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              Expanded(
                child: Padding(
                  padding: getPadding(
                    top: 15,
                  ),
                  child: GridView.builder(
                    shrinkWrap: true,
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      mainAxisExtent: getVerticalSize(
                        151,
                      ),
                      crossAxisCount: 2,
                      mainAxisSpacing: getHorizontalSize(
                        27,
                      ),
                      crossAxisSpacing: getHorizontalSize(
                        27,
                      ),
                    ),
                    physics: BouncingScrollPhysics(),
                    itemCount: 6,
                    itemBuilder: (context, index) {
                      return AnimalprofileItemWidget();
                    },
                  ),
                ),
              ),
            ],
          ),
        ),
        bottomNavigationBar: CustomButton(
          height: getVerticalSize(
            39,
          ),
          width: getHorizontalSize(
            135,
          ),
          text: "Continue",
          margin: getMargin(
            left: 120,
            right: 120,
            bottom: 40,
          ),
        ),
      ),
    );
  }
}
