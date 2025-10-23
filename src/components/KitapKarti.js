import React from "react";

/*
  🔹 KitapKarti bileşeni
  ------------------------------------------
  - Her bir kitabın bilgilerini (başlık, yazar, kategori) ekranda kart formatında gösterir.
  - "Favori Ekle" veya "Favoride" butonu ile kullanıcı favorilere ekleme / çıkarma işlemi yapabilir.
  - Props'lar destructuring yöntemiyle alınır (örnek: { kitap, favorideMi, favoriDegistir }).
*/

function KitapKarti({ kitap, favorideMi, favoriDegistir }) {
  // kitap nesnesinden bilgileri destructuring ile alıyoruz:
  const { baslik, yazar, kategori } = kitap;

  return (
    <div className="kitap-karti">
      <div className="kitap-bilgi">
        <strong>{baslik}</strong>
        <p>{yazar} • {kategori}</p>
      </div>

      {/* Favori butonu */}
      <button
        onClick={() => favoriDegistir(kitap)}  // Tıklanınca App.js’teki favori listesini günceller
        className={favorideMi ? "favoride" : "favori-ekle"}
      >
        {favorideMi ? "★ Favoride" : "☆ Favori Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;
