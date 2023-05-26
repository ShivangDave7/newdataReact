import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';

class AppDecoration {
  static BoxDecoration get fillDeeppurple5001 => BoxDecoration(
        color: ColorConstant.deepPurple5001,
      );
  static BoxDecoration get fillGray50 => BoxDecoration(
        color: ColorConstant.gray50,
      );
  static BoxDecoration get fillBluegray100 => BoxDecoration(
        color: ColorConstant.blueGray100,
      );
  static BoxDecoration get fillDeeppurple50 => BoxDecoration(
        color: ColorConstant.deepPurple50,
      );
  static BoxDecoration get fillGray100 => BoxDecoration(
        color: ColorConstant.gray100,
      );
  static BoxDecoration get fillWhiteA700 => BoxDecoration(
        color: ColorConstant.whiteA700,
      );
}

class BorderRadiusStyle {
  static BorderRadius roundedBorder15 = BorderRadius.circular(
    getHorizontalSize(
      15,
    ),
  );

  static BorderRadius customBorderTL68 = BorderRadius.only(
    topLeft: Radius.circular(
      getHorizontalSize(
        68,
      ),
    ),
    topRight: Radius.circular(
      getHorizontalSize(
        68,
      ),
    ),
    bottomRight: Radius.circular(
      getHorizontalSize(
        68,
      ),
    ),
  );

  static BorderRadius circleBorder75 = BorderRadius.circular(
    getHorizontalSize(
      75,
    ),
  );

  static BorderRadius roundedBorder30 = BorderRadius.circular(
    getHorizontalSize(
      30,
    ),
  );

  static BorderRadius roundedBorder20 = BorderRadius.circular(
    getHorizontalSize(
      20,
    ),
  );
}

// Comment/Uncomment the below code based on your Flutter SDK version.

// For Flutter SDK Version 3.7.2 or greater.

double get strokeAlignInside => BorderSide.strokeAlignInside;

double get strokeAlignCenter => BorderSide.strokeAlignCenter;

double get strokeAlignOutside => BorderSide.strokeAlignOutside;

// For Flutter SDK Version 3.7.1 or less.

// StrokeAlign get strokeAlignInside => StrokeAlign.inside;
//
// StrokeAlign get strokeAlignCenter => StrokeAlign.center;
//
// StrokeAlign get strokeAlignOutside => StrokeAlign.outside;
