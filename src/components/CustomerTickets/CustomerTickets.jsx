import React, { use, useState } from 'react';
import Container from '../Container/Container';
import Icon from '../../assets/Vector.png'

const CustomerTickets = ({ fetchPromise}) => {
  const Issues = use(fetchPromise);
  const [selectedTicket, setSelectedTicket] =useState(Issues)

  console.log(selectedTicket)
    
    return (
  <Container>
      <div className="flex justify-between gap-4">
        {/* Customer Tickets Section */}
        <div className="">
          <h1 className="font-bold text-xl mb-4">Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Issues.map((Issue) => (
              <div key={Issue.id} className="bg-white shadow-2xl m-2 p-4 rounded">
                {/* Title and Status */}
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-2xl font-bold">{Issue.title}</h1>
                  <span className={`rounded-2xl px-3 py-1 ${Issue.status === 'Open'?'text-green-700 bg-green-100':Issue.status === 'In Progress'?'text-orange-700 bg-orange-100':Issue.status === 'Closed'?'text-purple-700 bg-purple-100':Issue.status === 'Resolved'?'text-teal-700 bg-teal-100':''}`}>{Issue.status}</span>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-[10px] text-black-200">{Issue.description}</p>
                </div>

                {/* Priority and Customer Info */}
                <div className="flex justify-between items-center">
                  <span
                    className={`font-semibold py-1 px-2 rounded ${
                      Issue.priority === 'Critical'
                        ? 'text-purple-700'
                        : Issue.priority === 'High'
                        ? 'text-orange-700 '
                        : Issue.priority === 'Medium'
                        ? 'text-yellow-700 '
                        : 'text-green-700 '
                    }`}
                  >
                    {Issue.priority} Priority
                  </span>

                  <div className="flex items-center gap-2 font-[26px] text-[36px]">
                            <span className="text-[16px]">{Issue.customer}</span>
                            <img src={Icon} className='w-[40px]h-[40px]' alt="" />
                    <span className="text-[10px]">{Issue.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Task Status Section */}
        <div className="flex-1">
            <h1 className="font-bold text-xl mb-2 ">Task Status</h1>
            <p className='font-light text-[14px]'>Select a ticket to add to Task Status</p>

            <h1 className="font-bold text-xl mb-2">Resolved Task </h1>
            <p className='font-light text-[14px]'>No resolved tasks yet</p>
                    
        </div>
      </div>
    </Container>
  );
};

export default CustomerTickets;