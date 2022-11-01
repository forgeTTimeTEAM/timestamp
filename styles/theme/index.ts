import "styled-components";

import { ITheme } from "./interface";

export const light: ITheme = {
  bg_linear_1: "#B5CAD9",
  bg_linear_2: "#C5C7C9",
  bg_button: "#232A43",
  color_logo_left: "#767A89",
  color_logo_right: "#01A5B1",
  font_color_primary: "#000",
  fill: "#3F7CAC",
  fillHeader: "#222222",
  transparent_gray: "rgba( 0 , 0 , 0  , 0.25) ",
  error: "#D00000",

  form: {
    bg_input: "#203D80",
    container: "#95AFBA",
    input_label_color: "#131313",
  },

  dashboard: {
    deg: "225deg",
    linear1: "#d6e6e8",
    linear2: "#d7d1d1",
    linear3: "#bbcfd6 ",
    sprints_card_p_color: "#4D4D4D",
    sprints_card_border: "#212529",
    sprints_card_hover: "#696D7D",
  },

  searchVideosContainer: {
    border_left: "#575366",
    linear_1: "#F9F5E3",
    linear_2: "#131313",
    bg_video_thumb: "#9FA4A9",
    video_thumb_border_left: "#d3e0f0",
    video_marker_span_color: "#3DFAFF",
    video_marker_h4_color: "#fff",
    bg_video_marker: "#373737",
  },
};

export const dark: ITheme = {
  bg_linear_1: "#253250",
  bg_linear_2: "#0F1425",
  bg_button: "#E5EBF3",
  color_logo_left: "#fff",
  color_logo_right: "#01A5B1",
  font_color_primary: "#fff",
  fill: "#2B3D64",
  fillHeader: "#fff",
  transparent_gray: "rgba( 0 , 0 , 0  , 0.25) ",
  error: "#ff6961",

  form: {
    bg_input: "rgb(31, 45, 97)",
    container: "#0e1a36",
    input_label_color: "#d3e0f0",
  },

  dashboard: {
    deg: "145deg",
    linear1: "#253250",
    linear2: "#0F1425",
    linear3: "#110F25",
    sprints_card_p_color: "#618bbe",
    sprints_card_border: "#407BFF",
    sprints_card_hover: "#0f2d51",
  },

  searchVideosContainer: {
    border_left: "#345995",
    linear_1: "#212529",
    linear_2: "#d3e0f0",
    bg_video_thumb: "#767a89",
    video_thumb_border_left: "#232a43",
    video_marker_span_color: "#3DFAFF",
    video_marker_h4_color: "#d3e0f0",
    bg_video_marker: "#11172b",
  },
};
