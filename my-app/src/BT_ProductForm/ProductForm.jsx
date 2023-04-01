import React, { useState, useEffect } from "react";

function ProductForm() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input type="text" name="firstName" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input type="text" name="lastName" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input type="text" className="form-control" name="address" />
      </div>

      <button type="submit" className="btn btn-success me-2">
        Submit
      </button>
      <button type="button" className="btn btn-secondary">
        Reset
      </button>
    </form>
  );
}

export default ProductForm;
