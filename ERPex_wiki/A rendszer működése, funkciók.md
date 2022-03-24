**Bejelentkezés**

[[login_page.png]]

A bejelentkezésnél a felhasználó megadja a felhasználónevet és a jelszavat. Ha létezik az adatbázisban a beírt felhasználónév, akkor a program ellenőrzi a jelszavat. A jelszavakat az adatbázisban hash-elt formában tároljuk adatbiztonsági okokból. 

Minden felhasználónak van egy bizonyos jogosultsága, ezt is az adatbázisban tároljuk. Bejelentkezéskor ennek megfelelően különböző felületekre érkeznek a felhasználók. Annak érdekében, hogy ne tudják jogosulatlanul elérni a különböző oldalakat, routeGuard-ot használtunk.

**Vezetői jogosultság** - alkalmazotti adatok lekérése

Kilistázza az alkalmazottakat, megjeleníti az adataikat. A vezetői jogosultsággal rendelkező személy szerkesztheti ezeket, törölhet felhasználót  [[vezeto_alkalmazott.png]], vagy felvehet újat [[vezeto_ujalkalmazott.png]].

**Vezetői jogosultság** - projektek kezelése
Kilistázza a projekteket [[vezeto_projektek.png]], és újakat vehet fel [[vezeto_ujprojekt.png]].

**Vezetői jogosultság** - partnerek listázása
[[vezeto_partner.png]]

**Vezetői jogosultság** - cégadatok megjelenítése, módosíása

---------------------------------------------------------------------

**Alkalmazotti jogosultság** - Saját adatok

Kilistázza az adott alkalmazott saját adatait, illetve lehetőséget biztosít ezen adatok megváltoztatásának kérésére is. Továbbá GDPR szabályok szerinte lehetőség van az adattárolással kapcsolatos információk lekérésére.
[[alkalmazott_sajat_adatok.png]]

**Alkalmazotti jogosultság** - projektek listázása

Az adatbázisban a projektek esetében eltároljuk a maximális létszámot. Ha egy alkalmazott lekérheti a projekteket és csatlakozási kérést külddhet, ha a projekt maximális létszáma nem telt még be.

**Alkalmazotti jogosultság** - Jelenléti ív

A jelenlétet nem adatbázisban, hanem excel-fileokban tároljuk. Az alkalmazottak a szoftveren keresztül (is) vezethetik az óráikat.

[[alkalmazott_jelenleti.png]] 

