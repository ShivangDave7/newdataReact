import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';

// ignore: must_be_immutable
class ArtcolumnItemWidget extends StatelessWidget {
  ArtcolumnItemWidget();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: getPadding(
        left: 46,
        top: 25,
        right: 46,
        bottom: 25,
      ),
      decoration: AppDecoration.fillDeeppurple50.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder15,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Align(
            alignment: Alignment.centerRight,
            child: Container(
              height: getSize(
                54,
              ),
              width: getSize(
                54,
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
                        bottom: 6,
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
                    imagePath: ImageConstant.imgImage1,
                    height: getSize(
                      54,
                    ),
                    width: getSize(
                      54,
                    ),
                    alignment: Alignment.center,
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: getPadding(
              left: 18,
              top: 19,
            ),
            child: Text(
              "",
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtDMSansRegular13DeeppurpleA200,
            ),
          ),
        ],
      ),
    );
  }
}
