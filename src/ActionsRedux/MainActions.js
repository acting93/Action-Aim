export const menu =()=>({
    type: 'MENU'
});

export const setSpreadMenu =(isSticky)=>({
    type:'SPREAD_MENU',
    isSticky
});

export const isActiveToggler =(isActiveToggler)=>({
    type:'IS_ACTIVE_TOGGLER',
    isActiveToggler
});

export const FormSpinner =(spinner)=>({
    type:'FORM_SPINNER',
    spinner
});

export const FormSendingStatus =(status)=>({
    type:'FORM_SENDING_STATUS',
    status
});

export const showBasket =(isBasket)=>({
    type: 'SHOW_BASKET',
    isBasket
});

export const putBasket =(basketContent)=>({
    type:'PUT_BASKET',
    basketContent
});

export const resetBasket =()=>({
    type:'RESET_BASKET'
});

export const idbasketElement =()=>({
    type:'ID_BASKET_ELEMENT'
});

export const removebasketElement =(id)=>({
    type:'REMOVE_BASKET_ELEMENT',
    id
});

