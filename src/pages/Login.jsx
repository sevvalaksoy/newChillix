import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import styled  from "styled-components";

const Form = styled.form`
padding: 1.5rem;
width: 30%;
max-width: 500px;
min-width: 400px;
margin: auto;
`
const Label = styled.label`
font-size: 1.1rem;
`
const Input = styled.input`
display: block;
width: 100%;
padding: .5rem;
font-size: 1rem;
margin-top: .5rem;

&.inline-input {
    display: inline;
    margin-right: 1rem;
    width: initial;
}
`
const Button = styled.button`
width: 100%;
background: red;
color: white;
padding: 1rem;
text-align: center;
border-radius: .5rem;
`
const Row = styled.div`
margin-bottom: 1rem;
text-align: left;
`
const Step = styled.p`
font-size: .8em;
text-align: left;
margin: 1rem 0;
`
const Description = styled(Step)`
font-size: 1.1em;
`
const Title = styled(Step)`
font-size: 2rem;
margin: .5rem 0;
`
const ErrorMessage = styled.p`
padding: .5rem;
color: red;
background: #ff8f8f;
border-radius: .3rem;
`

const initialFormData = {
    email: "",
    password: "",
    terms: false
}

const errorMessages = {
    email: "Geçerli bir email adresi giriniz",
    password: "Güçlü bir şifre seçiniz",
    terms: "Şartları kabul ediniz"
}

export default function Login (){
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        terms: false
    });
    const [isValid, setIsValid] = useState(false);

    let history = useHistory();

    useEffect(()=>{
        const {email, password, terms} = formData;
        if(validateEmail(email) && validatePassword(password) && validateTerms(terms)){
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [formData]);

    function handleSubmit (event) {
        event.preventDefault();
        if(!isValid) return;
        const URL = "https://reqres.in/api/users";
        axios.post(URL, formData).then((response)=>{
            setFormData(initialFormData);
            console.log(response.data)
            //cache'e aktar
            history.push("/welcome");
        })
    }

    function validateEmail (email){
        return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    function validatePassword (password){
        let regex =  
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
        return regex.test(password);
    }

    function validateTerms (terms){
        return terms;
    }

    function handleChange (event) {
        let {name, value, type, checked} = event.target;
        value = type === "checkbox" ? checked : value;
        setFormData({...formData, [name]: value});

        if(name === "email"){
            if(validateEmail(value)){
                setErrors({...errors, [name]: false});
            } else {
                setErrors({...errors, [name]: true});
            }
        } 
        if(name === "password"){
            if(validatePassword(value)){
                setErrors({...errors, [name]: false});
            } else {
                setErrors({...errors, [name]: true});
            }
        } 
        if(name === "terms"){
            if(validateTerms(value)){
                setErrors({...errors, [name]: false});
            } else {
                setErrors({...errors, [name]: true});
            }
        } 
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Step>STEP 1 OF 3</Step>
            <Title>Please Login to Continue</Title>
            <Description>Please Fill the Form </Description>
            <Row>
                <Label htmlFor="email">Email:</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email adresinizi giriniz" data-cy="input-email"/>
                {
                    errors.email && <ErrorMessage data-cy="errors">{errorMessages.email}</ErrorMessage>
                }
            </Row>
            <Row>
                <Label htmlFor="password">Password:</Label>
                <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Şifrenizi giriniz" data-cy="input-password"/>
                {
                    errors.password && <ErrorMessage data-cy="errors">{errorMessages.password}</ErrorMessage>
                }
            </Row>
            <Row>
                <Input id="terms" name="terms" type="checkbox" checked={formData.terms} onChange={handleChange} className="inline-input" data-cy="input-terms"/>
                <Label htmlFor="terms">I agree to terms and conditions</Label>
                {
                    errors.terms && <ErrorMessage data-cy="errors">{errorMessages.terms}</ErrorMessage>
                }
            </Row>
            <Row>
                <Button disabled={!isValid} data-cy="submit-login-form">Login </Button>
            </Row>
        </Form>
    )
}