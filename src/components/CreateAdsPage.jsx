import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Submission from './Submission';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Dropdown from './DropDown';
function CreateAdsPage() {
  const [formData, setFormData] = useState({
    heading01: '',
    heading02: '',
    description: '',
    landscapeImage: '',
    portraitImage: '',
    squareImage: '',
    videoUrl: '',
    businessName: '',
    buttonLabel: '',
    websiteUrl: '',
  });
   
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsFormSubmitted(true); // Show the modal
  };
  
  const closeModal = () => {
    setIsFormSubmitted(false); // Close the modal
  };

  return (
  <Box className='paperclass'>
  <Paper style={{ padding: '10px' }}>
    <h4 style={{ fontWeight: 500, fontFamily: 'sans-serif' }}>Create Text Ad</h4>
    <form onSubmit={handleFormSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <label className='label-heading'>
            Heading 01:<br />
            <input
              className='heading01'
              type="text"
              name="heading01"
              value={formData.heading01}
              onChange={handleInputChange}
            />
          </label><br />
          <label className='label-heading'>
            Heading 02:<br />
            <input
              className='heading01'
              type="text"
              name="heading02"
              value={formData.heading02}
              onChange={handleInputChange}
            />
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <label className='label-heading'>
            Description:<br />
            <textarea
              className='desctext'
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              style={{ height: '100px' }}
            />
          </label>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <label className='label-heading'>
            Business Name: <br />
            <input
              className='heading02'
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
            />
          </label>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
        <div className='label-heading2'>
        Button Label:
        <Dropdown />
         </div>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <label className='label-heading1'>
          Website URL:
          <input
            className='inputurl1'
            type="url"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleInputChange}
          />
        </label>
      </Grid>

      <Grid item xs={12} style={{ display: 'flex',  justifyContent: 'flex-end'}}>
        <button className='backbtn' type="button">
          <Link to="/ad-creation" className="no-underline-link">Back</Link>
        </button>
        <button className='submitbtn' type="submit">
          Submit
        </button>
      </Grid>
    </form>
  </Paper>
  <Submission isOpen={isFormSubmitted} closeModal={closeModal} />
</Box>

  );
}

export default CreateAdsPage;
