import React from 'react';
import Container from '../Container/Container';
import X_Img from '../../assets/Vector (1).png';
import In_Img from '../../assets/fi_145807.png';
import Facebook from '../../assets/fi_5968764.png';
import Email from '../../assets/fi_6244710.png'



const Footer = () => {
    return (
 <footer className="bg-black text-gray-300 px-8 py-12 ">
      <Container>
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sale</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
              <div>
                
                   <ul className="space-y-1 text-sm">
                  <div className='flex flex-row '>
                    <img src={X_Img} className='w-[12px] h-[12px] bg-white rounded-2xl mr-1' alt="" />
                    <li> @CS - Ticket System</li>
                  </div>
                  <div>
                    <img src={In_Img} className='w-[12px] h-[12px] bg-white rounded-2xl' alt="" />
                <li> @CS - Ticket System</li>
                  </div>
              
              <li>@CS - Ticket System</li>
              <li>support@cst.com</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS - Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </Container>
    </footer>
    );
};

export default Footer;