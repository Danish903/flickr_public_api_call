import { GET_DATA } from "./actionTypes";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "./asyncAction";
import $ from "jquery";

const url =
  "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

export const fetchData = data => ({
  type: GET_DATA,
  data
});

export const getData = (tags = "") => async dispatch => {
  dispatch(asyncActionStart());
  try {
    const data = await $.ajax({
      url,
      dataType: "jsonp",
      data: { tags, format: "json" }
    });

    dispatch(asyncActionFinish());
    dispatch(fetchData(data.items));
  } catch (error) {
    dispatch(asyncActionError("Error fetching data"));
  }
};
