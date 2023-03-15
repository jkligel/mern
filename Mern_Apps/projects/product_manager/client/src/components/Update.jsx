import React, {useState} from 'react';
import axios from 'axios';

const Update = (props) => {

    return (
        <div>
            <form>
                <p>
                    <label>Title</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" />
                </p>

                <input type="submit" value="" />
            </form>
        </div>
    )
}

export default Update;