import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';

class SuccesfullScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.gray50,
        body: Container(
          width: double.maxFinite,
          padding: getPadding(
            left: 42,
            top: 29,
            right: 42,
            bottom: 29,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Text(
                "Successful",
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.left,
                style: AppStyle.txtDMSansMedium18Black900,
              ),
              Card(
                clipBehavior: Clip.antiAlias,
                elevation: 0,
                margin: getMargin(
                  top: 80,
                ),
                color: ColorConstant.deepPurple5001,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadiusStyle.circleBorder75,
                ),
                child: Container(
                  height: getSize(
                    150,
                  ),
                  width: getSize(
                    150,
                  ),
                  padding: getPadding(
                    all: 33,
                  ),
                  decoration: AppDecoration.fillDeeppurple5001.copyWith(
                    borderRadius: BorderRadiusStyle.circleBorder75,
                  ),
                  child: Stack(
                    children: [
                      CustomImageView(
                        imagePath: ImageConstant.imgImage11,
                        height: getSize(
                          83,
                        ),
                        width: getSize(
                          83,
                        ),
                        alignment: Alignment.center,
                      ),
                    ],
                  ),
                ),
              ),
              Container(
                width: getHorizontalSize(
                  290,
                ),
                margin: getMargin(
                  top: 47,
                  bottom: 5,
                ),
                child: Text(
                  "Congratulations! your blog has been published.\nnow your blog can be seen by many people.\ncontinue to develop your talents ",
                  maxLines: null,
                  textAlign: TextAlign.center,
                  style: AppStyle.txtDMSansRegular14,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
