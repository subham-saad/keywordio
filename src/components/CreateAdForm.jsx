import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Submission from './Submission';
import Dropdown from './DropDown';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

function CreateAdForm() {
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
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsFormSubmitted(true); 
  };
  
  const closeModal = () => {
    setIsFormSubmitted(false); 
  };

  return (
    <Box className='paperclass'>
      <Paper style={{ padding: '10px' }}>
        <h3 className='formHeading'>Create Text & Media</h3>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div style={{ flex: '0.5', marginRight: '10px' }}>
                <label className='label-heading'>
                  Heading 01:<br />
                  <input
                    className='heading01'
                    type="text"
                    name="heading01"
                    placeholder='Add a heading that would make users interested'
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
                    placeholder='Add a heading that would make users interested'
                    value={formData.heading02}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <label className='label-heading'>
                  Description:<br />
                  <textarea
                    className='desctext'
                    name="description"
                    placeholder='Add primary text to help users understand more about services'
                    value={formData.description}
                    onChange={handleInputChange}
                    style={{ height: '100px' }}
                  />
                </label>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} >
            <Grid item xs={12} sm={4}>
              <label className='label-heading1'>
                Landscape Marketing Image (1.9:1):
                <input
                  className='inputurl'
                  type="url"
                  name="landscapeImage"
                  placeholder='Add the URL of the Image you want to use for the ad'
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </label>
            </Grid>

            <Grid item xs={12} sm={4}>
              <label className='label-heading1'>
                Portrait Marketing Image (4:5): 
                <input
                  className='inputurl'
                  type="url"
                  name="portraitImage"
                  placeholder='Add the URL of the Image you want to use for the ad'
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </label>
            </Grid>

            <Grid item xs={12} sm={4}>
              <label className='label-heading1'>
                Square Marketing Image (1:1): 
                <input
                  className='inputurl'
                  type="url"
                  name="squareImage"
                  placeholder='Add the URL of the Image you want to use for the ad'
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </label>
            </Grid>
          </Grid><br/>

          {/* Additional Grid components for remaining form elements */}
          <label className='label-heading1' >
            Video URL:<br/>
            <input
              className='inputurl1'
              type="url"
              name="videoUrl"
              placeholder='Add the URL of the Video you want to use for ad '
              value={formData.videoUrl}
              onChange={handleInputChange}
            />
          </label>

       
  <Grid item xs={12} sm={6}>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '5px' }}>
      <label className='label-heading2'>
        Business Name:
        <input
          className='heading022'
          type="text"
          placeholder='Add your business name'
          name="businessName"
          value={formData.businessName}
          onChange={handleInputChange}
        />
      </label>

      <div className='label-heading2'>
        Button Label:
        <Dropdown />
      </div>
    </div>
  </Grid>
  

  <label className='label-heading1'>
            Website URL:<br/>
            <input 
               placeholder='Enter your website'
              className='inputurl1'
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleInputChange}
            />

         </label> 



          {/* Rest of your form elements here */}

          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
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

export default CreateAdForm;
