function Sidebar(){
    return(
<>
<div className="sidebar">
    <div className="sidetop">  
        <h1>General info</h1>
    </div>
    <div className="sidemid">
        <div className="names">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name"/>
        </div>
        <div className="phone">
            <input type="phone" name="phone" id="phone" placeholder="Phone number"  />
            <input type="email" placeholder="Email"/>
        </div>
    </div>
    <div className="sidebott">
        <h1>Education</h1>
        <input type="text" placeholder="School" />
        <input type="text" placeholder="Degree" />
    </div>
    <div className="sidebottt">
        <h1>Experience</h1>
        <input type="text" placeholder="Company name" />
        <input type="text" placeholder="Position title" />
        <div>
            <input type="text" placeholder="Date from" />
            <input type="text" placeholder="Date to" />
        </div>
    </div>

</div>




</>
)
}
export default Sidebar