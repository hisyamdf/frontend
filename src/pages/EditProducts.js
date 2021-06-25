import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProducts = (props) => {
    const [users, setUsers] = useState([]);
  const [nama, setNama] = useState([]);
  const [asal, setAsal] = useState([]);
  const [divisi, setDivisi] = useState([]);
  const currentId = props.match.params.id;
  
  const updatePost = {
    "name": nama,
    "asal_sekolah": asal,
    "divisi": divisi,
  };

  const getUser = async () => {
    try {
      const result = await axios.get("http://localhost:3000/magang");
      setUsers(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id) => {
    try {
      await axios.put(`http://localhost:3000/magang/${id}`, updatePost);
      setUsers(users.filter((user) => user.id !== id));
      alert("Data berhasil diubah");
    } catch (error) {
      alert("Gagal untuk mengubah data");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
      
    <div className="d-inline-flex flex-column px-4">
        {users.filter((user)=> user.id === Number(currentId)).map((user) => (
      <div className="input-group flex-nowrap px-5 py-2">
        <span className="input-group-text" id="nama">
          Nama
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Silahkan Tulis Nama Lengkap"
          aria-label="nama"
          value={user.name}
          aria-describedby="addon-wrapping"
          onChange={e => setNama(e.target.value)}
        />
      </div>
       ))}

       {users.filter((user)=> user.id === Number(currentId)).map((user) => (
      <div className="input-group px-5 py-2">
        <span className="input-group-text" id="asal_sekolah">
          Asal Sekolah
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Silahkan Tulis Asal Sekolah"
          aria-label="asal_sekolah"
          value={user.asal_sekolah}
          aria-describedby="addon-wrapping"
          onChange={e => setAsal(e.target.value)}
        />
      </div>
      ))}

      {users.filter((user)=> user.id === Number(currentId)).map((user) => (
      <div className="input-group px-5 py-2">
        <span className="input-group-text" id="divisi">
          Divisi
        </span>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Silahkan Tulis Divisi Anda"
          aria-label="divisi"
          value={user.divisi}
          aria-describedby="addon-wrapping"
          onChange={e => setDivisi(e.target.value)}
        />
      </div>
      ))}
       
      <div className="col-auto px-5 py-2">
    <button type="submit" className="btn btn-success mb-1" onClick={updateUser}>Update Data</button>
  </div>
    </div>
  );
};

export default EditProducts;
