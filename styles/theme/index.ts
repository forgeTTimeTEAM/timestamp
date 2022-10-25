import "styled-components";
import { ITheme } from "./interface";

export const light: ITheme = {
  bg_linear_1: "#B5CAD9",
  bg_linear_2: "#C5C7C9",
  bg_input: "#232A43",
  bg_header: "#E5EBF3;",
  bg_header_form: "#D3E0F0",
  font_color_primary: "#000",
  font_color_second: "#CED9E7",
  fill: "#407BFF",
  color_place_holder: "#C5C5C5",
  transparent_gray: "rgba( 0 , 0 , 0  , 0.25) ",
  fillHeader: "#222",
  bg_button: "#232A43",
  color_logo_left: "#111",
  color_logo_right: "#01A5B1",

  card: {
    background: "#d3e0f0",
    color: "black",
    colorP: "#4d4d4d",
    colorIcon: "#407bff",
    border: "#407bff",
  },

  dashboard: {
    deg: "225deg",
    linear1: "#B5CAD9",
    linear2: "#E5EBF3",
    scrollbarDeg: "225deg",
    scrollbar1: "#B5CAD9",
    scrollbar2: "#E5EBF3",
    transparent_gray: "rgba(0, 0, 0, 0.25)",
  },

  profile: {
    button_background: "#d3e0f0",
    icon_color: "#0f2d51",
    dropdown_background: "#0f2d51",
    font_color: "#d3e0f0",
  },

  containerSprints: {
    deg: "225deg",
    linear1: "#B5CAD9",
    linear2: "#E5EBF3",
    background: "rgba(255, 255, 255, 0.29)",
    background_secondary: "#D3E0F0",
    background_extra: "#0F2D51",
    box_shadow: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    font_color_primary: "#232a43",
    font_color_secondary: "#009FFD",
    font_color_mark: "rgba(35, 42, 67, 0.87)",
    font_color_button: "#bcc3d9",
    color_video: "#D3E0F0",
    colorDivBox: "#fff",
    scroll_bar: "#fff",
    color_li_container: "#232a43",
    color_empty_marks: "rgba(68, 73, 79, 0.59)",
  },
  inputSearchVideo: {
    background: "rgba(35, 42, 67, 1)",
    placeholder: "rgba(74, 95, 142, 1)",
    icon: "rgba(211, 224, 240, 1)",
    font_color: "white",
  },

  containerSearchVideo: {
    title_card: "rgba(35, 42, 67, 1)",
    background: "rgba(255, 255, 255, 0.29);",
  },

  modalEditVideo: {
    bg_modal_edit: "#DCE1DE",
    font_color_input: "#EAF6FF",
    font_color_marker: "#010001",
    bg_input_modal: "#60695C",
    bg_button_save: "#B3DEE2",
    font_color_button_save: "#0D090A",
    font_color_input_placeholder: "#EEE5E9",
    font_color_primary_modal: "#009FFD",
    font_color_h1: "#0C1618",
    font_color_button_modal: " #d3e0f0",
    bg_marker_modal: "#BCC3D9",
    bg_button_modal: "#12b886",
    font_color_icon_clear_url: "#DA2C1A",
  },
};

export const dark: ITheme = {
  bg_linear_1: "#253250",
  bg_linear_2: "#0F1425",
  bg_input: "#1F2D61",
  bg_header: "rgba(0, 0, 0, 0.08);",
  bg_header_form: "#D3E0F0",
  font_color_primary: "#fff",
  font_color_second: "#CED9E7",
  fill: "#2B3D64",
  color_place_holder: "#C5C5C5",
  transparent_gray: "rgba( 0 , 0 , 0  , 0.25) ",
  fillHeader: "#fff",
  bg_button: "#E5EBF3",
  color_logo_left: "#fff",
  color_logo_right: "#01A5B1",

  card: {
    background: "#0F2D51",
    color: "#D3E0F0",
    colorP: "#618BBE",
    colorIcon: "#D3E0F0",
    border: "#D3E0F0",
  },

  dashboard: {
    deg: "145deg",
    linear1: "#253250",
    linear2: "#0F1425",
    scrollbarDeg: "145deg",
    scrollbar1: "#253250",
    scrollbar2: "#0F1425",
    transparent_gray: "rgba(0, 0, 0, 0.25)",
  },

  profile: {
    button_background: "#0f2d51",
    icon_color: "#d3e0f0",
    dropdown_background: "#d3e0f0",
    font_color: "#0f2d51",
  },

  containerSprints: {
    deg: "145deg",
    linear1: "#253250",
    linear2: "#0F1425",
    background: "#0F2D51",
    background_secondary: "rgba(211, 224, 240, 0.4)",
    background_extra: "#0F2D51",
    box_shadow: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    font_color_primary: "#D3E0F0",
    font_color_secondary: "#009FFD",
    font_color_mark: "rgba(255, 255, 255, 0.7)",
    font_color_button: "#fff",
    color_video: "rgba(211, 224, 240, 0.4)",
    colorDivBox: "rgba(15, 45, 81, 0.5)",
    scroll_bar: "rgba(15, 45, 81, 0)",
    color_li_container: "#fff",
    color_empty_marks: "rgba(211, 224, 240, 0.59)",
  },

  inputSearchVideo: {
    background: "rgba(211, 224, 240, 1)",
    placeholder: "rgba(74, 95, 142, 1)",
    icon: "rgba(35, 42, 67, 1)",
    font_color: "black",
  },

  containerSearchVideo: {
    title_card: "rgba(211, 224, 240, 1)",
    background: "rgba(17, 23, 43, 0.54);",
  },

  modalEditVideo: {
    bg_modal_edit: "#0d1b2d",
    font_color_input: "#fbf5f3",
    font_color_marker: "#EEE5E9",
    bg_input_modal: "#555d76",
    bg_button_save: "#1B264F",
    font_color_button_save: "#d3e0f0",
    font_color_input_placeholder: "rgba(255, 255, 255, 0.29)",
    font_color_primary_modal: "#009FFD",
    font_color_h1: "#009FFD",
    font_color_button_modal: "#d3e0f0",
    bg_marker_modal: "#0b132b",
    bg_button_modal: "#12b886",
    font_color_icon_clear_url: "#f22",
  },
};
