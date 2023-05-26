import '../topics_1_screen/widgets/artcolumn_item_widget.dart';
import 'package:flutter/material.dart';
import 'package:shivang_s_application42/core/app_export.dart';

class Topics1Screen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        body: Container(
          width: double.maxFinite,
          padding: getPadding(
            left: 24,
            right: 24,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: getPadding(
                  top: 23,
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Container(
                      width: getHorizontalSize(
                        123,
                      ),
                      child: Text(
                        "Welcome to\nBlogie!",
                        maxLines: null,
                        textAlign: TextAlign.center,
                        style: AppStyle.txtDMSansMedium22,
                      ),
                    ),
                    Container(
                      width: getHorizontalSize(
                        242,
                      ),
                      margin: getMargin(
                        left: 43,
                        top: 38,
                        right: 42,
                      ),
                      child: Text(
                        "Select at least 3 topics to personalize\nyour homepage",
                        maxLines: null,
                        textAlign: TextAlign.center,
                        style: AppStyle.txtDMSansRegular14,
                      ),
                    ),
                    Expanded(
                      child: Padding(
                        padding: getPadding(
                          top: 39,
                        ),
                        child: GridView.builder(
                          shrinkWrap: true,
                          gridDelegate:
                              SliverGridDelegateWithFixedCrossAxisCount(
                            mainAxisExtent: getVerticalSize(
                              151,
                            ),
                            crossAxisCount: 2,
                            mainAxisSpacing: getHorizontalSize(
                              27,
                            ),
                            crossAxisSpacing: getHorizontalSize(
                              27,
                            ),
                          ),
                          physics: BouncingScrollPhysics(),
                          itemCount: 8,
                          itemBuilder: (context, index) {
                            return ArtcolumnItemWidget();
                          },
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
