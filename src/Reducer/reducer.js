
export const reducer = (state, action) => {
    switch (action.type) {
      case "Remove":
        return state.filter((book) => {
            return book.title != action.book.title
         
      });

      case "Add": 
       return [ 
        ...state, 
        action.book
        
       ]

      default:
        return state;
    }
  };