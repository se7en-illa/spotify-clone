export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE AFTER FINISHED PROJECT
  //token:
  //"BQBNT6_7V3mwkc5MDLgSEZl1DzKr8HeKxr2u4N3dbzBDs7h-JrRVvZyiH7c6aAE2AYqwBza9lBUR5XQH51P2rgG9t7o_3tM1Uc9usD0-TKmvSdKxh6V2r_H6k4tDlp-mOMjyWnXVoIA0qtboYbgZfkGrSI42gmBen5YMmncdLWht67izHVO-c72WukCrlT5D",
};
const reducer = (state, action) => {
  console.log("💯💯💯💯💯💯", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS": {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case "SET_DISCOVER_WEEKLY": {
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    }
    default:
      return state;
  }
};

export default reducer;
