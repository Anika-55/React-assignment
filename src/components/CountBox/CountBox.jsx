import React from 'react';
import Container from '../Container/Container';
import CustomerTickets from '../CustomerTickets/CustomerTickets'; 
import Img1 from '../../assets/vector1.png'
import Img2 from '../../assets/vector2.png'

const CountBox = ({ selectedTicket}) => {
    console.log(selectedTicket)
    return (
     <Container>
        <div className="grid grid-cols-2 gap-[20px] my-[50px]"> 
                <div className={`rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center justify-center `}>
                    
                <p className="font-bold text-[35px]">In-Progress</p>
                <span className='text-xl'>0</span>
            </div>
            <div className="rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center">
                <p className="font-bold text-[35px]">Resolved</p>
                <span className='text-xl'>0</span>
            </div>
            </div>
            
        </Container>
    
    
    );
};

export default CountBox;