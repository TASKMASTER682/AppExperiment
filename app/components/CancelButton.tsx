
import { useEffect, useState } from 'react';

interface CancelOrderProps {
  customerId: string;
  orderId: string;
  // mealText:string;
}

const CancelButton: React.FC<CancelOrderProps> = ({customerId,orderId}) => {
  // const [customerId, setCustomerId] = useState('');
  const [cancelText, setCancelText] = useState('Activated');



  const handleCancelOrder = async () => {
    try {
      const response = await fetch(`https://confused-rose-headscarf.cyclic.app/api/customer/${customerId}/order/${orderId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // setSuccessMessage(data.message);
        console.log('Cancelled');
      } else {
        // setErrorMessage(data.error);
        console.log(data.error)
      }
    } catch (error) {
      console.error('Failed to cancel order:', error);
      // setErrorMessage('Failed to cancel order');
    }
  };

  const cancelConfirm = () => {
    let answer = window.confirm('Are you sure you want to cancel the order');
    if (answer) {
        handleCancelOrder();
        setCancelText('Cancelled')
        window.location.reload();
    }
};
  
  return (
    <div>
      <button className={cancelText==='Activated'? 'bg-green-400 rounded-md p-2' : 'bg-red-400 rounded-md p-2'} onClick={cancelConfirm}>{cancelText}</button>
    </div>
  );
};

export default CancelButton;
