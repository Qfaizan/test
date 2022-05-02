function Welcome(props){
    let getName=()=>{
        console.log("i am raju");
    };
    let getAge=(data)=>{
        console.log("data",data);
    };
    return(
        <div>
            <h1> Welcome,{props.fname} </h1>
            <button onClick={getName}>Get Name</button>
            <button
            onClick={()=>{
                getAge("google")
            }}
            >
                Get Age
            </button>
        </div>
    );
}
ReactDOM.render(<Welcome fname="raju"/> , document.getElementById("container"))