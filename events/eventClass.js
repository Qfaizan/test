class Welcome extends React.Component
{
    constructor(props) {
        super (props);
        console.log(props);
        this.greet=this.greet.bind(this); 

    }
    render(){
        return(
            <div>
                <h1>
                    Welcome,{this.props.firstName}
                </h1>

                <button onClick={this.getName.bind(this)}>GET NAME</button>
                <button onClick={this.greet}>Greet</button>
                <button onClick={ ()=>{
                    this.getAge();
                }}
                >
                    GET AGE
                    </button>
                    {/* this is the best way to call the function */}
                    <button
                    onClick={()=>{
                        this.getData("GOOGLE");
                    }}
                    >
                      Get Data  
                    </button>

            </div>
        );
    }
    getData(data){
        console.log("data",data);
    }
    getAge(){
        console.log("age is 19");
    }
    greet(){
        console.log("hello good Morning");
    }
    getName(){
        console.log("this",this);
        console.log("hello i am ROBOCOP");
    }

}
ReactDOM.render(
    <Welcome firstName="ajai"/>,
    document.getElementById("container")


);