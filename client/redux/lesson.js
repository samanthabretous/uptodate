// -------------------
// types
// -------------------
export const DROPPED_FOLDER = 'dropped_folder';

// -------------------
// actions
// -------------------

export const droppedFolderAction = (folderPath) => ({
  type: DROPPED_FOLDER,
  folderPath,
});

// -------------------
// reducer
// -------------------


const initialState = {
  folderPath: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DROPPED_FOLDER:
      return Object.assign({}, state, { folderPath: action.folderPath });
    default:
      return state;
  }
};
