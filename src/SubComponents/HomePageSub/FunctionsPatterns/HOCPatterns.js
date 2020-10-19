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

        render(){
            return(
                <Patterns
                    motto={this.handleMotto}
                    sport={this.handleSport}
                    travel={this.handleTravel}
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
        dispatchMotto: ()=> dispatch({type:'GET_PATTERN_MOTTO'})
    }
};

const composedHOCPatterns = compose(
    connect(null,mapDispatchToProps),
    withHOCPatterns
)

export default composedHOCPatterns;