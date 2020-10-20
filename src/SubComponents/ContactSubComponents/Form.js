import React, { Component } from 'react';

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
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.validation = this.validation.bind(this);
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]:value
        });
    };

    handleSubmitForm(e){

        e.preventDefault();

        const validationCheck = this.validation();

        if(validationCheck.validationStatus){
            console.log("formularz wysłany")
            this.setState({
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
                }
            })
        }else{
            console.log("formularz niewysłany")
            this.setState({
                validation:{
                    nameVal:!validationCheck.nameVal,
                    surnameVal:!validationCheck.surnameVal,
                    phoneVal:!validationCheck.phoneVal,
                    emailVal:!validationCheck.emailVal,
                    messageVal:!validationCheck.messageVal
                }
            })
        };
    };


    validation(){
        const {name,surname,phone,email,message} = this.state;
        let nameVal = false;
        let surnameVal = false;
        let phoneVal = false;
        let emailVal = false;
        let messageVal = false;
        let validationStatus = false;

        if(name.length > 3){
            nameVal = true;
        }
        if(surname.length > 3){
            surnameVal = true;
        }
        if(phone.length > 9){
            phoneVal = true;
        }
        if(email.indexOf('@') !== -1){
            emailVal = true;
        }
        if(message.length > 10){
            messageVal = true;
        }

        if(nameVal === true && surnameVal === true && phoneVal === true && emailVal === true && messageVal === true){
            validationStatus = true;
        }
        console.log(validationStatus)

        return ({nameVal,surnameVal,phoneVal,emailVal,messageVal,validationStatus})
    }


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
                        {nameVal ? <p>Minimum trzy znaki</p> : null}
                        <input 
                            type='text'
                            name='surname'
                            placeholder='NAZWISKO'
                            value={surname}
                            onChange={this.handleChange}
                        />
                        {surnameVal ? <p>Minimum trzy znaki</p> : null}
                        <input 
                            type='number'
                            name='phone'
                            placeholder='NUMER TELEFONU'
                            value={phone}
                            onChange={this.handleChange}
                        />
                        {phoneVal ? <p>Numer zbyt krótki</p> : null }
                        <input 
                            type='email'
                            name='email'
                            placeholder='ADRES E-MAIL'
                            value={email}
                            onChange={this.handleChange}
                        />
                        {emailVal ? <p>Brakuje @</p> : null}
                        <textarea
                            type='text'
                            name='message'
                            placeholder='WIADOMOŚĆ'
                            value={message}
                            onChange={this.handleChange}
                        />
                        {messageVal ? <p>Wiadomość zbyt krótka</p> : null}

                    <button onClick={this.handleSubmitForm}>Prześlij wiadomość</button>
                </form>
            </>
         );
    }
}
 
export default Form;