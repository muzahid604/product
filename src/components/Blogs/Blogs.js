import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className="answer">
                <h2>What is context api?</h2>
                <p>Context API provides a way to pass data through the component tree without having to pass props down manually at every level.
                    Context is primarily used when some data needs to be accessible by many components at different nesting levels.
                    <br />
                    <br />
                    Using context api should follow these very few steps <br />
                    <li>Create a folder under app root named contexts </li>
                    <li>Create a file named context name Context.js</li>
                    <li>import and create a context</li>
                    <li>Create a component that will wrap the provider named Provider</li>
                    <li>Create a higher order component to consume the context named: with</li>
                    <li>Finally export them</li>
                    <li>And use them</li>
                </p>
            </div>
            <div className="answer">
                <h2>what is semantic tag?</h2>
            </div>
        </div>
    );
};

export default Blogs; <h1>This is blog</h1>