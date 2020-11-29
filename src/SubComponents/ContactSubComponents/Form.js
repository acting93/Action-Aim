import React, { Component } from 'react';

let timeInterval = ''

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            surname:'',
            phone:'',
            email:'',
            message:'',
            validation:{
                nameVal:false,
                surnameVal:false,
                phoneVal:false,
                emailVal:false,
                messageVal:false
            },
            timeCounter:5,
            sendingTimer:null,
            spinner:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.validation = this.validation.bind(this);
        this.sentFormTimer = this.sentFormTimer.bind(this);
        this.counterTime = this.counterTime.bind(this);
    }

//pojawienie się informacji o wysłaniu formularza

    sentFormTimer(){

        const {timeCounter,sendingTimer} = this.state;

        this.setState({
            timeCounter: this.state.timeCounter -= 1
        });
            
        if(timeCounter === 0){
            this.setState({
                timeCounter: 5,
                sendingTimer:false
            });
            
            clearInterval(timeInterval);
        };
        console.log(timeCounter)
        console.log('funckja działa')
    };

    counterTime(){
        timeInterval = setInterval(this.sentFormTimer,1000);
        console.log('funckja stop')
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
            this.setState({
                sendingTimer:true,
                name:'',
                surname:'',
                phone:'',
                email:'',
                message:'',
                validation:{
                    nameVal:false,
                    surnameVal:false,
                    phoneVal:false,
                    emailVal:false,
                    messageVal:false
                },
                
            })

        }else{
            this.setState({
                validation:{
                    nameVal:!validationCheck.nameVal,
                    surnameVal:!validationCheck.surnameVal,
                    phoneVal:!validationCheck.phoneVal,
                    emailVal:!validationCheck.emailVal,
                    messageVal:!validationCheck.messageVal
                },
            })
        };
    };
//walidacja inputów
    validation(){
        const {name,surname,phone,email,message} = this.state;
        let nameVal = false;
        let surnameVal = false;
        let phoneVal = false;
        let emailVal = false;
        let messageVal = false;
        let validationStatus = false;

        const numberValidate = new RegExp(/[0-9]+$|^$/g);
        const emailVaidate = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g);

        if(name.length > 3){
            nameVal = true;
        }
        if(surname.length > 3){
            surnameVal = true;
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

        if(nameVal === true && surnameVal === true && phoneVal === true && emailVal === true && messageVal === true){
            validationStatus = true;
        }

        return ({nameVal,surnameVal,phoneVal,emailVal,messageVal,validationStatus});
    };


    render() { 
        const {name,surname,phone,email,message} = this.state;
        const {nameVal,surnameVal,phoneVal,emailVal,messageVal} = this.state.validation;
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
                            name='surname'
                            placeholder='NAZWISKO'
                            value={surname}
                            onChange={this.handleChange}
                        />
                        {surnameVal ? <p className='errorVal'>Minimum trzy znaki</p> : null}
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
 
export default Form;