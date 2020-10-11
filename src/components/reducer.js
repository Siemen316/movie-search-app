export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        movies: [],
        isLoading: true,
      };
    case 'SUCCESS':
      return {
        movies: action.payload,
        isLoading: false,
        isModal: false,
        modalContent: 'MOVIE FOUND!',
      };
    case 'ALERT_MSG':
      return {
        movies: [],
        isLoading: false,
        isModal: true,
        modalContent: 'PLEASE ENTER THE SEARCH',
      };
    case 'INVALID_MOVIE':
      return {
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
        movies: [],
        isLoading: false,
        isModal: true,
        modalContent: 'ERROR 404',
      };
    default:
      return state;
  }
};
