import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPremiumPurchased, setIsPremiumPurchased] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePurchase = () => {
    if (selectedOption === 'premium') {
      setIsPremiumPurchased(true);
    } else {
      alert('Please select the Premium option to make a purchase.');
    }
  };

  const myfunc = () => {
    alert("No extra features For you :(");
    navigate("/Home");
  }
  return (
    <div style={styles.container}>
      <h1>Blog Page Premium Access</h1>
      <div>
        <h2>Select a Payment Option:</h2>
        <div>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="free"
              onClick={myfunc}
              checked={selectedOption === 'free'}
              onChange={() => handleOptionSelect('free')}
            />
            Free
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="premium"
              checked={selectedOption === 'premium'}
              onChange={() => handleOptionSelect('premium')}
            />
            Premium (Rs. 1099)
          </label>
        </div>
      </div>

      {selectedOption === 'premium' && !isPremiumPurchased && (
        <div>
          <Link to="https://buy.stripe.com/test_00g8xW0jJam21KEdQQ">
            <button>
              Purchase Premium
            </button>
          </Link>
        </div>
      )}

      {isPremiumPurchased && (
        <div style={styles.successMessage}>
          Congratulations! You've purchased the Premium access.
          <br></br>
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '200px auto ',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  successMessage: {
    color: '#009900',
    fontWeight: 'bold',
    marginTop: '20px',
  },
};

export default PaymentForm;