import React from 'react';
import Container from '../Container/Container';



const CountBox = ({inProgress, resolved}) => {

    return (
        <Container>
        <div className="grid grid-cols-2 gap-[20px] my-[50px] "> 
                <div className={`rounded-md p-7 text-white h-[250px] flex flex-col items-center justify-center  bg-gradient-to-l from-purple-400 to-cyan-500`}>

                <p className="font-bold text-[35px]">In-Progress</p>
                    <span className='text-xl'>{inProgress }</span>
            </div>

            
  
            <div className={`rounded-md p-7 text-white h-[250px] flex flex-col items-center justify-center  bg-gradient-to-l from-purple-400 to-cyan-500`}>
                <p className="font-bold text-[35px]">Resolved</p>
                <span className='text-xl'>{resolved}</span>
            </div>
            

        

            </div>
        </Container>
    
    
    );
};

export default CountBox;