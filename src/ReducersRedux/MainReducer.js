const mainState={
    isMenu:false,
    formSendingStatus:null
}

const MainReducer =(state=mainState,action)=>{
    switch(action.type){
        case 'MENU':
            return{
                ...state,
                isMenu:!state.isMenu
            }

        case 'IS_ACTIVE_TOGGLER':
            return{
                ...state,
                isMenu: action.isActiveToggler
            }

        case 'SPREAD_MENU':
            return{
                ...state,
                isSticky: action.isSticky
            }
        
        case 'FORM_SENDING_STATUS':
            return{
                ...state,
                formSendingStatus:action.status
            }

        default: return state
    }
}

export default MainReducer;