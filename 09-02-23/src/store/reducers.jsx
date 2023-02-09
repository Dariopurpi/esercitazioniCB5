import { initialStateBackup } from "./index";

const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        noteList: state.noteList.filter((item) => item.id !== action.payload),
      };
    case "SEARCH_TITLE":
      return {
        ...state,
        noteList: initialStateBackup.noteList.filter((item) =>
          item.title.includes(action.payload)
        ),
      };
  }
};

export default globalReducer;
