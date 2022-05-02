class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>HELLO WORLD</h1>
                <h2>welcome to technoelevate</h2>
            </div>
        );
    }
    
}
class Component extends React.Component{
    render(){
        console.log("props",this.props);
    }
}
class Content extends React.Component{
    render(){
        console.log("props",this.props);
        return <h2>I am Content {this.props.firstname}{this.props.lastname}</h2>
    }
}
class Footer extends React.Component{
    render(){
        return <h2>I am Footer</h2>
    }
}
ReactDOM.render(
    <div>
        <Header/>
        <Content/>
        <Content firstname="faizu " lastname="blug"/>
        <Content firstname="nandha"/>
        <Footer/>
    </div>,
    document.getElementById("container")
);