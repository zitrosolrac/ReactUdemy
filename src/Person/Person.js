import React from 'react';

import classes from './Person.css'; //ask vignesh about the reason behind this 
//think of this classes object as a javascript object which gives you access to the string version of the css class 
//so you can use a css class in a given component thats the only place the css styles apply 

const person = ( props ) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;