import React, { use, useState } from 'react';
import Container from '../Container/Container';
import Icon from '../../assets/Vector.png'

const CustomerTickets = ({ fetchPromise , setInProgress, setResolved}) => {
  const Issues = use(fetchPromise);
  const [selectedTickets, setSelectedTickets] = useState([]); 
  const [resolvedTickets, setResolvedTickets] = useState([]); 

  
  const handleSelect = (issue) => {
    if (!selectedTickets.some(ticket => ticket.id === issue.id)) {
      setSelectedTickets([...selectedTickets, issue]);
      setInProgress(prev => prev + 1); 
      alert("✅ Task Added!");
    }
  };

  const handleComplete = (ticket) => {
    setSelectedTickets(selectedTickets.filter(t => t.id !== ticket.id));
    setResolvedTickets([...resolvedTickets, ticket]);
    setInProgress(prev => prev - 1);     
    setResolved(prev => prev + 1);
    alert("✅ Task Completed!");
  };
  return (
    <Container>
      <div className="flex justify-between gap-4">
        {/* Customer Tickets Section */}
        <div className="">
          <h1 className="font-bold text-xl mb-4">Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Issues.map((Issue) => (
              <div
                key={Issue.id}
                onClick={() => handleSelect(Issue)} 
                className="bg-white shadow-2xl m-2 p-4 rounded cursor-pointer hover:shadow-xl transition"
              >
                {/* Title and Status */}
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-2xl font-bold">{Issue.title}</h1>
                  <span
                    className={`rounded-2xl px-3 py-1 ${
                      Issue.status === 'Open'
                        ? 'text-green-700 bg-green-100'
                        : Issue.status === 'In Progress'
                        ? 'text-orange-700 bg-orange-100'
                        : Issue.status === 'Closed'
                        ? 'text-purple-700 bg-purple-100'
                        : Issue.status === 'Resolved'
                        ? 'text-teal-700 bg-teal-100'
                        : ''
                    }`}
                  >
                    {Issue.status}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-[10px] text-black-200">{Issue.description}</p>
                </div>
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
                    <img src={Icon} className="w-[30px] h-[30px]" alt="" />
                    <span className="text-[10px]">{Issue.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Task Status Section */}
    
          <div className="flex-1">
          <h1 className="font-bold text-xl mb-2">Task Status</h1>
          {selectedTickets.length === 0 ? (
            <p className="font-light text-[14px]">Select a ticket to add to Task Status</p>
          ) : (
            <div className="space-y-3">
              {selectedTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 bg-white rounded shadow"
                >
                  <h2 className="font-semibold text-lg p-1">{ticket.title}</h2>
                  <button className='w-full p-1  bg-green-700 text-white' onClick={()=> handleComplete(ticket)}>Completed</button>
                </div>
              ))}
            </div>
          )}
          {/*  resolved tasks section */}
             <h1 className="font-bold mt-5">Resolved Task</h1>
          {resolvedTickets.length === 0 ? (
            <p className="font-[12px]">No resolved tasks yet</p>
          ) : (
            <ul className="  text-sm font-[18px] bg-blue-100">
              {resolvedTickets.map((ticket) => (
                <li className='font-[18px] bg-blue-100 m-4 p-3 ' key={ticket.id}>{ticket.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CustomerTickets;
