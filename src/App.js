import React, { useState, useEffect } from "react";
import { kitaplar } from "./data";
import AramaCubugu from "./components/AramaCubugu";
import KategoriFiltre from "./components/KategoriFiltre";
import KitapListesi from "./components/KitapListesi";
import FavoriPaneli from "./components/FavoriPaneli";
import "./index.css";

/*
  🔹 App.js (Ana Bileşen)
  ------------------------------------------
  - Tüm uygulamanın state yönetimini yapar.
  - Arama, kategori filtreleme ve favoriler burada kontrol edilir.
  - localStorage kullanılarak son arama metni ve favoriler kaydedilir.
*/

function App() {
  // 🟢 State tanımları
  const [aramaMetni, setAramaMetni] = useState("");
  const [kategori, setKategori] = useState("Tümü");
  const [favoriler, setFavoriler] = useState([]);

  // 🟢 Sayfa yüklendiğinde localStorage'dan verileri oku
  useEffect(() => {
    const kayitliArama = localStorage.getItem("aramaMetni");
    const kayitliFavoriler = localStorage.getItem("favoriler");

    if (kayitliArama) setAramaMetni(kayitliArama);
    if (kayitliFavoriler) setFavoriler(JSON.parse(kayitliFavoriler));
  }, []);

  // 🟢 State değiştiğinde localStorage’a kaydet
  useEffect(() => {
    localStorage.setItem("aramaMetni", aramaMetni);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  // 🟢 Kitapları filtrele (arama + kategori)
  const filtrelenmisKitaplar = kitaplar.filter((kitap) => {
    const arama = aramaMetni.toLowerCase();
    const baslikUyum = kitap.baslik.toLowerCase().includes(arama);
    const yazarUyum = kitap.yazar.toLowerCase().includes(arama);
    const kategoriUyum =
      kategori === "Tümü" || kitap.kategori === kategori;

    return (baslikUyum || yazarUyum) && kategoriUyum;
  });

  // 🟢 Favori ekle / çıkar fonksiyonu
  const favoriDegistir = (kitap) => {
    if (favoriler.find((f) => f.id === kitap.id)) {
      // Kitap zaten favorideyse çıkar
      setFavoriler(favoriler.filter((f) => f.id !== kitap.id));
    } else {
      // Değilse ekle
      setFavoriler([...favoriler, kitap]);
    }
  };

  // 🟢 Ekranda gösterilecek yapı
  return (
    <div className="container">
      <h1>📚 Mini Kitaplık</h1>

      {/* Arama ve kategori alanları */}
      <div className="filters">
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      </div>

      {/* Kitap listesi + favoriler yan yana */}
      <div className="main-content">
        <KitapListesi
          kitaplar={filtrelenmisKitaplar}
          favoriler={favoriler}
          favoriDegistir={favoriDegistir}
        />
        <FavoriPaneli
          favoriler={favoriler}
          favoriDegistir={favoriDegistir}
        />
      </div>
    </div>
  );
}

export default App;
