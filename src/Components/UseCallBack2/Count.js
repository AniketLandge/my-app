import React from 'react'

const Count = ({text, value}) => {
    console.log(`count component for - ${text}`);
    return ( 
        <>
              <div>Count for {text} - {value}</div>
        </>
     );
}
 
export default React.memo(Count);