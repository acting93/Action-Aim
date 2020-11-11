import React,{Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';


const withHOCPatterns =(Patterns)=>{
    return class extends Component{
        constructor(props){
            super(props)
            this.handleTravel = this.handleTravel.bind(this);
            this.handleMotto = this.handleMotto.bind(this);
            this.handleSport = this.handleSport.bind(this);
            this.showMobilePattern = this.showMobilePattern.bind(this);
        }

        handleMotto(){
            this.props.dispatchMotto();
        };

        handleSport(){
            this.props.dispatchSport();
        };

        handleTravel(){
            this.props.dispatchTravel();
        };

        showMobilePattern(){
            this.props.showMobilePattern();
        }

        render(){
            return(
                <Patterns
                    motto={this.handleMotto}
                    sport={this.handleSport}
                    travel={this.handleTravel}
                    showMobilePattern={this.showMobilePattern}
                    {...this.props}
                />
            )
        }
    }
};


const mapDispatchToProps = dispatch => {
    return{
        dispatchTravel: ()=> dispatch({type:'GET_PATTERN_TRAVEL'}),
        dispatchSport: ()=> dispatch({type:'GET_PATTERN_SPORT'}),
        dispatchMotto: ()=> dispatch({type:'GET_PATTERN_MOTTO'}),
        showMobilePattern: ()=> dispatch({type:'SHOW_PATTERN_CLICK',show:true})
    }
};

const composedHOCPatterns = compose(
    connect(null,mapDispatchToProps),
    withHOCPatterns
)

export default composedHOCPatterns;