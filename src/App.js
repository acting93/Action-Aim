import React,{PureComponent} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './SCSS/App.css';
import Header from './MainComponents/Header';
import MainContent from './MainComponents/MainContent';
import Footer from './MainComponents/Footer';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-router-scroll-top';
import { Container,Row } from 'react-bootstrap';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleWidth = this.handleWidth.bind(this);
  }

  //funkcja zmieniajaca widok togglera menu w zależności od szerokości ekranu
  handleWidth(){
      const width = window.outerWidth;
      if(width <= 768){
        this.props.setMenu(false);
      }else{
        this.props.setMenu(true);
      }
  };

  componentDidMount(){
     //this.props.getDataPatterns();
    this.handleWidth();
    window.addEventListener('resize', this.handleWidth);
  };
 
  componentDidUpdate(){
    window.addEventListener('resize', this.handleWidth);
  };

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleWidth);
  };

  render() { 
    return( 
      <>
        <Router basename={process.env.PUBLIC_URL} onUpdate={()=> window.scrollTo(0,0)}>
            <Container fluid>
              <Row>
                <div className='wrapper'>
                    <Header />
                    <MainContent />
                    <Footer />
                </div>
              </Row>
            </Container>
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
    setMenu: (isActiveToggler)=> dispatch({type:'IS_ACTIVE_TOGGLER',isActiveToggler:isActiveToggler}),
    getDataPatterns: ()=> dispatch({type:'GET_DATA_PATTERN'})
  }
};

 
export default connect(mapStateToProps,mapDispatchToProps)(App);