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

export const addIdbasketElement =()=>({
    type:'ADD_ID_BASKET_ELEMENT'
});

export const removeIdbasketElement =()=>({
    type:'REMOVE_ID_BASKET_ELEMENT'
});

export const removebasketElement =(id)=>({
    type:'REMOVE_BASKET_ELEMENT',
    id
});

export const totalBasket =(total)=>({
    type:'TOTAL_BASKET',
    total
});

export const resetTotalBasket =()=>({
    type:'RESET_TOTAL_BASKET'
});

export const deleteElementPrice =(price)=> ({
    type:'DELETE_ELEMENT_PRICE',
    price
});

