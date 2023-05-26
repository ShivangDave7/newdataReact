import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:pin_code_fields/pin_code_fields.dart';
import 'package:shivang_s_application42/core/app_export.dart';
import 'package:shivang_s_application42/widgets/custom_button.dart';

class VerifyAccountScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        resizeToAvoidBottomInset: false,
        body: Container(
          width: double.maxFinite,
          padding: getPadding(
            left: 60,
            top: 31,
            right: 60,
            bottom: 31,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: getPadding(
                  left: 67,
                  right: 65,
                ),
                child: Text(
                  "Verify Account",
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.left,
                  style: AppStyle.txtDMSansMedium18,
                ),
              ),
              Container(
                width: getHorizontalSize(
                  255,
                ),
                margin: getMargin(
                  top: 27,
                ),
                child: Text(
                  "Please enter the verification code we sent to\nyour email ",
                  maxLines: null,
                  textAlign: TextAlign.center,
                  style: AppStyle.txtDMSansRegular13,
                ),
              ),
              Padding(
                padding: getPadding(
                  left: 18,
                  top: 38,
                  right: 17,
                ),
                child: PinCodeTextField(
                  appContext: context,
                  length: 4,
                  obscureText: false,
                  obscuringCharacter: '*',
                  keyboardType: TextInputType.number,
                  autoDismissKeyboard: true,
                  enableActiveFill: true,
                  inputFormatters: [
                    FilteringTextInputFormatter.digitsOnly,
                  ],
                  onChanged: (value) {},
                  pinTheme: PinTheme(
                    fieldHeight: getHorizontalSize(
                      40,
                    ),
                    fieldWidth: getHorizontalSize(
                      40,
                    ),
                    shape: PinCodeFieldShape.box,
                    borderRadius: BorderRadius.circular(
                      getHorizontalSize(
                        10,
                      ),
                    ),
                    selectedFillColor: ColorConstant.gray100,
                    activeFillColor: ColorConstant.gray100,
                    inactiveFillColor: ColorConstant.gray100,
                    inactiveColor: ColorConstant.fromHex("#1212121D"),
                    selectedColor: ColorConstant.fromHex("#1212121D"),
                    activeColor: ColorConstant.fromHex("#1212121D"),
                  ),
                ),
              ),
              CustomButton(
                height: getVerticalSize(
                  40,
                ),
                width: getHorizontalSize(
                  132,
                ),
                text: "Continue",
                margin: getMargin(
                  top: 33,
                ),
                fontStyle: ButtonFontStyle.DMSansMedium18,
              ),
              Padding(
                padding: getPadding(
                  top: 33,
                  bottom: 5,
                ),
                child: RichText(
                  text: TextSpan(
                    children: [
                      TextSpan(
                        text: "Dont receive the code?",
                        style: TextStyle(
                          color: ColorConstant.blueGray400,
                          fontSize: getFontSize(
                            13,
                          ),
                          fontFamily: 'DM Sans',
                          fontWeight: FontWeight.w400,
                        ),
                      ),
                      TextSpan(
                        text: " ",
                        style: TextStyle(
                          color: ColorConstant.black900,
                          fontSize: getFontSize(
                            13,
                          ),
                          fontFamily: 'DM Sans',
                          fontWeight: FontWeight.w400,
                        ),
                      ),
                      TextSpan(
                        text: "Resend code",
                        style: TextStyle(
                          color: ColorConstant.deepPurpleA200,
                          fontSize: getFontSize(
                            13,
                          ),
                          fontFamily: 'DM Sans',
                          fontWeight: FontWeight.w400,
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
