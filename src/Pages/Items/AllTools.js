import React from 'react';
import useTools from '../../hooks/useTools';
import AllTool from './AllTool';

const AllTools = () => {
    const [tools] = useTools();
    return (
        <div>
            <h2 className='text-4xl flex justify-center font-bold pt-14 pb-8 text-teal-500'>Tools Collection</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:px-8 md:px-10 lg:px-28 pb-14'>
                {
                    tools.map(tool => <AllTool key={tool._id} tool={tool}></AllTool>)
                }
            </div>

        </div>
    );
};

export default AllTools;