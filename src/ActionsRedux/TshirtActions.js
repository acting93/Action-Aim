export const getColor =(getColor,id,active)=>({
    type:'GET_COLOR',
    getColor,
    id,
    active
});

export const mapColor =()=>({
    type:'MAP_COLOR',
});

export const getPatternSport =(getPattern,id)=>({
    type:'GET_PATTERN_SPORT',
    getPattern,
    id
});

export const getPatternMotto =(getPattern,id)=>({
    type:'GET_PATTERN_MOTTO',
    getPattern,
    id
});

export const getPatternTravel =(getPattern,id)=>({
    type:'GET_PATTERN_TRAVEL',
    getPattern,
    id
});

export const showAllPatterns =(isShow)=>({
    type:'SHOW_ALL_PATTERNS',
    isShow
});

export const getDataPattern =()=>({
    type:'GET_DATA_PATTERN'
});

export const getTshirtPattern =(getPattern,id)=>({
    type:'GET_TSHIRT_PATTERN',
    getPattern,
    id
});

export const activeFirstPatterns =()=>({
    type:'ACTIVE_FIRST_PATTERNS',
});

export const getSizeColor =(color,isSize)=>({
    type:'GET_SIZE_COLOR',
    color,
    isSize
});

export const choosenSize =(id)=>({
    type:'CHOOSEN_SIZE',
    id
});

export const ShowPatternClick =(show)=>({
    type:'SHOW_PATTERN_CLICK',
    show
});

export const ResetAll =()=>({
    type:'RESET_ALL'
});

export const positionPattern =(postionPattern)=>({
    type:'POSITION_PATTERN',
    postionPattern
});

export const showHideSummary =(summary)=>({
    type:'SHOW_HIDE_SUMMARY',
    summary
});

export const quantityPrice =(quantity,price)=>({
    type:'QUANTITY_PRICE',
    quantity,
    price
});

export const hideInstruction =()=>({
    type:'HIDE_INSTRUCTION'
});

export const showHideSizesTable =(show)=>({
    type:'SIZES_TABLE',
    show
});