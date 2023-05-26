import 'package:flutter/material.dart';
import 'package:shivang_s_application42/presentation/sign_in_screen/sign_in_screen.dart';
import 'package:shivang_s_application42/presentation/sign_up_screen/sign_up_screen.dart';
import 'package:shivang_s_application42/presentation/verify_account_screen/verify_account_screen.dart';
import 'package:shivang_s_application42/presentation/reset_password_screen/reset_password_screen.dart';
import 'package:shivang_s_application42/presentation/topics_1_screen/topics_1_screen.dart';
import 'package:shivang_s_application42/presentation/topics_2_screen/topics_2_screen.dart';
import 'package:shivang_s_application42/presentation/setting_screen/setting_screen.dart';
import 'package:shivang_s_application42/presentation/succesfull_screen/succesfull_screen.dart';
import 'package:shivang_s_application42/presentation/stats_screen/stats_screen.dart';
import 'package:shivang_s_application42/presentation/app_navigation_screen/app_navigation_screen.dart';

class AppRoutes {
  static const String signInScreen = '/sign_in_screen';

  static const String signUpScreen = '/sign_up_screen';

  static const String verifyAccountScreen = '/verify_account_screen';

  static const String resetPasswordScreen = '/reset_password_screen';

  static const String topics1Screen = '/topics_1_screen';

  static const String topics2Screen = '/topics_2_screen';

  static const String settingScreen = '/setting_screen';

  static const String succesfullScreen = '/succesfull_screen';

  static const String statsScreen = '/stats_screen';

  static const String appNavigationScreen = '/app_navigation_screen';

  static Map<String, WidgetBuilder> routes = {
    signInScreen: (context) => SignInScreen(),
    signUpScreen: (context) => SignUpScreen(),
    verifyAccountScreen: (context) => VerifyAccountScreen(),
    resetPasswordScreen: (context) => ResetPasswordScreen(),
    topics1Screen: (context) => Topics1Screen(),
    topics2Screen: (context) => Topics2Screen(),
    settingScreen: (context) => SettingScreen(),
    succesfullScreen: (context) => SuccesfullScreen(),
    statsScreen: (context) => StatsScreen(),
    appNavigationScreen: (context) => AppNavigationScreen()
  };
}
