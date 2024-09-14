import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  TOGGLE_NOTE,
} from "../actions/noteActions";

const initialState = [];

const notesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case UPDATE_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, ...action.payload.updateNote }
          : note
      );
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    case TOGGLE_NOTE:
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    default:
      return state;
  }
};

export default notesReducers;
