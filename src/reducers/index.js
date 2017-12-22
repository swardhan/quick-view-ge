const initialState = {
    popup: null
}

function popup(state =  initialState, action) {
    switch(action.type){
        case 'QUICK_VIEW':
            return {
                popup: 'quick-view'
            }
        case 'CLOSE_POPUP':
            return {
                popup: null
            }
        default:
            return state;
    }
}

export default popup;