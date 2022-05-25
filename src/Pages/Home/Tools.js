import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from './Tool';


const Tools = () => {
    const [tools] = useTools();

    if (tools.length > 3) {
        const rest = tools.length - 3;

        for (let i = 0; i < rest; i++) {
            tools.pop();
        }
    }


    return (
        <div>
            <h2 className='text-4xl flex justify-center font-bold pt-14 pb-8 text-teal-500'>Tools We Provide</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:px-8 md:px-10 lg:px-28 pb-14'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;