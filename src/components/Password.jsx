import React, { useEffect, useState ,useRef } from "react";
import { FaCopy } from "react-icons/fa";
import "../components/Password.css";
function Password() {

    let [length , setLength] = useState(0);
    let [upper , setUpper] = useState(false);
    let [lower , setlower] = useState(false);
    let [numbers , setNumbers] = useState(false);
    let [special , setSpecial] = useState(false);
    let [password , setPassword] = useState("");
    const ref = useRef(null);
    const enterLength = (e)=>{
        if(e.target.value>50)
        {
            alert("chhota password milega");
        }
        else
        setLength(e.target.value);
    }
   
    const copyPass = ()=>{
        ref.current?.select();
        ref.current?.setSelectionRange(0,length);  
        window.navigator.clipboard.writeText(password);
        
    }
 
    let generatePassword = (e)=>{
        console.log(e);
        let str ="";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerCase = upperCase.toLowerCase();
        let number = "0123456789";
        let symbols = '!@#$%^&*()_}{][":?><,.';
        if(!lower && !upper && !numbers && !special)
        {
            alert("Abe kis type ka password du ye to bta");
        }
        let pass = "";
            if(upper)
            {
                str += upperCase;
            }
            if(lower)
            {
                str += lowerCase;
            }
            if(numbers)
            {
                str += number;
            }
            if(special)
            {
                str += symbols;
            }
            console.log(str);
            console.log(str.length);
            console.log(length);
      for(let i =0;i<length;i++)
      {
         pass += str[Math.floor(Math.random()*str.length)];
      }
      console.log(pass);
      setPassword(pass);

    }
   
  return (
    <>
      <div className="relative w-90">
        <input
          type="text"
          className=" border-black p-2 center w-85 mt-10 custom-text"
          defaultValue={password}
          ref={ref}
        ></input>
        <FaCopy onClick={copyPass} className="absolute top-12 right-2 cursor-pointer" />
      </div>
      <div className="flex justify-between items-center mt-10 ms-10">
        <h3>Select Password length(**8-50 characters**)</h3>
        <input defaultValue={length} type="number" className=" custom-input " onChange={enterLength}></input>
      </div>
      <div className="flex gap-10 flex-col mt-10 ms-10">
        <div>
          <input type="checkbox" id="upperCase" onChange={()=> setUpper((prev) => upper = !prev) } defaultChecked={upper}></input>
          <label htmlFor="upperCase">Include upper case</label>
        </div>
        <div>
          <input type="checkbox" id="lowerCase" onChange={()=> setlower((prev) => lower = !prev) } defaultChecked={lower}></input>
          <label htmlFor="lowerCase">Include lower case</label>
        </div>
        <div>
          <input type="checkbox" id="numbers" onChange={()=> setNumbers((prev)=> numbers = !prev) } defaultChecked={numbers}></input>
          <label htmlFor="numbers">Include numbers</label>
        </div>
        <div>
          <input  type="checkbox" id="symbols" onChange={()=> setSpecial((prev)=> special = !prev)} defaultChecked={special}></input>
          <label htmlFor="symbols">Include symbols</label>
        </div>
      </div>
      <button type="submit" onClick={generatePassword} className="btn">Generate Password</button>
    </>
  );
}

export default Password;
