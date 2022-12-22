import { useState, useEffect } from "react"
const AuthInput = ({ title, placeholder, status, change, type, value}) => {
    const [ stringColor, setStringColor] = useState('');
    const [ inputborder, setInputBorder] = useState('');
    let currentvalue = 
    useEffect(()=>{
        if(status === false){
            setStringColor("#f66");
            setInputBorder("#f66")
        }
        else{
            setStringColor("");
            setInputBorder("");

        }
    },[status])
    useEffect(()=>{
     change(value)
    },[value])
    return (
        <div className="flex flex-col loginForm">
            <p style={{ fontSize: "15px", fontFamily: "poppins-light", lineHeight: "20px" , color:stringColor}} className="text-white">{title}</p>
            <input type={ type} className="w-full emailInput focus:bg-transparent" placeholder={ placeholder } style={{ borderColor:inputborder}} onChange={(e)=>{change(e.target.value)}} defaultValue={value}/>
        </div>
    )

}
export default AuthInput