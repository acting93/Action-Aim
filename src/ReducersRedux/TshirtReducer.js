import data from '../Shapes.json';
import colors from '../colorsSizes.json';
 
const patternArray = JSON.parse(JSON.stringify(data.patterns));
const arrayNames = ["motto","sport","travel"];
const a = [...patternArray];
const randomArrayName = arrayNames[Math.floor(Math.random() * 3)]
const filterPattern = a.filter(element => {
    if(element.category === randomArrayName){
        return element
    };
});

const colorsSizes = JSON.parse(JSON.stringify(colors.colors));

const tshirtState ={
    activeColor: 'white',
    dataPattern:patternArray,
    activePattern:filterPattern,
    tshirtPattern:[],
    tshirtActive:true,
    colors:colorsSizes,
    isSize:false
}
const TshirtReducer =(state=tshirtState,action)=>{

    switch(action.type){
        case 'GET_COLOR':
            return{
                ...state,
                activeColor: action.getColor
            }

        case 'GET_PATTERN_SPORT':
            let sportPattern = [...state.dataPattern];
            const sportElement = sportPattern.filter(element =>{
                if(element.category === "sport"){
                    return element
                }
            })
            return{
                ...state,
                activePattern: sportElement
            }

        case 'GET_PATTERN_TRAVEL':
            let travelPattern = [...state.dataPattern];
            const travelElement = travelPattern.filter(element =>{
                if(element.category === "travel"){
                    return element
                }
            })

            return{
                ...state,
                activePattern: travelElement
            }

        case 'GET_PATTERN_MOTTO':
            let mottoPattern = [...state.dataPattern];
            const mottoElement = mottoPattern.filter(element =>{
                if(element.category === "motto"){
                    return element
                }
            })            
            return{
                ...state,
                activePattern: mottoElement
            }

        case 'GET_DATA_PATTERN':
            return{
                ...state,
                dataPattern: JSON.parse(JSON.stringify(data.patterns))
            }
        
        case 'GET_TSHIRT_PATTERN':
            return{
                ...state,
                tshirtPattern:action.getPattern
            }
        
        case 'GET_SIZE_COLOR':
            let colorsSize = [...state.colors];

            const getSize = colorsSize.filter(element=>{
                if(element.color === action.color){
                    return element
                };
            });

            return{
                ...state,
                activeSizePerColor: getSize,
                isSize: true
            }

        default: return state
    }
} 

export default TshirtReducer;