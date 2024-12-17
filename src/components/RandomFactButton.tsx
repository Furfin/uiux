import React, { useState, useEffect } from 'react';


  function FactButton({ label, color = 'blue', size =
    'medium' }: {
        label?: string;
        color?: string;
        size?: string;
    }) {
        const [data, setData] = useState(null);
  
        useEffect(() => {
          fetch('https://dog-api.kinduff.com/api/facts')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
        }, []);

        var obj = JSON.parse(JSON.stringify(data, null, 2));
    return (
        <button
            color='#2196F3'
            className={`btn btn-${color} btn-${size}`}
            onClick={() => alert(obj['facts'])}>
            {label}
        </button>
    );
}
export default FactButton;