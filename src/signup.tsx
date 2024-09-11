import React, { useState } from 'react';
// import './signup.css';
// import { Link } from './login';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    if (!formData.name) newErrors.push("Name is required");
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push("Valid email is required");
    }
    if (formData.password.length < 6) {
      newErrors.push("Password must be at least 6 characters long");
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Passwords do not match");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Sign-up successful!");
      console.log(formData);
    }
  };

  return (
    <div className="signup-form-container">
        <h2>Luli Fiber Pre-Order Form </h2>
      <h2>Sign Up</h2>
      {errors.length > 0 && (
        <ul className="errors">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <div className="main-form">

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div  className="terms">
            <h4>I've read and agreed to the terms & conditions</h4>
        </div>
        <div className="sumbit">
        <button type="submit">CREATE ACCOUNT</button>
        </div>
        
        <div>
            <p>Already have an account? </p>
        </div>
      </form>


      </div>
    </div>
  );
};

export default SignUpForm;
