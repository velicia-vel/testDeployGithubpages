import React, { useState } from 'react';

function App() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');

    return (
        <div>
            <h2>Input Data</h2>
            <div>
                <label>Nama:</label>
                <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan Nama ..."
                />
                <br />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Email ..."
                />
                <br />
                <label>Alamat:</label>
                <input
                    type="text"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Masukkan Alamat ..."
                />
                <h2>Hasil Inputan: </h2>
                    <label>Nama: </label>{nama}<br />
                    <label>Email: </label>{email}<br />
                    <label>Alamat: </label>{alamat}
            </div>
        </div>
    );
}

export default App;