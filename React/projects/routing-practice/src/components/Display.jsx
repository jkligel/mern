import React from 'react';
import {useParams, Link} from 'react-router-dom';

const Display = (props) => {
    const {param, tc, bgc} = useParams();
    return(
        <div>
            { isNaN(param) ? 
                <h1 style={{ 
                    background: bgc, 
                    color: tc
                }}>The word is {param}</h1> 
                : 
                <h1>The number is {param}</h1> 
            }
            <Link to="/home">Back Home</Link>
        </div>
    );
}

export default Display;