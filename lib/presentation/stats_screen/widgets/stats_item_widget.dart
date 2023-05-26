import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';

// ignore: must_be_immutable
class StatsItemWidget extends StatelessWidget {
  StatsItemWidget();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: getPadding(
        all: 20,
      ),
      decoration: AppDecoration.fillGray100.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder30,
      ),
      child: Row(
        children: [
          Card(
            clipBehavior: Clip.antiAlias,
            elevation: 0,
            margin: EdgeInsets.all(0),
            color: ColorConstant.blueGray100,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadiusStyle.roundedBorder20,
            ),
            child: Container(
              height: getVerticalSize(
                87,
              ),
              width: getHorizontalSize(
                90,
              ),
              padding: getPadding(
                left: 23,
                top: 21,
                right: 23,
                bottom: 21,
              ),
              decoration: AppDecoration.fillBluegray100.copyWith(
                borderRadius: BorderRadiusStyle.roundedBorder20,
              ),
              child: Stack(
                children: [
                  CustomImageView(
                    svgPath: ImageConstant.imgSettings,
                    height: getSize(
                      43,
                    ),
                    width: getSize(
                      43,
                    ),
                    alignment: Alignment.center,
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: getPadding(
              left: 17,
              bottom: 2,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Container(
                  width: getHorizontalSize(
                    157,
                  ),
                  child: Text(
                    "",
                    maxLines: null,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtDMSansMedium14Gray700,
                  ),
                ),
                Padding(
                  padding: getPadding(
                    top: 7,
                  ),
                  child: Row(
                    children: [
                      Text(
                        "",
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.left,
                        style: AppStyle.txtDMSansRegular11,
                      ),
                      Padding(
                        padding: getPadding(
                          left: 20,
                        ),
                        child: Text(
                          "",
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.left,
                          style: AppStyle.txtDMSansRegular11,
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: getPadding(
                    top: 10,
                  ),
                  child: Text(
                    "See details",
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtDMSansRegular12,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
