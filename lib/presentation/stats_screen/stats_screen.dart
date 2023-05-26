import '../stats_screen/widgets/stats_item_widget.dart';
import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';
import 'package:shivang_s_application42/widgets/app_bar/appbar_image.dart';
import 'package:shivang_s_application42/widgets/app_bar/appbar_title.dart';
import 'package:shivang_s_application42/widgets/app_bar/custom_app_bar.dart';

class StatsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: ColorConstant.gray50,
            appBar: CustomAppBar(
                height: getVerticalSize(30),
                leadingWidth: 54,
                leading: AppbarImage(
                    height: getSize(30),
                    width: getSize(30),
                    svgPath: ImageConstant.imgArrowleft,
                    margin: getMargin(left: 24),
                    onTap: () {
                      onTapArrowleftone1(context);
                    }),
                centerTitle: true,
                title: AppbarTitle(text: "Stats")),
            body: Padding(
                padding: getPadding(left: 24, top: 39, right: 24),
                child: ListView.separated(
                    physics: BouncingScrollPhysics(),
                    shrinkWrap: true,
                    separatorBuilder: (context, index) {
                      return SizedBox(height: getVerticalSize(16));
                    },
                    itemCount: 4,
                    itemBuilder: (context, index) {
                      return StatsItemWidget();
                    }))));
  }

  onTapArrowleftone1(BuildContext context) {
    Navigator.pop(context);
  }
}
