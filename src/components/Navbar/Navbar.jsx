import React from 'react';
import Container from '../Container/Container';

const Navbar = () => {
    return (
  <div className="  shadow-md border-b-[0.5px] border-gray-300">
      <Container>
      <nav className="px-8 py-4 flex justify-between items-center">
        <h1 className="md:text-xl text-sm font-bold">CS - Ticket System</h1>
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            FAQ
          </a>
          <a href="#" className="text-gray-600">
            Changelog
          </a>

          <a href="#" className="text-gray-600">
            Blog </a>
                        
          <a href="#" className="text-gray-600">
            Download
            </a>
                        
          <a href="#" className="text-gray-600">
            contact
          </a>
          <button className=" text-white px-4 py-2 rounded-lg hover:cursor-pointer bg-gradient-to-l from-purple-600 to-cyan-300">
            + New Ticket
          </button>
        </div>
        <div className="block md:hidden">
        </div>
      </nav>
      </Container>
    </div>
    );
};

export default Navbar;