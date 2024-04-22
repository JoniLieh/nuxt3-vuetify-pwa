import { type ThemeDefinition } from "vuetify";
import vuetifyColors from 'vuetify/lib/util/colors.mjs'

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",//"#edf1f4",
    surface: "#FFFFFF",
    primary: "#2e4074",
    secondary: "#f3b605",
    accent: "#a6761c",
    info: vuetifyColors.lightBlue.base,
    warning: vuetifyColors.amber.darken4,
    error: vuetifyColors.deepOrange.accent4,
    success: vuetifyColors.green.darken1
  }
}

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    // background: "#edf1f4",
    // surface: "#FFFFFF",
    primary: "#2e4074",
    secondary: "#f3b605",
    accent: "#a6761c",
    info: vuetifyColors.lightBlue.base,
    warning: vuetifyColors.amber.darken4,
    error: vuetifyColors.deepOrange.accent4,
    success: vuetifyColors.green.darken1
  }
}