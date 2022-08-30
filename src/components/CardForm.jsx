import React from 'react'

import IconComplete from './IconComplete.svg';
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


    const [style, setStyle] = useState('errorColor');
    const [style2, setStyle2] = useState('errorColor');
    const [style3, setStyle3] = useState('errorColor');
    const [style4, setStyle4] = useState('errorColor');
    const [style5, setStyle5] = useState('errorColor');

    const validate = (values) => {
        const errors = {}
        
        if (!values.CardHolderName){
            errors.CardHolderName = 'Name is Required.'
            setStyle('errorColor2')

        }if (!values.CardNum){
            errors.CardNum = 'Card Number is Required.'
            setStyle2('errorColor2')
        }else if (values.CardNum.length < 19){
            errors.CardNum = 'Invallid Card Number.'
            setStyle2('errorColor2')
        }else if (values.CardNum.length > 19){
            errors.CardNum = 'Invallid Card Number.'
            setStyle2('errorColor2')
        }
        if (!values.Month){
            errors.Month = "Can't be blank."
            setStyle3('errorColor2')
        }if (!values.Year){
            errors.Year = "Can't be blank."
            setStyle4('errorColor2')
        }if (!values.Cvc){
            errors.Cvc = "Can't be blank."
            setStyle5('errorColor2')
        }
        return errors;
    };
    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <>

    <div className="card-cont">
        <div className="front-card-cont">
            <img src={CardLogo} id="Card-logo" alt='Card logo' />
            <img id="front-card-cont" src="./images/bg-card-front.png" alt='front of card' />
            <div className='root-cont'></div>
            <p id='card-number-root'  >{cardNum || "0000 0000 0000 0000"} </p>
            <p id="name-root">{name || "juan dela cruz"}</p>
            <p id='exp-root'>{month || "00"}/{year || "00"}</p>
        </div>
        <div className="back-card-cont">
            <img id="back-card-cont" src="./images/bg-card-back.png" alt='back of card' />
            <p id='cvc-root'>{cvcNum}</p>
        </div>
    </div>
    {Object.keys(errors).length === 0 && isSubmit ? (
    
    <div id='complete-cont'>
        <img id='complete' src={IconComplete}/>
        <h1 className='grats' >CONGRATS!</h1>
        <p className='p'>We've added your card details.</p>
        <button id='cont-btn' onClick={refreshPage} >Continue</button>
    </div>
        
    
        ) : (
            
            <form id='form' onSubmit={handleSubmit}>
            <div className="form-cont">

            <label htmlFor='cardholder-name'>CARDHOLDER NAME</label> <br/>
            <input 
            value={formValues.CardHolderName}
            onChange={handleChangeName}
            type='text' 
            placeholder="e.g. Juan Dela Cruz" 
            id="cardholder-name"
            className={style} 
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
            className={style2} 
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
                type = 'text' 
                placeholder="MM" 
                id="month" 
                className={style3} 
                name='Month'/>
            <div>
            {/* <p id='errors'>{errors.Month}</p> */}
            </div>
                <input 
                value={formValues.Year}
                onChange={handleChangeYear}
                type = 'text' 
                placeholder="YY" 
                id="year" 
                className={style4} 
                name='Year'/>
            <div>
            {/* <p id='errors'>{errors.Year}</p> */}
            </div>
                </div>
                <div>
                    <input 
                    value={formValues.Cvc}
                    onChange={handleChangeCvcNum}
                    type='text' 
                    placeholder='e.g. 123' 
                    id="cvc"
                    className={style5} 
                    name='Cvc'/>
                </div>
            </div>
            <div>
            <p id='errors-cvc'>{errors.Cvc}</p>
            </div>
            {/* <input type='button' id='submit-btn' placeholder='Confirm'/> */}
            <button id='submit-btn'  >Submit</button>
        </div>
        </form>
            
        )}
        
        </>
    )
}

