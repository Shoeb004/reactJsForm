import React, { useState } from 'react'
import './Form.css'
import { ToastContainer } from 'react-toastify';

function Form() {
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      country: 'india',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      comments: false,
      candidate: false,
      offer: false,
      pushNotification: ''
    }
  )
  function formHandler(event) {
    // const [name, value, type, checked] = event.target;

    setFormData((prev) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log('Final submit result')
    console.log(formData)
  }
  // console.log(formData)
  return (
    <form className='form' onSubmit={submitHandler}>
      <ToastContainer />
      <div className='input-container'>
        <label htmlFor='first-name'>First name</label>
        <input
          type='text'
          onChange={formHandler}
          value={formData.firstName}
          name='firstName'
          id='first-name'
          placeholder='Pranay'
          className='input-field' />
      </div>

      <div className='input-container'>
        <label htmlFor='last-name'>Last name</label>
        <input
          type='text'
          onChange={formHandler}
          value={formData.lasttName}
          name='lastName'
          id='last-name'
          placeholder='Gupta'
          className='input-field' />
      </div>

      <div className='input-container'>
        <label htmlFor='email'>Email address</label>
        <input
          type='text'
          onChange={formHandler}
          value={formData.email}
          name='email'
          id='email'
          placeholder='abc@gmail.com'
          className='input-field' />
      </div>

      <div className='input-container'>
        <label htmlFor='country'>Country</label>
        <select
          name='country'
          onChange={formHandler}
          value={formData.country}
        >
          <option value='india' defaultChecked>India</option>
          <option value='united state'>United state</option>
          <option value='canada'>Canada</option>
          <option value='mexico'>Mexico</option>

        </select>
      </div>

      <div className='input-container'>
        <label htmlFor='street-address'>Street address</label>
        <input
          type='text'
          onChange={formHandler}
          value={formData.streetAddress}
          name='streetAddress'
          id='street-address'
          placeholder='1234 Mian St'
          className='input-field' />
      </div>

      <div className='input-container'>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          onChange={formHandler}
          value={formData.city}
          name='city'
          id='city'
          placeholder='Mumbai'
          className='input-field' />
      </div>
      <div className='input-container'>
        <label htmlFor='state'>State / Province</label>
        <input
          type='text'
          onChange={formHandler}
          value={formData.state}
          name='state'
          id='state'
          placeholder='Maharashtra'
          className='input-field' />
      </div>
      <div className='input-container'>
        <label htmlFor='zipCode'>zipCode / Postal code</label>
        <input
          type='text'
          onChange={formHandler}
          value={formData.zipCode}
          name='zipCode'
          id='zipCode'
          placeholder='123456'
          className='input-field' />
      </div>
      <fieldset>
        <legend>By email</legend>
        <div className='input-container'>
          <input type='checkbox'
            name='comments'
            onChange={formHandler}
            id='comments'
            checked={formData.comments}
          />
          <div className='checkbox-text'>
          <label htmlFor='comments'>Comments</label>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className='input-container'>
          <input type='checkbox'
            name='candidate'
            onChange={formHandler}
            id='candidate'
            checked={formData.candidate}
          />
           <div className='checkbox-text'>
          <label htmlFor='candidate'>Candidate</label>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className='input-container'>
          <input type='checkbox'
            name='offer'
            onChange={formHandler}
            id='offer'
            checked={formData.offer}
          />
          <div className='checkbox-text'>
          <label htmlFor='offer'>Offer</label>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Push Notification</legend>
        <div className='input-container'>
          <input type='radio'
            name='pushNotification'
            id='pushEvertyhing'
            onChange={formHandler}
            value='pushEvertyhing'
          />
          <label htmlFor='pushEvertyhing'>
            Everything
          </label>
        </div>
        <div className='input-container'>
          <input type='radio'
            name='pushNotification'
            id='pushSameAsEmail'
            onChange={formHandler}
            value='pushSameAsEmail'
          />
          <label htmlFor='pushSameAsEmail'>
            Same as Email
          </label>
        </div>
        <div className='input-container'>
          <input type='radio'
            name='pushNotification'
            id='noPushNotification'
            onChange={formHandler}
            value='noPushNotification'
          />
          <label htmlFor='noPushNotification'>
            No Push Notification
          </label>
        </div>
      </fieldset>
      <button>Submit</button>
    </form>
  )
}

export default Form
