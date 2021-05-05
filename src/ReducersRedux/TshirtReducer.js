import data from '../Shapes.json';
import colorsJSON from '../colorsSizes.json';

///funkcje wstępne aby zaladować elementy w poszczególnych komponentach 
const patternArray = JSON.parse(JSON.stringify(data.patterns));
const arrayNames = ["motto","sport","travel"];
const groupPattern = [...patternArray];
const randomArrayName = arrayNames[Math.floor(Math.random() * 3)]
const randomPattern = groupPattern.filter(element => {
    if(element.category === randomArrayName){
        return element
    };
});/// losowa grupa wzorów

const colorsSizes = JSON.parse(JSON.stringify(colorsJSON.colors)); //pobieram kolory z colorSizes.json

const tshirtState ={
    activeColor: 'white', //domyślny kolor biały przy pierwszym załadowaniu strony
    dataPattern:patternArray,//wzory z JSON
    activePattern:randomPattern,//losowa grupa wzorów przy załadowaniu kreatora
    tshirtPattern:'poland.png',//aktywny wzór na koszulce
    tshirtActive:true,
    colors:colorsSizes,
    isSize:true,
    activeSizePerColor: [colorsSizes[0]], //domyślny przypisany rozmiar do pierwszego koloru w tablicy 'white' - state.activeColor
    showPattern: null,//pokazuje wzory po kliknięciu na rodzaj na urządzeniach mobilnych
    choosenSize: 'L', //wybrany rozmiar koszulki przez klienta 
    topPositionPattern:0, //pozycja wzoru na koszulce
    summary: false, //pokaż podsumowanie po kliknięciu buttona 'kup'
    quantity:0, //ilość koszulek
    priceTshirt: 0, //cena koszulki
    tshirtInstruction:true, //pokaż/ukryj instrukcje do przesuwania wzoru
    sizeTable: false, // pokaż/ukryj tabelę rozmiarów
    allPatternsShow: false //pokaż/ukryj wszystkie wzory
}

const TshirtReducer =(state=tshirtState,action)=>{

    switch(action.type){
//akcja do wyboru koloru
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
        
//akcja do wyboru rodzaju wzroru SPORT
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
            
//akcja do wyboru rodzaju wzroru TRAVEL
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

//akcja do wyboru rodzaju wzroru MOTTO
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
//akcja pokazuje wszystkie wzory 
        case 'SHOW_ALL_PATTERNS':
            return{
                ...state,
                allPatternsShow:action.isShow            
            }

//akcja pobierająca wszystkie wzory 
        case 'GET_DATA_PATTERN':
            return{
                ...state,
                dataPattern: JSON.parse(JSON.stringify(data.patterns))
            }

//akcja wybierająca konkretny wzór        
        case 'GET_TSHIRT_PATTERN':
            return{
                ...state,
                tshirtPattern:action.getPattern
            }

//akcja dopasowująca rozmiary do wybranego koloru        
        case 'GET_SIZE_COLOR':
            let colorsSize = [...state.colors];

            const getSize = colorsSize.filter(element=>{
                if(element.color === action.color){//porównanie klikniętego koloru z kolerm z JSON
                    return element
                };
            });

            return{
                ...state,
                activeSizePerColor: getSize,
                isSize: true
            }

//akcja wybierająca rozmiar koszulki
        case 'CHOOSEN_SIZE':
            const sizesPerColor = [...state.activeSizePerColor][0].sizes;
            const filterSizesPerColor = sizesPerColor.filter(size =>{
                if(size.id === action.id){
                    return size;
                };
            });

            const mapSize = filterSizesPerColor.map(size => size.size);
            return{
                ...state,
                choosenSize:mapSize
            }

//akcja pokazująca/ukrywająca listę wzorów na urządzeniach mobilnych         
        case 'SHOW_PATTERN_CLICK':
            return{
                ...state,
                showPattern: action.show
            }

//akcja przekazuje pozycję wzoru do podsumowania
        case 'POSITION_PATTERN':
            return{
                ...state,
                topPositionPattern:action.positionPattern
            }

//akcja przekazuje ilość koszulek
        case 'QUANTITY_PRICE':
            return{
                ...state,
                quantity:action.quantity,
                priceTshirt:action.price
            }
        
//akcja pokazuje/ukrywa podsumowanie
        case 'SHOW_HIDE_SUMMARY':
            return{
                ...state,
                summary:action.summary
            }

//akcja ukrywa instrukcje
        case 'HIDE_INSTRUCTION':
            return{
                ...state,
                tshirtInstruction:false
            }

//akcja pokazuje/ukrywa tabele rozmiarów    
        case 'SIZES_TABLE':
            return{
                ...state,
                sizeTable: action.show
            }

//akcja resetująca wszystko na koszulce 
        case 'RESET_ALL':
            return{
                ...state,
                activeColor: 'white',
                dataPattern:patternArray,//wzory z JSON
                activePattern:randomPattern,//losowa grupa wzorów przy załadowaniu kreatora
                tshirtPattern:null,//aktywny wzór na koszulce
                tshirtActive:true,
                colors:colorsSizes,
                isSize:true,
                activeSizePerColor: [colorsSizes[0]], //domyślny przypisany rozmiar do pierwszego koloru w tablicy 'white' - state.activeColor
                showPattern: null//pokazuje wzory po kliknięciu na rodzaj na urządzeniach mobilnych
            }

        default: return state
    }
} 

export default TshirtReducer;