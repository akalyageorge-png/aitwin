import React, { useState } from 'react'
import TextInput from '../ui/TextInput'
import Button from '../ui/Button'
import { Link } from 'react-router'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    userName: '',
    identifier: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validate = () => {
    const validationErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{10}$/

    if (!formData.userName.trim()) {
      validationErrors.userName = 'Full name is required.'
    }

    if (!formData.identifier.trim()) {
      validationErrors.identifier = 'Email or phone number is required.'
    } else if (
      !emailRegex.test(formData.identifier) &&
      !phoneRegex.test(formData.identifier)
    ) {
      validationErrors.identifier = 'Enter a valid email address or 10-digit phone number.'
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required.'
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters.'
    }

    return validationErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // submit form or handle successful registration
      console.log('Registration data:', formData)
    }
  }

  return (
    <div className="loginForm">
      <div className="loginFormContainer">
        <h2 className="heading2">Sign Up</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextInput
            props={{
              label: 'Full name',
              placeholder: 'Enter your name',
              type: 'text',
              name: 'userName',
              value: formData.userName,
              onChange: handleChange,
            }}
          />
          {/* {errors.userName && (
            <p className="text-sm text-red-600">{errors.userName}</p>
          )} */}
          <TextInput
            props={{
              label: 'Email or Phone number',
              placeholder: 'Enter your email / Phone number',
              type: 'text',
              name: 'identifier',
              value: formData.identifier,
              onChange: handleChange,
            }}
          />
          {/* {errors.identifier && (
            <p className="text-sm text-red-600">{errors.identifier}</p>
          )} */}
          <TextInput
            props={{
              label: 'Password',
              placeholder: 'Create your password',
              type: 'password',
              name: 'password',
              value: formData.password,
              onChange: handleChange,
            }}
          />
          {/* {errors.password && (
            <p className="text-sm text-red-600">{errors.password}</p>
          )} */}
          {errors? (<span className="text-sm text-red-400">Enter valid data</span>): ''}
          <Button
            props={{ type: 'submit', twClass: 'signInButton', label: 'Sign Up' }}
          />
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <span>Already have account? </span>
          <Link
            to='/'
            className="font-semibold text-mainbg-400 hover:text-mainbg-600"
          >
            {' '}
            Login here!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm