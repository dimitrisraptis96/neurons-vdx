import { extendTheme } from "@chakra-ui/theme-utils";

export const PRIMARY_COLOR = "#FFDE79";

export const gray = {
  50: "#F7FAFC",
  100: "#EDF2F7",
  200: "#E2E8F0",
  300: "#CBD5E0",
  400: "#A0AEC0",
  500: "#718096",
  600: "#48484A",
  700: "#2B2B2E",
  800: "#1A1A1D",
  900: "#0E0E11",
};

export const primaryCta = {
  color: "gray.900",
  bg: PRIMARY_COLOR,
  borderRadius: "100px",
  fontSize: "14px",
  fontWeight: "600",
  border: `2px solid #FFDE79`,
  transition: "all 0.3s ease-out",
  px: "25px",
  py: "15px",
  maxH: "auto",
  h: "auto",
  lineHeight: 1,
  _hover: {
    color: "gray.900",
    bg: PRIMARY_COLOR,
  },
  _focus: {
    color: "gray.900",
    bg: PRIMARY_COLOR,
  },
  _active: {
    color: "gray.900",
    bg: PRIMARY_COLOR,
  },
  _expanded: {
    color: "gray.900",
    bg: PRIMARY_COLOR,
  },
};

export const secondaryCta = {
  color: PRIMARY_COLOR,
  bg: "none",
  border: `2px solid ${PRIMARY_COLOR}`,
  borderRadius: "100px",

  fontSize: "14px",
  fontWeight: "600",
  transition: "all 0.3s ease-out",
  lineHeight: 1,
  px: "25px",
  py: "15px",
  maxH: "auto",
  h: "auto",
  _hover: {
    // color: "white",
    background: "black",
  },
  _focus: {
    color: PRIMARY_COLOR,
    bg: "none",
    border: `2px solid ${PRIMARY_COLOR}`,
  },
  _active: {
    color: PRIMARY_COLOR,
    bg: "none",
    border: `2px solid ${PRIMARY_COLOR}`,
  },
  _expanded: {
    color: PRIMARY_COLOR,
    bg: "none",
    border: `2px solid ${PRIMARY_COLOR}`,
  },
};

export const inputStyles = {
  mt: 0,
  w: "100%",
  fontSize: "14px",
  borderRadius: "100px",
  bg: "gray.800",
  color: "gray.100",
  borderWidth: "1px",
  borderColor: "gray.700",
  _hover: {
    bg: "gray.800",
    borderWidth: "2px",
    shadow: "none",
  },
  _focus: {
    bg: "gray.800",
    borderWidth: "2px",
    borderColor: "brand",
    shadow: "none",
  },
  _active: {
    borderColor: "gray.700",
    borderWidth: "2px",
    borderColor: "brand",
    shadow: "none",
  },
};

export const cssLimitLinesToN = (n) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  lineClamp: n + "",
  "-webkit-line-clamp": n + "",
  "-webkit-box-orient": "vertical",
});

export const shadow =
  "0px 0px 100px rgba(0, 0, 0, 0.15), 0px 0px 250px -50px rgba(0, 0, 0, 0.25), 0px 0px 40px rgba(0, 0, 0, 0.05)";

export const theme = extendTheme({
  colors: {
    brand: PRIMARY_COLOR,
    gray,
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
});

export const buttonBulkStyler = (styles) => ({
  ...styles,
  _hover: {
    ...styles,
  },
  _focus: {
    ...styles,
  },
  _pressed: {
    ...styles,
  },
  _expanded: {
    ...styles,
  },
  _active: {
    ...styles,
  },
});
