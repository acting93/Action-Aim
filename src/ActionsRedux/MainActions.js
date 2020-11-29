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

export const FormSendingStatus =(status)=>({
    type:'FORM_SENDING_STATUS',
    status
});
