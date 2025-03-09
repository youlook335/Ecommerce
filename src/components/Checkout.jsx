import React, { useState } from 'react';
import { Modal, Button as BootstrapButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle } from 'react-icons/fa'; // For icon
import Button from './Button';
import '../styles/model.css'
import { Link } from 'react-router-dom';

const Checkout = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://fakestoreapi.com/products')
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.error(error));
  // }, []);


  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [orderDetails, setOrderDetails] = useState({
    productName: 'Product Name',
    price: 20,
    quantity: 2,
    total: 40,
  });

  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [showModal, setShowModal] = useState(false);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle Order Submit
  const handleOrderSubmit = () => {
    setShowModal(true); // Show the modal on successful order placement
  };

  // Close Modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Checkout</h2>

      {/* Billing Information Form */}
      <div className="card mb-4 mt-5">
        <div className="card-body">
          <h5 className="card-title">Billing Information</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Shipping Address
              </label>
              <input
                className="form-control"
                id="address"
                name="address"
                rows="3"
                value={userData.address}
                onChange={handleInputChange}
                required
              ></input>
            </div>
          </form>
        </div>
      </div>

      {/* Order Summary */}
      <div className="card mb-4 mt-5">
        <div className="card-body">
          <h5 className="card-title">Order Summary</h5>
          <p>
            <strong>Product:</strong> {orderDetails.productName}
          </p>
          <p>
            <strong>Price:</strong> ${orderDetails.price}
          </p>
          <p>
            <strong>Quantity:</strong> {orderDetails.quantity}
          </p>
          <p>
            <strong>Total:</strong> ${orderDetails.total}
          </p>

          {/* Payment Method Selection */}
          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              className="form-select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Debit Card">Debit Card</option>
            </select>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="text-center" onClick={handleOrderSubmit}>
        <Button btn="Place Order"  />
      </div>

      {/* Order Confirmation Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        animation={true}
        backdrop="static"
      >
        <Modal.Header closeButton className="modal-header bg-info text-white">
          <Modal.Title>
            <FaCheckCircle size={30} className="mr-2" /> Order Confirmed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5 className="mb-3">Thank you for your order!</h5>
          <p>Your order has been placed successfully. Here's the summary:</p>
          <ul className="list-unstyled mb-4">
            <li><strong>Product:</strong> {orderDetails.productName}</li>
            <li><strong>Price:</strong> ${orderDetails.price}</li>
            <li><strong>Quantity:</strong> {orderDetails.quantity}</li>
            <li><strong>Total:</strong> ${orderDetails.total}</li>
          </ul>
          <p>We will send you an email confirmation shortly.</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          {/* <BootstrapButton variant="outline-secondary" >
          </BootstrapButton> */}
          <div onClick={handleCloseModal}>
            <Button btn="Close" />
          </div>
          <Link to="/">
          {/* <BootstrapButton
            onClick={() => window.location.reload()}
          >
          </BootstrapButton> */}
           <Button btn="Go to Home"/>
          </Link>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Checkout;
