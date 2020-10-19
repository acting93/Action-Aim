const mainState={
    isMenu:false,
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

        default: return state
    }
}

export default MainReducer;