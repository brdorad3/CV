function Main(props){
  
return(
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
<div className="edu">

<h1 className="education">Education</h1>
<h2>{props.school}</h2>
<p>{props.degree}</p>

</div>
<div className="jobs">
   <h1>Experiences</h1>
   <h2>{props.company}</h2>
   <p>{props.title}</p>
   <p>{props.dateFrom}</p>
</div>
    </div>
)}

export default Main