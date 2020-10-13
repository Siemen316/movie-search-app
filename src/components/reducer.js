export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        initialMsg: false,
        movies: [],
        isLoading: true,
      };
    case 'SUCCESS':
      return {
        initialMsg: false,
        movies: action.payload,
        isLoading: false,
        isModal: false,
        modalContent: 'MOVIE FOUND!',
      };
    case 'ALERT_MSG':
      return {
        initialMsg: true,
        movies: [],
        isLoading: false,
        isModal: true,
        modalContent: 'PLEASE ENTER THE SEARCH',
      };
    case 'INVALID_MOVIE':
      return {
        initialMsg: true,
        movies: [],
        isLoading: false,
        isModal: true,
        modalContent: 'MOVIE NOT FOUND!',
      };
    case 'MODAL_FUN':
      return {
        ...state,
        isModal: false,
      };
    case 'ERROR':
      return {
        initialMsg: true,
        movies: [],
        isLoading: false,
        isModal: true,
        modalContent: 'ERROR 404',
      };
    default:
      return state;
  }
};
