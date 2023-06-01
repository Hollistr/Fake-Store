import React from 'react'
import Modal from 'react-modal'
import './Checkout.css'

function Checkout() {
  // Create state to control modal
  const [isOpen, setIsOpen] = React.useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

  return (
    <div className='checkout-container'>
        <p>Checkout Container Here</p>
        <button className='checkout-btn'
                onClick={() => setIsOpen(true)}>Checkout</button>
        <Modal
        isOpen={isOpen}
        //onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Checkout Modal"
      >
        <h2>Your order was successful!</h2>
        <h2>Check your email for the order confirmation. Thank you for shopping with Fake Store!</h2>
        <a href='/'>Return to Main Page</a>
        <button onClick={() => setIsOpen(false)}
                className='modal-close-btn'>close</button>
      </Modal>
    </div>
  )
}

export default Checkout