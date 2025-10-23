import React from "react";

/*
  🔹 AramaCubugu bileşeni
  ------------------------------------------
  - Kullanıcı kitapları başlığa veya yazara göre aramak için bu bileşeni kullanır.
  - value={aramaMetni} kısmı, input alanındaki değerin App.js’teki state ile senkron kalmasını sağlar (controlled component).
  - onChange olayıyla kullanıcı her yazı yazdığında setAramaMetni çağrılır ve App.js’teki state güncellenir.
  - App.js bu değeri filtreleme işleminde kullanır.
*/

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <input
      type="text"
      className="arama"
      placeholder="Başlık veya yazar ara..."
      value={aramaMetni}                    // input içeriği App.js’teki state’ten gelir
      onChange={(e) => setAramaMetni(e.target.value)} // her yazı değişiminde state güncellenir
    />
  );
}

export default AramaCubugu;
