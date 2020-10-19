import React,{PureComponent} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './SCSS/App.css';
import Header from './MainComponents/Header';
import MainContent from './MainComponents/MainContent';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleWidth = this.handleWidth.bind(this);
  }

  handleWidth(){
      let width = window.innerWidth;
      if(width > 768){
        this.props.setWidth(true)
      }else{
        this.props.setWidth(false)
      }
  }

  componentDidMount(){
     // this.props.getDataPatterns();
      this.handleWidth();
      window.addEventListener('resize', this.handleWidth);
  }

  componentDidUpdate(){
    window.addEventListener('resize', this.handleWidth);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleWidth);
  }

  render() { 
    return( 
      <>
        <Router basename={process.env.PUBLIC_URL} onUpdate={()=> window.scrollTo(0,0)}>
          <div className='container-fluid'>
            <div className='root'>
              <div className='wrapper'>
                  <Header />
                  <MainContent />
              </div>
            </div>
          </div>
        </Router>
      </>
     );
  }
}

const mapStateToProps = state =>{
  return{
      data: state.tshirtReducer.dataPattern
  }
};

const mapDispatchToProps = dispatch =>{
  return{
    setWidth: (isActiveToggler)=> dispatch({type:'IS_ACTIVE_TOGGLER',isActiveToggler:isActiveToggler}),
    getDataPatterns: ()=> dispatch({type:'GET_DATA_PATTERN'})
  }
};

 
export default connect(mapStateToProps,mapDispatchToProps)(App);