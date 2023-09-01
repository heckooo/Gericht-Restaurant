import React from 'react';

import "./Book.css";
import { Navbar } from '../../components';
import InputField from '../../components/InputField/InputField';

const Book: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="book__bg">
        <h1 className="header">Book Table</h1>
        <form className="book__form">
          <InputField name="name" type="text" label="Name" />
          <InputField name="phone" type="tel" label="Phone Number" placeholder="123-456-7890"/>
          <InputField name="date" type="date" label="Choose Date" />
          <InputField name="time" type="time" label="Select time" />   
          <button type="submit" className="book__btn">Book</button>
        </form>
      </div>
    </>
  );
}

export default Book;