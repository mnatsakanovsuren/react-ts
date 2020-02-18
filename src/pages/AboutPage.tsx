import React from "react";
import { useHistory } from 'react-router-dom';
export const AboutPage: React.FC = () => {
    const history = useHistory();
    return <>
        <h1>About App</h1>
        <h4>Todo List Application</h4>
        <p>Test application for use Hooks and Typescript</p>
        <button className="btn" onClick={() => history.push('/')}>Back</button>
    </>
}