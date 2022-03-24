A rendszer főbb részei [[#^841eb5]]
A fejlesztői csapat tagjai [[#^1ab7e6]]
Első elképzelés [[#^403f2a]]
Piac meghatározása [[#^91b492]]
Group meetingek [[#^1bb65c]]
Validálás - első kör [[#^45717d]]
Pivot [[#^8df950]]
Validálás - második kör [[#^1013d1]]
GDPR - alkalmazottak adatainak biztonsága [[#^721a3c]]
A rendszer működése [[#^f5de4d]]


---------------------------------------------------------------------



**A rendszer főbb részei:** ^841eb5

- webalkalmazás
- adatbázis
	
---------------------------------------------------------------------

**A fejlesztői csapat tagjai:** ^1ab7e6

- [[Üzleti elemzés és menedzsment]] - Král Friderika
- [[Frontend]] - Jenei Péter
- [[Adatbázis]] - Heffler Péter
- [[Backend]] - Birkás Csaba
- Tester: Grózinger István

---------------------------------------------------------------------

**Első elképzelés** ^403f2a

Az alkalmazásban több jogosultsági szintet különböztetünk meg (vállalatvezetői, projektvezetői, beosztott). A belépéshez előre generált felhasználónév és jelszó szükséges, ezeket az adatbázisban tároljuk. A felhasználók bejelentkezése után a jogosultságától függően más-más felületet látnak. 
A legkevesebb funkcióval a beosztottak rendelkeznek. Számukra a szoftver lehetőséget biztosít a cégen belül jelenleg folyamatban lévő projektek listázására, illetve ezekhez történő csatlakozási kérés küldésére. Az alkalmazáson belül lehetőséget adunk a jelenléti ív vezetésére és a dolgozó - vállalat által tárolt - adatainak megtekintésére, illetve ezen adatok módosítására irányuló kérés küldésére.
A projektvezetői jogosultsággal rendelkező felhasználók elérhetik az alattuk futó projektek adatait, kioszthatnak feladatokaz a beosztottaiknak. 
A vállalatirányító felhasználók számára a többi szint funkcióin felül lehetőséget biztosítunk a dolgozói adatok kezeléséhez, a dolgozók projekthezrendeléséhez, illetve projektről történő levételéhez, továbbá a projektek létrehozásához. ^0fe147

---------------------------------------------------------------------

**Piac meghatározása** ^91b492


A projekt véghatárideje a félév vége. Ebből fakadóan nem feltétlenül tudunk egy minden céget kiszolgáló alkalmazást fejleszteni, a funkciók száma korlátozott. A piacunkat ennek megfelelően mérjük fel, és a funkciók hiányából előnyt faragunk. Ha kis- és középvállalkozások számára fejlesztünk, akkor sokkal kevesebb funkcióra lesz szükségünk. Továbbá a konkurenciánk is kisebb, hiszen a legtöbb profi vállalatirányítási rendszer nagyvállalatokra van szabva, illetve megfizethetetlenek a legtöbb kkv számára. Ha az árainkat nem emeljük magasra, a funkciók küzöl pedig ki tudjuk választani azt a párat, amelyek a legnagyobb segítséget tudják nyújtani a kisebb cégeknek, akkor van lehetőségünk a piacralépésre.

---------------------------------------------------------------------

**Group meetingek** [[Group-meeting#^a5d5f7]] ^1bb65c

---------------------------------------------------------------------

**Validálás** - első kör ^45717d

2021.10.15.
Mivel a várt piacunkat a kis- és középvállalkozások jelentik, ezért a projekt validálásához egy helyi kkv-t kerestünk fel. Több találkozót és megbeszélést sikerült velük lebonyolítanunk. Az első megbeszélések alatt világossá vált, hogy a cégek különbözőségéből fakadóan a rendszerünket minden megrendelőnkre specifikálnunk kell. A rendszer felépítésének rugalmasnak kell lennie.

---------------------------------------------------------------------

**Pivot** ^8df950

Rugalmas rendszert építünk. A vállalatirányítási rendszerünk moduláris lesz, nem integrált. Hangsúlyt kell fektetnünk a minőségirányítási dokumentumokra. A félév alatt a fejlesztéshez a Kőmérő kft. minőségirányítási dokumentumait fogjuk használni, amelyek megtalálhatók a cég weboldalán.
Új funkciókat kap a projektvezetői jogosultsággal rendelkező felhasználó. Az alkalmazáson belül egyszerűen vezethetik az ISO dokumentációt és értesítést kapnak a korábban felvett részfeladatok határidejének lejártáról. Ezáltal a vállalat saját ISO szabványához igazodva egyszerűen lehet egységesíteni a dokumentációt.
A vállalatvezetők is segítséget kapnak ebben a témakörben is, hiszen a projektek létrehozásához csak ezen felhasználóknek van jogosultságuk egy form kitöltésével, ennek segítségével aotomatikusan kitöltődik az ISO törzslap.

---------------------------------------------------------------------

**Validálás** - második kör ^1013d1

2021.10.20.
A validálás második körében a korábban felkeresett cég vezetőivel és alkalmazottaival folytattunk egy másfél órás értekezletet. Ennek eredményeképp a cég megadja nekünk az alkalmazotti adatbázis általános adatait és a tároladnó adatok típusát. Megtudtuk, hogy az alkalmazottak személyes adatait meg kell őrizni, nem lehet kitörölni a munkaviszony megszűnését követően sem. Viszont a GDPR szabályai a belső szoftverek esetében is előírják, hogy a felhasználók képesek legyenek információt szerezni az adataik tárolásának módjáról, illetve arról, hogy ezeket az adatokat milyen szereplőknek továbbítják.
A projekt határidejét tekintve reálisnak látjuk a pénzügyi, a feladatkezelési és a munkaidőelszámolási modulok felfüggesztését. Helyette az alkalmazotti adatok kezelése, a projektkezelés és a dokumentumkezelés kap hangsúlyt.

---------------------------------------------------------------------

**GDPR - alkalmazottak adatainak biztonsága** ^721a3c

[[Email-ek#^5c72d6]]

---------------------------------------------------------------------

**A rendszer működése** ^f5de4d

[[A rendszer működése, funkciók]]

