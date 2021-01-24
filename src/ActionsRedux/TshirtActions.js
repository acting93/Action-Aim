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