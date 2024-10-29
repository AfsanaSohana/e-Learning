import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ClassInfo from '../ClassInfo';

<ClassInfo/>
const HotlineButton = () => {
  const handleLiveChat = () => {
    // Logic to start live chat
    alert('Starting Live Chat...');
  };

  const handleLiveCall = () => {
    // Logic to initiate live call
    alert('Starting Live Call...');
  };

  const handleWhatsAppMessage = () => {
    // Logic to send WhatsApp message
    window.open('https://wa.me/your-phone-number', '_blank');
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <DropdownButton id="dropdown-basic-button" title="Hotline Options" variant="primary">
        <Dropdown.Item onClick={handleLiveChat}>
          <i className="bi bi-chat-dots"></i> Live Chat
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLiveCall}>
          <i className="bi bi-telephone"></i> Live Call
        </Dropdown.Item>
        <Dropdown.Item onClick={handleWhatsAppMessage}>
          <i className="bi bi-whatsapp"></i> WhatsApp Message
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default HotlineButton;
