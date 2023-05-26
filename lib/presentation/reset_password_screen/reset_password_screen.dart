import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';
import 'package:shivang_s_application42/widgets/custom_button.dart';
import 'package:shivang_s_application42/widgets/custom_text_form_field.dart';

class ResetPasswordScreen extends StatelessWidget {
  TextEditingController edittextController = TextEditingController();

  TextEditingController edittextoneController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        resizeToAvoidBottomInset: false,
        body: Container(
          width: double.maxFinite,
          padding: getPadding(
            left: 24,
            top: 29,
            right: 24,
            bottom: 29,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Text(
                "Reset Password",
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.left,
                style: AppStyle.txtDMSansMedium18,
              ),
              Container(
                width: getHorizontalSize(
                  288,
                ),
                margin: getMargin(
                  left: 20,
                  top: 28,
                  right: 19,
                ),
                child: Text(
                  "Enter your old password and new password below.\nWe’re just being extra safe  ",
                  maxLines: null,
                  textAlign: TextAlign.center,
                  style: AppStyle.txtDMSansRegular13,
                ),
              ),
              Card(
                clipBehavior: Clip.antiAlias,
                elevation: 0,
                margin: getMargin(
                  top: 29,
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
                    all: 44,
                  ),
                  decoration: AppDecoration.fillDeeppurple5001.copyWith(
                    borderRadius: BorderRadiusStyle.circleBorder75,
                  ),
                  child: Stack(
                    children: [
                      CustomImageView(
                        imagePath: ImageConstant.imgImage7,
                        height: getSize(
                          61,
                        ),
                        width: getSize(
                          61,
                        ),
                        alignment: Alignment.center,
                      ),
                    ],
                  ),
                ),
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Padding(
                  padding: getPadding(
                    top: 32,
                  ),
                  child: Text(
                    "New password",
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtDMSansMedium16,
                  ),
                ),
              ),
              CustomTextFormField(
                focusNode: FocusNode(),
                autofocus: true,
                controller: edittextController,
                margin: getMargin(
                  top: 8,
                ),
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Padding(
                  padding: getPadding(
                    top: 22,
                  ),
                  child: Text(
                    "Confirm password",
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtDMSansMedium16,
                  ),
                ),
              ),
              CustomTextFormField(
                focusNode: FocusNode(),
                autofocus: true,
                controller: edittextoneController,
                margin: getMargin(
                  top: 8,
                ),
                textInputAction: TextInputAction.done,
              ),
              Spacer(),
              CustomButton(
                height: getVerticalSize(
                  39,
                ),
                width: getHorizontalSize(
                  144,
                ),
                text: "Submit",
                margin: getMargin(
                  bottom: 31,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
