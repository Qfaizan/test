function Parent(props){
    let data=["mango","grapes","chiku","lichi","kiwi"];
    return(
        <div>
            <h1>
                Hello,{props.name}
            </h1>
            <Child data={data}/>
        </div>
    );
}
function Child(props){
    console.log("props Child",props);
    return(
        <div>
           {
                props.data.map((val,idx) => {
                    return <h2 key={idx}>{val}</h2>
                })
           }
        </div>
    );
}
ReactDOM.render(<Parent name="Ajay" />,document.getElementById("container"))