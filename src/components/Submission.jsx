import React, { useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";

function Submission({ isOpen, closeModal }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        closeModal();
        navigate('/ad-creation')
      }, 1000); 

      return () => {
        clearTimeout(timeoutId); 
      };
    }
  }, [isOpen, closeModal, navigate]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Submitted</h4>
        <span style={{color:'#0080FF'}}><CheckCircleIcon/></span>
      </div>
    </div>
  );
}

export default Submission;
