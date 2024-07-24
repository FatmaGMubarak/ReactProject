import { useState } from "react";


export default function Calculator(props) {
    const [num,setNum] = useState(0)
    const setnewValue = (value)=>{
        setNum(value);
    };
  return (
    <>
    <div className="Calculator">
    <div className="screen"><h1>{num}</h1></div>
    <div className="btns">
    <button onClick={()=>setnewValue("0")}>0</button>
    <button onClick={()=>setnewValue("1")}>1</button>
    <button onClick={()=>setnewValue("2")}>2</button>
    <button onClick={()=>setnewValue("3")}>3</button>
    <button onClick={()=>setnewValue("4")}>4</button>
    <button onClick={()=>setnewValue("5")}>5</button>
    <button onClick={()=>setnewValue("6")}>6</button>
    <button onClick={()=>setnewValue("7")}>7</button>
    <button onClick={()=>setnewValue("8")}>8</button>
    <button onClick={()=>setnewValue("9")}>9</button>
    </div>

    </div>
    </>
  );
}