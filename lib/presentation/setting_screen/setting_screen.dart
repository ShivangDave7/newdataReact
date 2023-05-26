import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';
import 'package:shivang_s_application42/widgets/app_bar/appbar_image.dart';
import 'package:shivang_s_application42/widgets/app_bar/appbar_title.dart';
import 'package:shivang_s_application42/widgets/app_bar/custom_app_bar.dart';
import 'package:shivang_s_application42/widgets/custom_icon_button.dart';

class SettingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.gray50,
            appBar: CustomAppBar(
                height: getVerticalSize(58),
                leadingWidth: 65,
                leading: AppbarImage(
                    height: getSize(30),
                    width: getSize(30),
                    svgPath: ImageConstant.imgArrowleft,
                    margin: getMargin(left: 35, top: 13, bottom: 13),
                    onTap: () {
                      onTapArrowleftone(context);
                    }),
                centerTitle: true,
                title: AppbarTitle(text: "Setting")),
            body: Container(
                width: double.maxFinite,
                padding: getPadding(left: 35, top: 21, right: 35, bottom: 21),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Row(children: [
                        CustomIconButton(
                            height: 46,
                            width: 46,
                            child: CustomImageView(
                                svgPath: ImageConstant.imgGroup13)),
                        Padding(
                            padding: getPadding(left: 19, top: 15, bottom: 12),
                            child: Text("Membership",
                                overflow: TextOverflow.ellipsis,
                                textAlign: TextAlign.left,
                                style: AppStyle.txtDMSansRegular14Gray700))
                      ]),
                      Padding(
                          padding: getPadding(top: 15),
                          child: Row(children: [
                            CustomIconButton(
                                height: 46,
                                width: 46,
                                variant: IconButtonVariant.FillRed50,
                                child: CustomImageView(
                                    svgPath: ImageConstant.imgMail)),
                            Padding(
                                padding:
                                    getPadding(left: 19, top: 15, bottom: 11),
                                child: Text("Email settings",
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle.txtDMSansRegular14Gray700))
                          ])),
                      Padding(
                          padding: getPadding(top: 15),
                          child: Row(children: [
                            CustomIconButton(
                                height: 46,
                                width: 46,
                                variant: IconButtonVariant.FillTeal50,
                                child: CustomImageView(
                                    svgPath: ImageConstant.imgClock)),
                            Padding(
                                padding:
                                    getPadding(left: 18, top: 13, bottom: 13),
                                child: Text("Draft",
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle.txtDMSansRegular14Gray700))
                          ])),
                      Padding(
                          padding: getPadding(top: 15),
                          child: Row(children: [
                            CustomIconButton(
                                height: 46,
                                width: 46,
                                child: CustomImageView(
                                    svgPath: ImageConstant.imgVolume)),
                            Padding(
                                padding:
                                    getPadding(left: 18, top: 13, bottom: 13),
                                child: Text("Stats",
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle.txtDMSansRegular14Gray700))
                          ])),
                      Padding(
                          padding: getPadding(top: 20),
                          child: Row(children: [
                            CustomIconButton(
                                height: 46,
                                width: 46,
                                variant: IconButtonVariant.FillRed5001,
                                child: CustomImageView(
                                    svgPath: ImageConstant.imgWarning)),
                            Padding(
                                padding:
                                    getPadding(left: 18, top: 15, bottom: 12),
                                child: Text("Help",
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle.txtDMSansRegular14Gray700))
                          ])),
                      Padding(
                          padding: getPadding(top: 15, bottom: 5),
                          child: Row(children: [
                            CustomIconButton(
                                height: 46,
                                width: 46,
                                child: CustomImageView(
                                    svgPath: ImageConstant
                                        .imgArrowleftDeepPurpleA200)),
                            Padding(
                                padding:
                                    getPadding(left: 19, top: 15, bottom: 11),
                                child: Text("Sign Out",
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle.txtDMSansRegular14Gray700))
                          ]))
                    ]))));
  }

  onTapArrowleftone(BuildContext context) {
    Navigator.pop(context);
  }
}
