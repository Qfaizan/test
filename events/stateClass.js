class Welcome extends React.Component{
    state={
        firstName:"Ajay",
        age:18,
    };


    changeName(){
        // never update the  state like this
        // console.log("before update",this.state.firstName);
        // this.state.firstName="vijay"
        // console.log("after update",this.state.firstName);
        this.setState({
            firstName:"Vijay",
            age:28,

        });
    }

render() {
    return(
        <div>
            <h1>
                Welcome,{this.state.firstName} Age:{this.state.age}
                </h1>
                <button
                onClick={()=>{
                    this.changeName();
                }}
                >
                  changeNAME
                </button>
            
        </div>
    );
}
}
ReactDOM.render(<Welcome/>,document.getElementById("container")); 