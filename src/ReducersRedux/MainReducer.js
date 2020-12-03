const mainState={
    isMenu:false,
    formResponseStatus:null,
    formSpinner:false
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
        
        case 'FORM_RESPONSE_STATUS':
            return{
                ...state,
                formResponseStatus: action.response
            }

        case 'FORM_SPINNER':
            return{
                ...state,
                formSpinner:action.spinner
            }

        default: return state
    }
}

export default MainReducer;