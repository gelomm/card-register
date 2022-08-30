import React from 'react'

import CardLogo from './CardLogo.svg'
import { useState, useEffect } from 'react';



export default function CardForm(){
    // to get the value of input fields
    const [cardNum, setCardNum] = useState('');
    const [name, setName] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvcNum, setCvcNum] = useState('');


        //for form validation
        const initialValues = {
            CardHolderName:'',
            CardNum: '',
            Month: '',
            Year: '',
            Cvc: '',
        }
        const [formValues, setFormValues] = useState(initialValues)
        const [errors, setErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
        setCardNum(e.target.value);
        
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);

        // cardNum = cardNum.replace(/-/g, '');
        // var regex = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
    }
    const handleChangeName = (e) =>{
        setName(e.target.value);
        
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    const handleChangeMonth = (e) =>{
        setMonth(e.target.value);

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    const handleChangeYear = (e) =>{
        setYear(e.target.value);

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    const handleChangeCvcNum = (e) =>{
        setCvcNum(e.target.value);

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }
    
    // submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect (() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [errors]);


    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\@]+\.[^\s@]{2,}$/i;
        
        if (!values.CardHolderName){
            errors.CardHolderName = 'Name is Required.'
        }if (!values.CardNum){
            errors.CardNum = 'Card Number is Required.'
        }
        if (!values.Month){
            errors.Month = "Can't be blank."
        }if (!values.Year){
            errors.Year = "Can't be blank."
        }if (!values.Cvc){
            errors.Cvc = "Can't be blank."
        }
        return errors;
    };




    return (
        <>

    <div className="card-cont">
        <div className="front-card-cont">
            <img src={CardLogo} id="Card-logo" alt='Card logo' />
            <img id="front-card-cont" src="./images/bg-card-front.png" alt='front of card' />
            <div className='root-cont'></div>
            <p id='card-number-root'  >{cardNum}</p>
            <p id="name-root">{name}</p>
            <p id='exp-root'>{month}/{year}</p>
        </div>
        <div className="back-card-cont">
            <img id="back-card-cont" src="./images/bg-card-back.png" alt='back of card' />
            <p id='cvc-root'>{cvcNum}</p>
        </div>
    </div>

        <form onSubmit={handleSubmit}>
        <div className="form-cont">

            <label for='cardholder-name'>CARDHOLDER NAME</label> <br/>
            <input 
            value={formValues.CardHolderName}
            onChange={handleChangeName}
            type='text' 
            placeholder="e.g. Juan Dela Cruz" 
            id="cardholder-name" 
            name="CardHolderName"/> <br/>
            <div>
            <p id='errors'>{errors.CardHolderName}</p>
            </div>
            <label for='card-number' >CARD NUMBER</label> <br/>
            <input 
            value={formValues.CardNum}
            onChange={handleChange}
            type = 'text' 
            placeholder="e.g. 1234 5678 9123 0000" 
            id = 'card-number' 
            name='CardNum'
            /> <br/>
            <div>
            <p id='errors'>{errors.CardNum}</p>
            </div>

            <div className="exp-date-cont">
            <label>EXP. DATE (MM/YY)</label>
            <label>CVC</label> <br/>
            </div>

            <div className='exp-input-cont'>
                <div>
                <input 
                value={formValues.Month}
                onChange={handleChangeMonth}
                type = 'number' 
                placeholder="MM" 
                id="month" 
                name='Month'/>
            <div>
            {/* <p id='errors'>{errors.Month}</p> */}
            </div>
                <input 
                value={formValues.Year}
                onChange={handleChangeYear}
                type = 'number' 
                placeholder="YY" 
                id="year" 
                name='Year'/>
            <div>
            {/* <p id='errors'>{errors.Year}</p> */}
            </div>
                </div>
                <div>
                    <input 
                    value={formValues.Cvc}
                    onChange={handleChangeCvcNum}
                    type='number' 
                    placeholder='e.g. 123' 
                    id="cvc"
                    name='Cvc'/>
                </div>
            </div>
            <div>
            <p id='errors-cvc'>{errors.Cvc}</p>
            </div>
            {/* <input type='button' id='submit-btn' placeholder='Confirm'/> */}
            <button id='submit-btn'>Submit</button>
        </div>
        </form>
        </>
    )
}

