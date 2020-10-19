import React,{Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';


const RenderPropsToggler =(HOCMenu)=>{
   return class extends Component{
        constructor(props){
            super(props);
            this.state={
                widthPage: false,
            }

            this.handleWidth = this.handleWidth.bind(this);
            this.changeToggler = this.changeToggler.bind(this);
        };

        handleWidth(){
            const innerWidthPages = window.innerWidth;
            innerWidthPages <= 768 ? this.setState({widthPage: true}) : this.setState({widthPage: false});
        };

        changeToggler(){
            this.props.menu()
        };

        componentDidMount(){
            window.addEventListener('resize',this.handleWidth);
        };

        componentDidUpdate(){
            window.addEventListener('resize',this.handleWidth);
        };

        componentWillUnmount(){
            window.removeEventListener('resize',this.handleWidth);
        };

        render(){
            return(
                <>
                    <HOCMenu widthPage={this.state.widthPage} changeToggler={this.changeToggler} {...this.state}/>
                </>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return{
        menu: ()=> dispatch({type:'MENU'})
    }
};

const composedRenderPropsToggler = compose(
    connect(null,mapDispatchToProps),
    RenderPropsToggler
);


export default composedRenderPropsToggler;