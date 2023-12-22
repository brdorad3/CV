function Main(props){
  
return(
<>
<div className="gril">
    <h1>{props.names}</h1>
    
    <div className="conts">
    <div className="phones">
   <img src="phone.svg" alt="" />
    <h2>{props.conts}</h2>
 </div>
 <div className="emails">
   <img src="email-outline.svg" alt="" />
    <h2>{props.hadlEmail}</h2>
 </div>
    </div>
    </div>

</>
)}

export default Main