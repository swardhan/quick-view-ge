const initialState = {
    popup: {
        type: null,
        index: null,
        products: null
    }
}

function popup(state =  initialState, action) {
    switch(action.type){
        case 'QUICK_VIEW':
            return {
                popup: {
                    type: 'quick-view',
                    index: action.payload.index,
                    products: action.payload.products
                    }
                }
        case 'CLOSE_POPUP':
            return {
                popup: {
                    type: null,
                    index: null,
                    products: null
                }
            }
        default:
            return state;
    }
}

export default popup;