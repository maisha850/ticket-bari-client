import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const[searchParams]=useSearchParams()
    const sessionId = searchParams.get('session_id')
    const instance = useAxiosSecure()
    const [paymentInfo , setPaymentInfo]=useState({})
    useEffect(()=>{
        if(sessionId){
             instance.patch(`/payment-success?session_id=${sessionId}`)
.then((res)=>{
console.log(res.data)
setPaymentInfo(res.data)
})
        }

    },[instance,sessionId])
    console.log(paymentInfo)
    return (
        <div className='mt-20 bg-gray-100 md:w-200 p-4 rounded-2xl mx-auto'>
            <div className='space-y-3 flex flex-col justify-center items-center '>
            <img className='w-20 h-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Nz8k7J1TZMXsTykqt0avNLQbPay4OpqibUHjb4flng&s" alt="" />
          <h3 className='text-4xl font-bold text-green-500'>Payment SuccessFull</h3>
          <p className='text-gray-500'>Thank you! Your payment was successfully processed</p>

            <p className='text-gray-600'> <span className='font-bold'>TransactionId:</span> {paymentInfo.transactionId}</p>
            <Link to={'/dashboard/transaction-history'} className=' btn-primary'>Go to Transaction History</Link>
        </div>
        </div>
    );
};

export default PaymentSuccess;