let name="faizu";
let element = <h1>
    {name}
</h1>


let mobiles=["samsung","vivo","mi","oppo"]
let mobileItems=mobiles.map((val,idx)=>{
return <li key={idx}>{val}</li>
})

let allItems =  <div>{element}{mobileItems}</div>
ReactDOM.render(allItems,document.getElementById("container"))
