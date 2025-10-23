import React from "react";

/*
  🔹 FavoriPaneli bileşeni
  ------------------------------------------
  - Kullanıcının favori kitaplarını listeler.
  - Her bir favori kitabın yanında "Kaldır" butonu bulunur.
  - Favoriler App.js’teki state’ten props olarak gelir.
  - Eğer favori listesi boşsa kullanıcıya bilgilendirme mesajı gösterilir.
*/

function FavoriPaneli({ favoriler, favoriDegistir }) {
  return (
    <div className="favori-paneli">
      <h3>Favoriler ({favoriler.length})</h3>

      {/* Favori listesi boşsa bilgilendirme yazısı */}
      {favoriler.length === 0 && <p>Henüz favori eklenmedi.</p>}

      {/* Favori kitapları listele */}
      {favoriler.map((kitap) => (
        <div key={kitap.id} className="favori-item">
          <span>{kitap.baslik}</span>
          <button onClick={() => favoriDegistir(kitap)}>Kaldır</button>
        </div>
      ))}
    </div>
  );
}

export default FavoriPaneli;
