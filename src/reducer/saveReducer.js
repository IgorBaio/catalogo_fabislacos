const initialState = {
    itens: [],
    page: 0,
    user: {}
}

const saveReducer = (state = initialState, action) => {
    switch(action.type){
        case 'itens':
            state.itens = action.itens;
            return state;
        case 'page':
            state.page = action.page;
            return state;
        case 'login':
            state.user = action.user;
            return state;
        default:
            return state;
    }
}

export default saveReducer;