

class Parent extends React.Component{
    
    render(){
        let data=["mango","grapes","chiku","lichi","kiwi"];
        return(
            <div>
                <h1>
                    I AM PARENT ,user={this.props.name}
                        <Child user={data}/>
                </h1>


            </div>
        );
    }
}
    class Child extends React.Component{
        render(){
            return(
                <div>
                   
                       {this.props.user.map((val,idx)=> {
                           return <h2 key={idx}>{val}</h2>
                       })}
                   
                </div>
            );
        }
    }

ReactDOM.render(<Parent name="ajay"/>,document.getElementById("container"));
    
    class Parent extends React.Component{
        render(){
            let public1=["man","women","child"];
            return(
                <div>
                    <h1>
                        publi cis the property,use={this.props.name}
                    </h1>
                </div>
            );
        }
    }
    class Child extends React.Component{
        render(){
            return(
                <div>
                    {
                        this.props.use.map((val,idx)=>{
                            return <h2 key={idx}>{val}

                            </h2>
                        })
                    }
                </div>
            );
        }
    }
    ReactDOM.render87(< Parent use= "margo"/ >,