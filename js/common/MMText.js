"use strict";

// Dependencies
// =============================================================================

import React from "react";
import ReactNative from "react-native";
import MMColors from "./MMColors";
import MMFonts from "./MMFonts";
import StyleSheet from "./MMStyleSheet";

// Text Elements
// =============================================================================

export function Text({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.text, style]} {...props} />;
}

export function Heading1({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h1, style]} {...props} />;
}

export function Heading2({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h2, style]} {...props} />;
}

export function Heading3({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h3, style]} {...props} />;
}

export function Heading4({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h4, style]} {...props} />;
}

export function Heading5({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.h5, style]} {...props} />;
}

export function Paragraph({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.p, style]} {...props} />;
}

// export function Hyperlink({style, ...props}: Object): ReactElement<ReactNative.Text> {
//   return <ReactNative.Text style={[styles.a, style]} {...props} />;
// }

export function HeaderTitle({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.Text style={[styles.headerTitle, style]} {...props} />;
}

export function HorizontalRule({
  style,
  ...props
}: Object): ReactElement<ReactNative.Text> {
  return <ReactNative.View style={[styles.hr, style]} {...props} />;
}

// Styles
// =============================================================================

const styles = StyleSheet.create({
  text: {
    fontFamily: MMFonts.default
  },
  h1: {
    fontFamily: MMFonts.h1,
    fontSize: MMFonts.normalize(30),
    lineHeight: MMFonts.lineHeight(37),
    color: MMColors.blue
  },
  h2: {
    fontFamily: MMFonts.h2,
    fontSize: MMFonts.normalize(23),
    lineHeight: MMFonts.lineHeight(27), //, 1.4
    color: MMColors.tangaroa,
    letterSpacing: -0.24
  },
  h3: {
    fontFamily: MMFonts.h3,
    fontSize: MMFonts.normalize(17),
    lineHeight: MMFonts.lineHeight(20),
    color: MMColors.sapphire,
    letterSpacing: -0.11
  },
  h4: {
    fontFamily: MMFonts.h4,
    fontSize: MMFonts.normalize(13),
    lineHeight: MMFonts.lineHeight(22),
    color: MMColors.tangaroa
  },
  h5: {
    fontFamily: MMFonts.helvetica,
    fontSize: MMFonts.normalize(13),
    lineHeight: MMFonts.lineHeight(22),
    color: MMColors.tangaroa
  },
  p: {
    fontFamily: MMFonts.p,
    fontSize: MMFonts.normalize(17),
    lineHeight: MMFonts.lineHeight(25), //, 1.25
    color: MMColors.tangaroa
  },
  // a: {
  //   color: MMColors.blue,
  //   textDecorationLine: 'underline',
  // },
  hr: {
    height: 1,
    backgroundColor: MMColors.colorWithAlpha("black", 0.1)
  },
  headerTitle: {
    fontFamily: MMFonts.fontWithWeight("helvetica", "semibold"),
    ios: { fontSize: 17 },
    android: { fontSize: 20 }
  }
});
