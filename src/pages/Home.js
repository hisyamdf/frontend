import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:3000/magang");
      setUsers(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/magang/${id}`);

      setUsers(users.filter((user) => user.id !== id));
      alert("Data berhasil dihapus");
    } catch (error) {
      alert("Gagal untuk menghapus");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Asal Sekolah</th>
              <th scope="col">Divisi</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.asal_sekolah}</td>
                <td>{user.divisi}</td>
                <td>
                  <Link exact to={"/products/edit/" + user.id}>
                    <i className="bi bi-pencil-square text-success fs-4 m-1"></i>
                  </Link>
                  <Link>
                    <i
                      className="bi bi-trash-fill text-warning fs-4 m-1"
                      onClick={() => deleteUser(user.id)}
                    ></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
