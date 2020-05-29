import { createMuiTheme } from "@material-ui/core/styles";

import * as colors from "./shared/constants/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.DARK_COLOR,
      contrastText: colors.WHITISH_COLOR,
    },
    secondary: {
      main: colors.LIGHTER_DARK_COLOR,
      contrastText: colors.WHITISH_COLOR,
    },
    warning: {
      main: colors.YELLOW,
    },
    error: {
      main: colors.RED,
    },
    success: {
      main: colors.MIDDLE_COLOR,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
