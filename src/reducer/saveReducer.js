const initialState = {
    itens: [],
    page: 0,
    user: {},
    produtos:[]
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
        case 'set_initials_state':
            state = initialState
            return state;
        case 'set_photos_data':
            state.produtos = action.produtos
            return state;
        default:
            return state;
    }
}

export default saveReducer;