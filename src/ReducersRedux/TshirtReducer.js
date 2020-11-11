import data from '../Shapes.json';
import colorsJSON from '../colorsSizes.json';


const patternArray = JSON.parse(JSON.stringify(data.patterns));
const arrayNames = ["motto","sport","travel"];
const groupPattern = [...patternArray];
const randomArrayName = arrayNames[Math.floor(Math.random() * 3)]
const randomPattern = groupPattern.filter(element => {
    if(element.category === randomArrayName){
        return element
    };
    return element
});/// losowa grupa wzorów
const colorsSizes = JSON.parse(JSON.stringify(colorsJSON.colors)); //pobieram kolory z colorSizes.json

const tshirtState ={
    activeColor: 'white', //domyślny kolor biały przy pierwszym załadowaniu strony
    dataPattern:patternArray,//wzory z JSON
    activePattern:randomPattern,//losowa grupa wzorów przy załadowaniu kreatora
    tshirtPattern:null,//aktywny wzór na koszulce
    tshirtActive:true,
    colors:colorsSizes,
    isSize:true,
    activeSizePerColor: [colorsSizes[0]], //domyślny przypisany rozmiar do pierwszego koloru w tablicy 'white' - state.activeColor
    showPattern: null//pokazuje wzory po kliknięciu na rodzaj na urządzeniach mobilnych
}

const TshirtReducer =(state=tshirtState,action)=>{

    switch(action.type){
        
        case 'GET_COLOR':

            let copyColorArray = [...state.colors];

            copyColorArray.filter(element => { //pobranie id z akcji, zmiana element.active na true co powoduje doanie stylu transform skew w elemencie koloru
                if(element.id === action.id){
                   return element.active = true
                }else{
                   return element.active = false
                }
            });

            return{
                ...state,
                activeColor: action.getColor,
                colors: copyColorArray 
            }

        case 'GET_PATTERN_SPORT':
            let sportPattern = [...state.dataPattern];
            const sportElement = sportPattern.filter(element =>{
                if(element.category === "sport"){
                    return element
                }
                return element
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
                return element
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
                return element
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
                if(element.color === action.color){//porównanie klikniętego koloru z kolerm z json
                    return element
                };
                return element
            });

            return{
                ...state,
                activeSizePerColor: getSize,
                isSize: true
            }
        
        case 'SHOW_PATTERN_CLICK':
            return{
                ...state,
                showPattern: action.show
            }

        default: return state
    }
} 

export default TshirtReducer;