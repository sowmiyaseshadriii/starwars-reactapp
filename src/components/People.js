import React from 'react';
import {Link} from 'react-router-dom';

class People extends React.Component{
    state ={ 
        activePeople: []
    }

    componentDidMount= async() =>{
        console.log(this.props);
        const people = this.props.location.pathname;
        const req = await fetch(`https://swapi.co/api${people}`);
        const res = await req.json();
        this.setState({
          activePeople : res
        })
      }

   render(){
       const people = this.state.activePeople;
       return(
        <div>
        <header className="App-header text-center">
          <h1 className="App-title">React-StarWars</h1>
        </header>
           <div className="container">
               <div className="row">
                   <div className="col-sm-12">
                       <div class="text-center">
                           <h1>{people.name}</h1>
                           <h6>Birth Year <span style={{ color: "#ccaf0a" }}>{people.birth_year}</span></h6>
                           <h6>Gender <span style={{ color: "#ccaf0a" }}>{people.gender}</span></h6>
                           <h6>Height <span style={{ color: "#ccaf0a" }}>{people.height}</span></h6>
                           <h6>Weight <span style={{ color: "#ccaf0a" }}>{people.mass}</span></h6>
                           <button className="btn btn-primary">
                                 <Link to={{ pathname:'/'}}> BackToHome </Link>
                           </button>
                       </div>                       
                   </div>
               </div>
           </div>
        </div>
       );
   }
}

export default People;