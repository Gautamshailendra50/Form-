import React, { useState } from 'react';

function ValidationForm() {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let formErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[789]\d{9}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!formData.email || !emailRegex.test(formData.email)) {
            formErrors.email = 'Invalid email format';
        }

        if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
            formErrors.mobile = 'Mobile number must start with 7, 8, or 9 and be 10 digits long';
        }

        if (!formData.password || !passwordRegex.test(formData.password)) {
            formErrors.password = 'Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully');
            setFormData({ email: '', mobile: '', password: '' }); // Reset form
            setErrors({});
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Mobile No:</label>
                <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                />
                {errors.mobile && <span>{errors.mobile}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ValidationForm;
