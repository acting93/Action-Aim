const mainState={
    isMenu:false,
    formResponseStatus:null,
    formSpinner:false,
    isBasket:false,
    basketContent:[],
    idBasketElement:0,
    total:0
};

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

        case 'SHOW_BASKET':
            return{
                ...state,
                isBasket: action.isBasket
            }

        case 'PUT_BASKET':
            return{
                ...state,
                basketContent: state.basketContent.concat(action.basketContent),
            }
        
        case 'TOTAL_BASKET':
            return{
                ...state,
                total: state.total + action.total
            }

        case 'DELETE_ELEMENT_PRICE':
            return{
                ...state,
                total: state.total - action.price
            }

        case 'RESET_TOTAL_BASKET':
            return{
                ...state,
                total: 0
            }    

        case 'RESET_BASKET':
            return{
                ...state,
                basketContent: []
            }

        case 'ADD_ID_BASKET_ELEMENT':
            return{
                ...state,
                idBasketElement: state.idBasketElement + 1 
            }
        
        case 'REMOVE_ID_BASKET_ELEMENT':
            return{
                ...state,
                idBasketElement: state.idBasketElement - 1 
            }
        
        case 'REMOVE_BASKET_ELEMENT':
            
            let basketContentCopy = [...state.basketContent];

            const removedElementId = basketContentCopy.map(item => {
                if(item.id === action.id){
                    return item
                }
            });

            const indexElement = removedElementId.findIndex(item => item);

            basketContentCopy.splice(indexElement,1);

            return{
                ...state,
                basketContent: basketContentCopy
            }

        default: return state
    }
};

export default MainReducer;