const initialState = {
    itens: [],
    page: 0
}

const saveReducer = (state = initialState, action) => {
    switch(action.type){
        case 'itens':
            state.itens = action.itens;
            return state;
        case 'page':
            state.page = action.page;
            return state;
        default:
            return state;
    }
}

export default saveReducer;