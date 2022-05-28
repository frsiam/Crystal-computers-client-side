import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <div className='my-10'>
                <h1 className='text-2xl my-3'><span className='font-bold'>Q.</span> How will you improve the performance of a React Application?</h1>
                <p className='my-2'>
                    Optimizing performance in a React application
                    Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React.
                    Lazy loading images in React.
                </p>
                <p className='my-2'>
                    If you're benchmarking or experiencing performance problems in your React apps, make sure you're testing with the minified production build.

                    By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.

                    If you aren't sure whether your build process is set up correctly, you can check it by installing React Developer Tools for Chrome. If you visit a site with React in production mode, the icon will have a dark background:
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl my-3'><span className='font-bold'>Q.</span> What are the different ways to manage a state in a React application?</h1>
                <p className='my-2'>
                    Every React component has a built-in state. This state is an object which stores
                    the property values that belong to a component. State is able to keep data from different
                    components in-sync because each state update re-renders all relevant components.
                    The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of:

                    Hooks
                    React Context API
                    Apollo Link State
                    We will, however, focus on the use of the setState() method.
                    Using setState()
                    The built-in setState() method updates a variable's value in the classes' local store. This local store allows the updated variable values to be accessed by any function that may require these values.
                    setState() tells React that this component and its children (sometimes delayed and grouped into a single batch) should be re-rendered with the most updated state; this re-render is often based on user-triggered events.
                </p>

            </div>
            <div className='my-10'>
                <h1 className='text-2xl my-3'><span className='font-bold'>Q.</span> How does prototypical inheritance work?</h1>
                <p className='my-2'>
                    JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

                    When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

                    Nearly all objects in JavaScript are instances of Object, which has null as its prototype.

                    While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl my-3'><span className='font-bold'>Q.</span> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p className='my-2'>
                    <span className='text-xl font-bold my-2 block'>One should never update the state directly because of the following reasons:</span>

                    If you update it directly, calling the setState() afterward may just replace the update you made.

                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.

                    You will lose control of the state across all components.
                </p>
            </div>
            <div className='my-10'>
                <h1 className='text-2xl my-3'><span className='font-bold'>Q.</span> What is a unit test? Why should write unit tests?</h1>
                <p className='my-2'>
                    <span className='text-xl font-bold'>What is a unit test ?</span>
                    Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a Unit Test. Unit Tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production. They should be run every time the code is changed and provide a clear description of the feature being tested.

                    Unit Test coverage is a subtype of Code Coverage - it shows which lines of code were tested by Unit Tests. However, the goal is not to have a 100% Unit Test coverage. In fact, you should have as few Unit Tests as possible and cover as many types of behavior as possible. 100% Unit Test coverage exists only in a perfect world. While writing Unit Tests focus on behaviors - adding new tests just to improve coverage leads to tests without any purpose and you would be just wasting your time.
                </p>
                <p className='my-2'>
                    <span className='text-xl font-bold'>Why should write unit tests?</span>
                    Unit Testing helps you with:

                    maintaining your code
                    catching defects introduced due to the code change
                    lower the potentially harmful impact of changes to your code
                    reusing the code
                    faster development
                    lowering the cost of fixing defects on lower testing level
                    a code documentation because the Unit Tests describe what your product does
                </p>
            </div>
        </div>
    );
};

export default Blogs;