function Header({brand,price}){
    // console.log("props in Header",props);
    return(
        <div>
            <h1>HELLO WORLD</h1>
            <h2>
                {brand}{price}
            </h2>
        </div>
    );
}
function Content(props){
    console.log("props in Content",props);
    return(
        <div>
            <h2>
                I AM CONTENT {props.fname}{props.lname}
                {props.brand}{props.price}
            </h2>
        </div>
    );
}
function Footer({person:{fname,lname}}){
    return(
        <div>
            <h1>
                I AM FOOTER
            </h1>
            <h1>
                {fname}{lname}
            </h1>  
        </div>
    );
}

ReactDOM.render(
    <div>
        <Header brand = "BMW" price="20" />
        <Content fname= "sai" lname="ctv" />
        <Footer person = {{fname:"raju",lname:"rastogi"}} />
    </div>,
    document.getElementById("container")
);

