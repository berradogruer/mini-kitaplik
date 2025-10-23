import React from "react";

/*
  KategoriFiltre bileşeni
  - Kullanıcı kitap kategorisini seçer.
  - Kategoriler "Tümü", "Web", "CS", "Tasarım" olarak listelenir.
  - Seçim değiştiğinde App.js içindeki setKategori fonksiyonu çağrılır.
*/

function KategoriFiltre({ kategori, setKategori }) {
  const kategoriler = ["Tümü", "Web", "CS", "Tasarım"];

  return (
    <select
      value={kategori}
      onChange={(e) => setKategori(e.target.value)}
      className="kategori"
    >
      {kategoriler.map((kat) => (
        <option key={kat} value={kat}>
          {kat}
        </option>
      ))}
    </select>
  );
}

export default KategoriFiltre;
