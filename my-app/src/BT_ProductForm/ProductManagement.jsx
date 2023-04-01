import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from "axios";
import Search from "./Search";

function ProductManagement() {
  // State quản lí danh sách người dùng
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [searchByEmail, setSearchByEmail] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://63e86415ac3920ad5beb7b08.mockapi.io/api/users",
        {
          params: {
            email: searchByEmail || undefined,
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm xử lí để nhận vào Object user và thêm vào hoặc cập nhật User
  const handleSubmit = async (user) => {
    const { id, ...payload } = user;

    try {
      if (id) {
        await axios.put(
          `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${id}`,
          payload
        );
      } else {
        await axios.post(
          "https://63e86415ac3920ad5beb7b08.mockapi.io/api/users",
          payload
        );
      }
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lí nhận vào userId và xóa user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${userId}`
      );
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
  // Hàm để nhận vào object user, và lưu vào state selectedUser
  function handleSelectUser(user) {
    setSelectedUser(user);
  }
  const handleSearch = (searchString) => {
    setSearchByEmail(searchString);
    // ?: Khi state searchByEmail thay đổi, ta muốn gọi lại hàm fetchUser
    // => Đưa state searchByEmail vào array của useEffect
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">User management</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">User Form</div>
        <div className="card-body">
          <ProductForm />
        </div>
      </div>

      <div className="mt-4">
        <Search />
      </div>

      <div className="mt-4">
        <ProductList />
      </div>
    </div>
  );
}

export default ProductManagement;
