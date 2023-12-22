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
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [edus, setEdus] = useState("");
    const [degs, setDegs] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [handleTitle, setHandleTitle] = useState("");
    const [handleCompany, setHandleCompany] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [handleDateFrom, setHandleDateFrom] = useState("");
    


  const handleSubmit = (event) => {
    
    event.preventDefault();
setFinal(firstName+" "+lastName);
setContacts(phone);
setHandEmail(email);
setEdus(school)
}
const handleEdus = (event) => {
    
    event.preventDefault();

setEdus(school)
setDegs(degree);
}
const handleJobs = (event) => {
    
    event.preventDefault();

setHandleCompany(company);
setHandleTitle(title);
setHandleDateFrom(dateFrom+" - "+dateTo);

}

    return(
<div className="all">
    <div className="forms">
<form className="sidebar" onSubmit={handleSubmit}>
    <div className="sidetop">  
        <h1>General info</h1>
    </div>
    <div className="sidemid">
        <div className="names">
            <input type="text" placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}} maxLength={"10"} value={firstName} required/>
        
            <input type="text" placeholder="Last name" maxLength={"12"} onChange={(e)=>{setLastName(e.target.value)}} value={lastName} required/>
        </div>
        <div className="phone">
            <input type="phone" id="phone" placeholder="Phone number"  maxLength={15} onChange={(e)=>{setPhone(e.target.value)}} value={phone} required/>
            
            <input type="email" placeholder="Email" maxLength={"15"} onChange={(e)=>{setEmail(e.target.value)}} value={email} required/>
        </div>
        <button >Save</button>
    </div>
    </form>
    <form onSubmit={handleEdus}>
    <div className="sidebott">
        <h1>Education</h1>
        <input type="text" placeholder="School" onChange={(e)=>{setSchool(e.target.value)}} value={school} required />
        <input type="text" placeholder="Degree" onChange={(e)=>{setDegree(e.target.value)}} value={degree} required/>
        <button>Save</button>
    </div>
    </form>
    <form onSubmit={handleJobs}>
    <div className="sidebottt">
        <h1>Experience</h1>
        <input type="text" placeholder="Company name"  onChange={(e)=>{setCompany(e.target.value)}} value={company} required/>
        <input type="text" placeholder="Position title"  onChange={(e)=>{setTitle(e.target.value)}} value={title} required/>
        <div>
            <input type="text" placeholder="Date from" onChange={(e)=>{setDateFrom(e.target.value)}} value={dateFrom} required/>
            <input type="text" placeholder="Date to" onChange={(e)=>{setDateTo(e.target.value)}} value={dateTo} required/>
        </div>
        <button>Save</button>
    </div>
    
</form>
</div>


<Main names={final}
 conts={contacts} 
 ph={phone} 
 em={email}
  hadlEmail={handEmail} 
  school={edus}
   degree={degs}
    company={handleCompany}
     title={handleTitle}
     dateFrom={handleDateFrom}
     
     />
</div>

)
}
export default Sidebar