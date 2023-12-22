import { useState } from "react"
import Main from "./cv"


function Sidebar(){
    const [final, setFinal] = useState("Name");
    const [contacts, setContacts] = useState("");
    const [handEmail, setHandEmail] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
 
  const handleSubmit = (event) => {
    
    event.preventDefault();
setFinal(firstName+" "+lastName);
setContacts(phone);
setHandEmail(email)
}
    return(
<div className="all">
<form className="sidebar" onSubmit={handleSubmit}>
    <div className="sidetop">  
        <h1>General info</h1>
    </div>
    <div className="sidemid">
        <div className="names">
            <input type="text" placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}} maxLength={"15"} value={firstName} required/>
        
            <input type="text" placeholder="Last name" maxLength={"20"} onChange={(e)=>{setLastName(e.target.value)}} value={lastName} required/>
        </div>
        <div className="phone">
            <input type="phone" id="phone" placeholder="Phone number"  maxLength={13} onChange={(e)=>{setPhone(e.target.value)}} value={phone} required/>
            
            <input type="email" placeholder="Email" maxLength={"20"} onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
        </div>
        <button >Save</button>
    </div>
    <div className="sidebott">
        <h1>Education</h1>
        <input type="text" placeholder="School" />
        <input type="text" placeholder="Degree" />
        <button>Save</button>
    </div>
    <div className="sidebottt">
        <h1>Experience</h1>
        <input type="text" placeholder="Company name" />
        <input type="text" placeholder="Position title" />
        <div>
            <input type="text" placeholder="Date from" />
            <input type="text" placeholder="Date to" />
        </div>
        <button>Save</button>
    </div>
    
</form>



<Main names={final} conts={contacts} ph={phone} em={email} hadlEmail={handEmail}/>
</div>

)
}
export default Sidebar