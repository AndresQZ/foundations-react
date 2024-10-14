
export const reducer = (state, action) => {
  debugger
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

      case "rate":
        const books =  state.filter((book) => book.title != action.payload.title)
        return [
          ...books,
         action.payload
        ]
        
      default:
        return state;
    }
  };