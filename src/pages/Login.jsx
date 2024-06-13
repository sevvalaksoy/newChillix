import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

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
        const URL = "";
        axios.post(URL, formData).then((response)=>{
            setFormData(initialFormData);
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
        <div>Login</div>
    )
}