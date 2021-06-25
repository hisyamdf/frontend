import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [nama, setNama] = useState([]);
  const [asal, setAsal] = useState([]);
  const [divisi, setDivisi] = useState([]);


  const newPost = {
    "name": nama,
    "asal_sekolah": asal,
    "divisi": divisi,
  };

  const insertUser = async () => {
    try {
      await axios.post('http://localhost:3000/magang', newPost);
      alert("Data berhasil ditambahkan");
      window.location.reload();
    } catch (error) {
        alert("Gagal menambahkan data");
    }
  };

  return (
    <div className="d-inline-flex flex-column px-4">
      <div className="input-group flex-nowrap px-5 py-2">
        <span className="input-group-text" id="nama">
          Nama
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Silahkan Tulis Nama Lengkap"
          aria-label="nama"
          aria-describedby="addon-wrapping"
          onChange={e => setNama(e.target.value)}
        />
      </div>

      <div className="input-group px-5 py-2">
        <span className="input-group-text" id="asal_sekolah">
          Asal Sekolah
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Silahkan Tulis Asal Sekolah"
          aria-label="asal_sekolah"
          aria-describedby="addon-wrapping"
          onChange={e => setAsal(e.target.value)}
        />
      </div>

      <div className="input-group px-5 py-2">
        <span className="input-group-text" id="divisi">
          Divisi
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Silahkan Tulis Divisi Anda"
          aria-label="divisi"
          aria-describedby="addon-wrapping"
          onChange={e => setDivisi(e.target.value)}
        />
      </div>
      <div className="col-auto px-5 py-2">
    <button type="submit" className="btn btn-success mb-1" onClick={() => insertUser()}>Tambah Data</button>
  </div>
    </div>
  );
};

export default AddProducts;
