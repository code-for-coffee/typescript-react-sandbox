import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {AccountModel} from '../models/AccountModel';
import { ValidationError } from "class-validator";

export interface HelloProps { 
  compiler: string; 
  framework: string; 
}

let kevin = new AccountModel();
kevin.age = 30;
kevin.dateCreated = new Date();
kevin.email = 'kevin@typescript.js'; // break me! add another .
kevin.username = 'gobulls';

const onSuccess = () => {
  console.log('You win!');
};

const onError = (err: ValidationError) => {
  console.log('You lose!', err);
};

AccountModel.validate(kevin, onSuccess, onError);

// stateless
// export const Hello = (props: HelloProps) => 
//     <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hi Kevin! Check out {this.props.compiler} and {this.props.framework}!</h1>;
  }
}