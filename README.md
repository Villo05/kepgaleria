# Képgaléria Projekt

Egy egyszerű, reszponzív és moduláris képgaléria alkalmazás, amely komponensalapú megközelítéssel (JavaScript / React-szerű logika vanilla környezetben) jeleníti meg a képeket, kártyákat és a nagyított nézetet.

## 🚀 Funkciók

* **Dinamikus adatkezelés**: A képek adatai egy külön adatfájlból töltődnek be.
* **Kártya alapú elrendezés**: Modern, rácsos szerkezetű megjelenítés.
* **Nagyított nézet**: Kiválasztott kép részletes megjelenítése nagy méretben.
* **Reszponzív dizájn**: Mobilra és asztali képernyőkre optimalizált megjelenés.

## 📁 Projekt Szerkezete

* `index.html` – A weboldal alapvető vázát biztosító HTML fájl.
* `stilus.css` – A galéria és a kártyák egyedi stíluslapja.
* `index.js` – Az alkalmazás belépési pontja és a fő vezérlési logika.
* `adat.js` – A képek metaadatait (forrás, cím, leírás) tartalmazó tömb.
* `Kep.js` / `Kepek.js` – A képek és a képgyűjtemények kezeléséért felelős komponensek.
* `kartya.js` – A galéria egyes elemeit formázó kártya komponens.
* `NagyKep.js` – A kiemelt, nagy méretű kép megjelenítését vezérlő modul.
* `kepek/` – A galériában megjelenő képfájlok mappája.
