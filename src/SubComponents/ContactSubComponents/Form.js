import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

let timeInterval = ''

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            subject:'',
            phone:'',
            email:'',
            message:'',
            counter:5,
            validation:{
                nameVal:false,
                subjectVal:false,
                phoneVal:false,
                emailVal:false,
                messageVal:false
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.validation = this.validation.bind(this);
        this.sentFormTimer= this.sentFormTimer.bind(this);
        this.counterTime = this.counterTime.bind(this);
    }

    sentFormTimer =()=>{

        const countDown = 1;
        const {counter} = this.state;

        this.setState({
            counter: counter - countDown
        });
            
        if(counter === 0){
            this.setState({
                counter: 5
            })
            clearInterval(timeInterval);
            this.props.formStatus(null)
        };
    };

    counterTime=()=>{
        timeInterval = setInterval(this.sentFormTimer,1000);
    };

//obsługa inputów
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]:value
        });
    };

//warunki wysłania inputów
    handleSubmitForm(e){

        e.preventDefault();

        const validationCheck = this.validation();

        if(validationCheck.validationStatus){
            this.counterTime();
            this.props.formSpinner(true);
            this.sendForm();
            this.setState({
                name:'',
                subject:'',
                phone:'',
                email:'',
                message:'',
                validation:{
                    nameVal:false,
                    subjectVal:false,
                    phoneVal:false,
                    emailVal:false,
                    messageVal:false
                },
                
            });
        }else{
            this.setState({
                validation:{
                    nameVal:!validationCheck.nameVal,
                    subjectVal:!validationCheck.subjectVal,
                    phoneVal:!validationCheck.phoneVal,
                    emailVal:!validationCheck.emailVal,
                    messageVal:!validationCheck.messageVal
                },
            });
        };
    };

//walidacja inputów
    validation(){
        const {name,subject,phone,email,message} = this.state;
        let nameVal = false;
        let subjectVal = false;
        let phoneVal = false;
        let emailVal = false;
        let messageVal = false;
        let validationStatus = false;

        const numberValidate = new RegExp(/[0-9]+$|^$/g);
        const emailVaidate = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g);

        if(name.length > 3){
            nameVal = true;
        }
        if(subject.length > 3){
            subjectVal = true;
        }
        if(numberValidate.test(phone.length)){
            phoneVal = true;
        }
        if(emailVaidate.test(email)){
            emailVal = true;
        }
        if(message.length > 10){
            messageVal = true;
        }
        if(nameVal === true && subjectVal === true && phoneVal === true && emailVal === true && messageVal === true){
            validationStatus = true;
        };

        return ({nameVal,subjectVal,phoneVal,emailVal,messageVal,validationStatus});
    };


// wysyłanie zapytania do PHPMailer

    sendForm(){
        axios('http://localhost/sklepmailer/index.php',{
            method:'post',
            mode:'no-cors',
            data:this.state,
            headers:{'Content-Type':'application/json'}
        })
        .then(response =>{
            if(response.status === 200){
                this.props.formStatus(true);
                this.props.formSpinner(false);
            }
            console.log(response)
        })
        .catch(error => {
            this.props.formStatus(false);
            this.props.formSpinner(false);
            console.log(error)
        })
        console.log('axios dziala')
    };

    render() { 
        const {name,subject,phone,email,message} = this.state;
        const {nameVal,subjectVal,phoneVal,emailVal,messageVal} = this.state.validation;
        return ( 
            <>
                <form className='form' onSubmit={this.handleSubmitForm} noValidate>
                        <input 
                            type='text'
                            name='name'
                            placeholder='IMIĘ'
                            value={name}
                            onChange={this.handleChange}
                        />
                        {nameVal ? <p className='errorVal'>Minimum trzy znaki</p> : null}
                        <input 
                            type='text'
                            name='subject'
                            placeholder='TEMAT'
                            value={subject}
                            onChange={this.handleChange}
                        />
                        {subjectVal ? <p className='errorVal'>Minimum trzy znaki</p> : null}
                        <input 
                            type='number'
                            name='phone'
                            placeholder='NUMER TELEFONU'
                            value={phone}
                            onChange={this.handleChange}
                        />
                        {phoneVal ? <p className='errorVal'>Numer zbyt krótki</p> : null }
                        <input 
                            type='email'
                            name='email'
                            placeholder='ADRES E-MAIL'
                            value={email}
                            onChange={this.handleChange}
                        />
                        {emailVal ? <p className='errorVal'>Niewłaśaciwy format adresu e-mail</p> : null}
                        <textarea
                            type='text'
                            name='message'
                            placeholder='WIADOMOŚĆ'
                            value={message}
                            onChange={this.handleChange}
                        />
                        {messageVal ? <p className='errorVal'>Wiadomość zbyt krótka</p> : null}
                    <button onClick={this.handleSubmitForm}>Prześlij wiadomość</button>
                </form>
            </>
         );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        formStatus: (response)=> dispatch({type:'FORM_RESPONSE_STATUS',response:response}),
        formSpinner: (spinner)=> dispatch({type:'FORM_SPINNER',spinner:spinner})
    }
}
 
export default connect(null,mapDispatchToProps)(Form);