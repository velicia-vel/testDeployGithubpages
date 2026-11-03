import React, { useState } from 'react';
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Penambahan dan Pengurangan Angka</h2>
            <div>
                <h2>Hasil Hitungan: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Tambah</button>
                <button onClick={() => setCount(count - 1)}>Kurang</button>

                <hr />
                <hr />
            </div>
        </div>
    );
}

export default App;