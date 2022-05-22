import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CheckOut = () => {

    const { toolId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch(`tools.json/tool/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    console.log('tool', tool)

    return (
        <div>

        </div>
    );
};

export default CheckOut;