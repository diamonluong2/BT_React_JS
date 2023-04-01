import React, { useState, useEffect } from "react";

function ProductForm({ user, onSubmit, onReset }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleResetForm = () => {
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    });
    onReset();
  };

  const handleSubmit = (evt) => {
    // Chặn hành vi submit mặc định của form
    evt.preventDefault();

    // Gọi prop onSubmit và truyền vào object values
    onSubmit(values);

    // Gọi hàm handleResetForm để set giá trị trên các input về rỗng
    handleResetForm();
  };
  useEffect(() => {
    // Dùng giá trị mới của prop user để cập nhật cho state values
    setValues(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success me-2">
        Submit
      </button>
      <button type="button" className="btn btn-secondary" onClick={onReset}>
        Reset
      </button>
    </form>
  );
}

export default ProductForm;
