import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';
import 'package:shivang_s_application42/widgets/custom_button.dart';
import 'package:shivang_s_application42/widgets/custom_icon_button.dart';
import 'package:shivang_s_application42/widgets/custom_text_form_field.dart';

class SignInScreen extends StatelessWidget {
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
            left: 20,
            top: 44,
            right: 20,
            bottom: 44,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Card(
                clipBehavior: Clip.antiAlias,
                elevation: 0,
                margin: EdgeInsets.all(0),
                color: ColorConstant.deepPurple50,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadiusStyle.customBorderTL68,
                ),
                child: Container(
                  height: getSize(
                    130,
                  ),
                  width: getSize(
                    130,
                  ),
                  padding: getPadding(
                    left: 36,
                    top: 16,
                    right: 36,
                    bottom: 16,
                  ),
                  decoration: AppDecoration.fillDeeppurple50.copyWith(
                    borderRadius: BorderRadiusStyle.customBorderTL68,
                  ),
                  child: Stack(
                    alignment: Alignment.bottomCenter,
                    children: [
                      Align(
                        alignment: Alignment.topCenter,
                        child: Text(
                          "B",
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.left,
                          style: AppStyle.txtLobsterRegular57,
                        ),
                      ),
                      Align(
                        alignment: Alignment.bottomCenter,
                        child: Padding(
                          padding: getPadding(
                            bottom: 6,
                          ),
                          child: Text(
                            "Blogie",
                            overflow: TextOverflow.ellipsis,
                            textAlign: TextAlign.left,
                            style: AppStyle.txtLobsterRegular22,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Padding(
                  padding: getPadding(
                    left: 4,
                    top: 41,
                  ),
                  child: Text(
                    "Email",
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
                  left: 4,
                  top: 10,
                  right: 4,
                ),
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Padding(
                  padding: getPadding(
                    left: 4,
                    top: 19,
                  ),
                  child: Text(
                    "Password",
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
                  left: 4,
                  top: 10,
                  right: 4,
                ),
                textInputAction: TextInputAction.done,
              ),
              Padding(
                padding: getPadding(
                  left: 4,
                  top: 28,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CustomIconButton(
                      height: 30,
                      width: 30,
                      shape: IconButtonShape.RoundedBorder5,
                      padding: IconButtonPadding.PaddingAll4,
                      child: CustomImageView(
                        svgPath: ImageConstant.imgCheckmark,
                      ),
                    ),
                    Padding(
                      padding: getPadding(
                        left: 10,
                        top: 5,
                        bottom: 7,
                      ),
                      child: Text(
                        "Remember me?",
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.left,
                        style: AppStyle.txtDMSansMedium13,
                      ),
                    ),
                    Spacer(),
                    Padding(
                      padding: getPadding(
                        top: 7,
                        bottom: 5,
                      ),
                      child: Text(
                        "Forgot Password?",
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.left,
                        style: AppStyle.txtDMSansMedium13DeeppurpleA200,
                      ),
                    ),
                  ],
                ),
              ),
              CustomButton(
                height: getVerticalSize(
                  40,
                ),
                width: getHorizontalSize(
                  110,
                ),
                text: "Sign in",
                margin: getMargin(
                  top: 62,
                ),
              ),
              Spacer(),
              Padding(
                padding: getPadding(
                  bottom: 4,
                ),
                child: RichText(
                  text: TextSpan(
                    children: [
                      TextSpan(
                        text: "Don’t have an account?",
                        style: TextStyle(
                          color: ColorConstant.blueGray400,
                          fontSize: getFontSize(
                            14,
                          ),
                          fontFamily: 'DM Sans',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      TextSpan(
                        text: " ",
                        style: TextStyle(
                          color: ColorConstant.gray700,
                          fontSize: getFontSize(
                            14,
                          ),
                          fontFamily: 'DM Sans',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      TextSpan(
                        text: "Sign up",
                        style: TextStyle(
                          color: ColorConstant.deepPurpleA200,
                          fontSize: getFontSize(
                            14,
                          ),
                          fontFamily: 'DM Sans',
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                  textAlign: TextAlign.left,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
