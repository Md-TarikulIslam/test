import React, { useContext } from 'react';
import {FirstName, LastName} from '../../App'

const FileC = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <div>
            {/* rule - 1 */}
            {/* <FirstName.Consumer>{(fname)=>{
                return  <h1>My Name is {fname}</h1>
            }}</FirstName.Consumer> */}

            {/* rule - 2 */}
          
          {/* return  */}
           <h1>My name is {fname} {lname}</h1>
       
            
        </div>
    );
};

export default FileC;