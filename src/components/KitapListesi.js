import React from "react";
import KitapKarti from "./KitapKarti";

/*
  KitapListesi bileşeni
  - Filtrelenmiş kitap listesini gösterir.
  - Her kitap için KitapKarti bileşenini oluşturur.
  - Favoride olup olmadığını kontrol eder.
*/

function KitapListesi({ kitaplar, favoriler, favoriDegistir }) {
  // Eğer filtreye göre hiç kitap yoksa kullanıcıya bilgi ver
  if (kitaplar.length === 0) {
    return <p>Aradığınız kriterlere uygun kitap bulunamadı.</p>;
  }

  return (
    <div className="kitap-listesi">
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          kitap={kitap}
          favorideMi={favoriler.some((f) => f.id === kitap.id)}
          favoriDegistir={favoriDegistir}
        />
      ))}
    </div>
  );
}

export default KitapListesi;
