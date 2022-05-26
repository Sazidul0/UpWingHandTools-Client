import React from 'react';


const Blogs = () => {
    return (
        <div className='mx-8'>
            <h2 className='text-4xl text-teal-500 font-bold flex justify-center my-8'>Blogs</h2>


            <h2 className='text-2xl'>1.How to  improve the performance of a React Application?</h2>
            <p><ul>
                <li className='ml-3'><div className="badge badge-xs "></div> Keeping component state local where necessary. We’ve learned that a state update in a parent component re-renders the parent and its child components.</li>
                <li className='ml-3'><div className="badge badge-xs "></div> By memoizing React components to prevent unnecessary re-renders.</li>
                <li className='ml-3'><div className="badge badge-xs "></div> Code-splitting in React using dynamic. With code-splitting, React allows us to split a large bundle file into multiple chunks using dynamic import().</li>
                <li className='ml-3'><div className="badge badge-xs "></div> Windowing or list virtualization in React applications. With the concept of windowing, we can render to the DOM only the visible portion to the user.</li>
                <li className='ml-3'><div className="badge badge-xs "></div> To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. </li>
            </ul></p>


            <div className='my-8'>
                <h2 className='text-2xl'>2.What are the different ways to manage a state in a React application?</h2>
                <p><ul>
                    <li className='ml-3'><div className="badge badge-xs "></div> <b>Local (UI) state</b> – Local state is data we manage in one or another component.</li>
                    <li className='ml-3'><div className="badge badge-xs "></div> <b>Global (UI) state</b> – Global state is data we manage across multiple components.</li>
                    <li className='ml-3'><div className="badge badge-xs "></div> <b>Server state</b> – Data that comes from an external server that must be integrated with our UI state.</li>
                    <li className='ml-3'><div className="badge badge-xs "></div> <b>URL state</b> – Data that exists on our URLs, including the pathname and query parameters.</li>
                </ul></p>
            </div>


            <div className="my-8">
                <h2 className="text-2xl">3.How does prototypical inheritance work?</h2>
                <p className='ml-3'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                </p>
            </div>


            <div className='my-8'>
                <h2 className='text-2xl'>4.Why we should not set the state directly in React</h2>
                <p><ul>
                    <li className='ml-3'><div className="badge badge-xs "></div> If we update it directly, calling the setState() afterward may just replace the update we made.</li>
                    <li className='ml-3'><div className="badge badge-xs "></div> When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                    <li className='ml-3'><div className="badge badge-xs "></div> We will lose control of the state across all components.</li>
                </ul></p>
            </div>


            <div className="my-8">
                <h2 className="text-2xl">6.What is a unit test? Why should write unit tests?</h2>
                <p className='ml-3'>This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use.</p>
                <p className='ml-3'>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
            </div>




            <div className='my-8'>
                <h2 className="text-2xl">5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <div className="ml-3">
                    <p>const products = An Array of objects;</p>
                    <p>const nameForSearch = "Drill";</p>
                    <p>const result = products.find(product => product.name === nameForSearch);</p>
                    <p>console.log(result);</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;