import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
  const {user}=UseAuth();
  const axiosSecure=UseAxiosSecure();
  const {data:payments=[]}=useQuery({
    queryKey:[
      'payments',user.email
    ],
    queryFn:async()=>{
      const res=await axiosSecure.get(`/payments?email=${user.email} `)
      return res.data;
    }
  })
  return (
    <div>
      <h2 className='text-5xl'>Payment History: {payments.length}</h2>

       <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              
              <th>Amount</th>
              <th> Transaction ID </th>
              <th> Paid Time </th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
             {
              payments.map((payment,index)=>
                 <tr key={payment._id}>
              <th> {index+1}</th>
              <td> {payment.amount} $</td>
              <td> { payment.transactionId}</td>
              <td> { payment.paidAt}</td>
              {/* <td> 
                {
                  parcel.paymentStatus==='paid'? <span className='text-green-400'>paid</span> : <button    className='btn btn-primary text-black'>pay</button>
                }
              </td> */}
              <td className='flex gap-3'>
                <button className='btn btn-square hover:bg-primary'>
              {/* <CiEdit/> */}
      </button>
                <button className='btn btn-square hover:bg-primary'>
             {/* <FaMagnifyingGlass /> */}
      
      </button>
                <button   className='btn btn-square hover:bg-primary'>
             {/* <CiTrash /> */}
      
      </button>
      </td>
            </tr>
              )
             }
           
             
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;