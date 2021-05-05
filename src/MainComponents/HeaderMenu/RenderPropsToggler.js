import React,{Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';


const RenderPropsToggler =(HOCMenu)=>{
   return class extends Component{
        constructor(props){
            super(props);
            this.state={
                less768px: false,
            }

            this.handleWidth = this.handleWidth.bind(this);
            this.changeToggler = this.changeToggler.bind(this);
        };

        handleWidth(){
            const innerWidthPage = window.innerWidth;
            innerWidthPage <= 768 ? this.setState({less768px: true}) : this.setState({less768px: false});
        };

        changeToggler(){
            this.props.menu()
        };

        componentDidMount(){
            this.handleWidth();
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
                    <HOCMenu less768px={this.state.less768px} changeToggler={this.changeToggler} {...this.state}/>
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