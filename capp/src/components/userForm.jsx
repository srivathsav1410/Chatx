import React, { useState } from 'react';


import { useDispatch } from 'react-redux';
import { RegisterRequest } from '../features/register/registerslice';

const UserForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    displayName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.displayName.trim()) newErrors.displayName = 'Display name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      dispatch(RegisterRequest(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Create User</h2>

      <div style={styles.inputGroup}>
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <span style={styles.error}>{errors.username}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label>Display Name</label>
        <input
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          required
        />
        {errors.displayName && <span style={styles.error}>{errors.displayName}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span style={styles.error}>{errors.password}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    color: 'red',
    fontSize: '0.85em',
    marginTop: '4px',
  },
};

export default UserForm;
