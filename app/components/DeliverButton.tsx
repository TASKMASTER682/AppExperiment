import { useEffect, useState } from 'react';

interface DeliveryOrderProps {
  customerId: string;
  orderId: string;
//   deliveryText:string;
}

const DeliveryButton: React.FC<DeliveryOrderProps> = ({customerId,orderId}) => {
    const [deliveryText,setDeliveryText]=useState('Undelivered')
    const handleDeliveryOrder = async () => {
        try {
          const response = await fetch(`https://confused-rose-headscarf.cyclic.app/api/customer/${customerId}/order/delivery/${orderId}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          }
          });
      
          const data = await response.json();
      
          if (response.ok) {
            // setSuccessMessage(data.message);
            console.log('Delivered');
          } else {
            // setErrorMessage(data.error);
            console.log(data.error)
          }
        } catch (error) {
          console.error('Failed to cancel order:', error);
          // setErrorMessage('Failed to cancel order');
        }
      };
    
      const deliveryConfirm = () => {
        let answer = window.confirm('Are you sure to deliver the order');
        if (answer) {
            handleDeliveryOrder();
            setDeliveryText('Delivered')
        }
    };

    return(
        <div>
            <button className= {deliveryText==='Undelivered'? 'bg-red-400 rounded-md p-2' : 'bg-green-400 rounded-md p-2'} onClick={deliveryConfirm}>{deliveryText}</button>
        </div>
    )
}

export default DeliveryButton