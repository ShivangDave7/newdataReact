import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';

// ignore: must_be_immutable
class AnimalprofileItemWidget extends StatelessWidget {
  AnimalprofileItemWidget();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: getPadding(
        left: 33,
        top: 25,
        right: 33,
        bottom: 25,
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
                    imagePath: ImageConstant.imgImage42,
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
              "",
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtDMSansRegular13Gray700,
            ),
          ),
        ],
      ),
    );
  }
}
