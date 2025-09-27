import React from 'react';
import Container from '../Container/Container';
import Img1 from '../../assets/vector1.png'




const CountBox = ({inProgress, resolved}) => {

    return (
        <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[50px]">
        <div className="relative rounded-md h-[250px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-l from-purple-400 to-cyan-500">
          <img
            src={Img1}
            alt=""
            className="absolute inset-0 w-[350px] repeat-x object-left-bottom bg-repeat-round"
          />
            <div className="relative z-10 text-white flex flex-col items-center justify-center">
            <p className="font-bold text-[35px]">In-Progress</p>
            <span className="text-xl">{inProgress}</span>
          </div>
        </div>

        <div className="relative rounded-md h-[250px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-violet-400 to-cyan-500">
          <img
            src={Img1}
            alt=""
            className="absolute inset-0 w-[350px] scale-3d repeat-x object-left-bottom "
          />
          <div className="relative z-10 text-white flex flex-col items-center justify-center">
            <p className="font-bold text-[35px]">Resolved</p>
            <span className="text-xl">{resolved}</span>
          </div>
        </div>
      </div>
        </Container>
    
    
    );
};

export default CountBox;