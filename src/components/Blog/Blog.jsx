import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>When should you use context API?</b></Accordion.Header>
                    <Accordion.Body>
                    Context is primarily used when some data needs to be accessible by many components at different nesting levels. Well speaking, Context API in React is useful when you need to manage and share state or data between components that are not directly related or nested in the component hierarchy.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>What is a custom hook?</b></Accordion.Header>
                    <Accordion.Body>
                    A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. It follows the rules of hooks in React. Custom hooks can be used in functional components just like built-in React hooks such as useState, useEffect, and useContext. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>What is useRef?</b></Accordion.Header>
                    <Accordion.Body>
                    useRef is a React hook that returns a mutable ref object. It can be used to access and modify DOM nodes or to store mutable values that do not trigger a re-render when they change. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
                    Syntax: <br />
                    <b>const refContainer = useRef(initialValue);</b>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>What is useMemo?</b> </Accordion.Header>
                    <Accordion.Body>
                    useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations. Simply put, useMemo is a React hook that allows you to memoize a function's result to optimize the performance of your application. It takes a function and an array of dependencies, and only re-computes the memorized value when one of the dependencies has changed.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;