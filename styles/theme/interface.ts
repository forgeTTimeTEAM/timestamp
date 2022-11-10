export interface ITheme {
  bg_linear_1: string;
  bg_linear_2: string;
  bg_button: string;
  color_logo_left: string;
  color_logo_right: string;
  font_color_primary: string;
  fill: string;
  fillHeader: string;
  transparent_gray: string;
  error: string;

  form: {
    bg_input: string;
    container: string;
    input_label_color: string;
  };

  dashboard: {
    deg: string;
    linear1: string;
    linear2: string;
    linear3: string;
    sprints_card_p_color: string;
    sprints_card_border: string;
    sprints_card_hover: string;
  };

  searchVideosContainer: {
    border_left: string;
    linear_1: string;
    linear_2: string;
    bg_video_thumb: string;
    video_thumb_border_left: string;
    video_marker_span_color: string;
    video_marker_h4_color: string;
    bg_video_marker: string;
  };

  modalEditVideo: {
    bg_modal_edit: string;
    font_color_input: string;
    font_color_marker: string;
    bg_input_modal: string;
    bg_button_save: string;
    font_color_button_save: string;
    font_color_input_placeholder: string;
    font_color_primary_modal: string;
    font_color_h1: string;
    font_color_button_modal: string;
    bg_marker_modal: string;
    bg_button_modal: string;
    font_color_icon_clear_url: string;
  };
}
