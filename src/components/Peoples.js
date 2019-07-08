import React from 'react';
import {Link} from 'react-router-dom';

const Peoples = props => (
    <div className="container">
        <div className="row">
            {props.peoples.map((people, index) => {
                return (
                    <div className="col-sm-4" key={people.name}>
                        <div className="card bg-dark mb-3" key={people.name}>
                            <div className="card-header">
                                <h2>{people.name}</h2>
                            </div>
                            <div className="card-body">
                               <button className="btn btn-primary">
                                 <Link to={{ pathname:`/people/${index+1}`}}> View Details </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Peoples;