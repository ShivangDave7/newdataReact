import 'dart:ui';
import 'package:flutter/material.dart';

class ColorConstant {
  static Color deepPurple5001 = fromHex('#e8ddff');

  static Color gray700 = fromHex('#585858');

  static Color gray400 = fromHex('#c5c5c5');

  static Color blueGray100 = fromHex('#d7d7d7');

  static Color blueGray400 = fromHex('#888888');

  static Color gray800 = fromHex('#3d3d3d');

  static Color red5001 = fromHex('#ffecf0');

  static Color teal50 = fromHex('#d2eae8');

  static Color gray50 = fromHex('#fafafa');

  static Color gray100 = fromHex('#f6f6f6');

  static Color red50 = fromHex('#ffebf0');

  static Color deepPurple50 = fromHex('#ebe0ff');

  static Color black900 = fromHex('#000000');

  static Color deepPurpleA200 = fromHex('#864afc');

  static Color whiteA700 = fromHex('#ffffff');

  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }
}
