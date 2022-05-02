function Parent(props){
    console.log("props parent",props);
    return(
        <div>
            <h1>
                I AM PARENT{props.userName}
            </h1>
            <Child appName="Netflix" user={props.userName} />
        </div>
    )
}
function Child(props){
    console.log("props child",props);
    return(
        <div>
            <h1>I AM CHILD</h1>
            <h2>AppName is :{props.appName},user:{props.user} </h2>
        </div>
    )
}
ReactDOM.render(<Parent u
    serName="Ajay"/>,document.getElementById("container"));