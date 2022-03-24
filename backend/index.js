const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
var passwordHash = require('password-hash');

const app = express();


app.use(cors());
app.use(bodyparser.json());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
//adatbázis:

//dátum formázás:

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}



class Felhasznalo {
    constructor(szemelyesAdat, kartyaAdat, bankAdat, programAdat)
    {
        //progamAdat:
        this.felhasznalonev = programAdat[0];
        this.jelszo = programAdat[1];
        this.beosztas = programAdat[2];
        this.jogosultsag = programAdat[3];
        this.egyeb = programAdat[4];
        this.statusz = programAdat[5];

        //szemelyesAdat:
        this.nev = szemelyesAdat[0];
        this.anyaneve = szemelyesAdat[1];
        this.szuletesihely = szemelyesAdat[2];
        this.szuletesiido = formatDate(szemelyesAdat[3]);
        this.allandolakcim = szemelyesAdat[4];
        this.ideigleneslakcim = szemelyesAdat[5];
        this.gyermekekszama = szemelyesAdat[6];

        //kartyaAdat:
        this.szemelyigazolvanyszam = kartyaAdat[0];
        this.lakcimkartyaszama = kartyaAdat[1];
        this.adoazonositojel = kartyaAdat[2];
        this.tajszam = kartyaAdat[3];
        this.jogositvanyszam = kartyaAdat[4];
        this.jogositvanykategoria = kartyaAdat[5];
        
        //bankAdat:
        this.bankszamlaszam = bankAdat[0];
        this.szamlavezetobank = bankAdat[1];

    }

    getfelhasznalonev() {
        return this.felhasznalonev;
    }

    updateFelhasznalo(felhasznalonev, jelszo, nev, szuletesihely, szuletesiido, anyaneve, allandolakcim, ideigleneslakcim,
        szemelyigazolvanyszam, lakcimkartyaszama, adoazonositojel, tajszam, bankszamlaszam, szamlavezetobank,
        jogositvanyszam, jogositvanykategoria, gyermekekszama, beosztas, jogosultsag, egyeb, statusz) {
        this.felhasznalonev = felhasznalonev;
        this.jelszo = jelszo;
        this.nev = nev;
        this.szuletesihely = szuletesihely;
        this.szuletesiido = formatDate(szuletesiido);
        this.anyaneve = anyaneve;
        this.allandolakcim = allandolakcim;
        this.ideigleneslakcim = ideigleneslakcim;
        this.szemelyigazolvanyszam = szemelyigazolvanyszam;
        this.lakcimkartyaszama = lakcimkartyaszama;
        this.adoazonositojel = adoazonositojel;
        this.tajszam = tajszam;
        this.bankszamlaszam = bankszamlaszam;
        this.szamlavezetobank = szamlavezetobank;
        this.jogositvanyszam = jogositvanyszam;
        this.jogositvanykategoria = jogositvanykategoria;
        this.gyermekekszama = gyermekekszama;
        this.beosztas = beosztas;
        this.jogosultsag = jogosultsag;
        this.egyeb = egyeb;
        this.statusz = statusz;
    }


}

class Projekt {
    constructor(projekAz, projekNev, inditasIdopontja, hatarido, megrendeloAdoszam, eszkozigeny, maxLetszam) {
        this.projekAz = projekAz;
        this.projekNev = projekNev;
        this.inditasIdopontja = inditasIdopontja;
        this.hatarido = hatarido;
        this.megrendeloAdoszam = megrendeloAdoszam;
        this.eszkozigeny = eszkozigeny;
        this.maxLetszam = maxLetszam;
    }

    getProjektAz() {
        return this.projekAz;
    }
}

class Feladat {
    constructor(feladatAz, feladatnev, feladatHatarido, feladatLeiras) {
        this.feladatAz = feladatAz;
        this.feladatnev = feladatnev;
        this.feladatHatarido = feladatHatarido;
        this.feladatLeiras = feladatLeiras;
    }

    getFeladatAz() {
        return this.feladatAz;
    }
}

class Partner {
   constructor(partnerAdo, partnerNev) {
        this.partnerAdo = partnerAdo;
        this.partnerNev = partnerNev;
    }

    getPartnerAdo()
    {
        return this.partnerAdo;
    }

}


class Userinfo {
    constructor(user)
    {
        this.user = user; //Felhasznalo class
        this.instance; //tárolt felhasználó lesz
    }

    getInstance()
    {
        if (this.instance == null) //megnézi,hogy van e tárolt felhasználó
        {
           this.instance = new Userinfo(this.user); //ha nincs akkor létrehoz
        }
        return this.instance;
    }

}
//teszt a class és tervezési minta között:

/*
const user = new Felhasznalo('csudijócsaba', 'sha1$8515021e$1$f0566e8bbb6096d22a8496ee3bbfb77749b0ae6d', 'Csudijó Csaba', 'itt', '8/23/2002', 'Anya', 
'Otthon', 'Itthon', '985432TU', '125478CU', '3254987432', '123456789', '957845321578645932817456', 'Bankocska', '', '', '2', 'Kakukk', '', '', '1');
let login = new Userinfo(user);
*/

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'erpex',
    port: 3306
});


//check database connection

db.connect(err=>{
    if(err){
        console.log(err, 'dberr');
    }
    console.log('database connected...');
});

//alkalmazott - adatok kikérése

app.get('/alkalmazott', (req, res)=>{
    let qr = `select * from alkalmazott`;
    db.query(qr, (err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result.length>0){
            res.send({
                message:'felhasználók adatai',
                data: result
            })
        }
    })
});




//egy alkalmazott - adatok lekérése

app.get('/alkalmazott/:felhasznalonev', (req, res)=>{
    let username = req.params.felhasznalonev;
    let qr = `select * from alkalmazott where Felhasznalonev = '${username}'`;
    db.query(qr, (err, result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:'adat:',
                data:result
            });
        }
        else{
            res.send({
                message:'nincs adat',

            });
        }
    });

});



//alkalmazott - adatok felvétele

app.get('/alkalmazottkrealas', (req, res)=>{

    let szemelyesAdat = req.query.szemelyesAdat;
    let kartyaAdat = req.query.kartyaAdat;
    let programAdat = req.query.programAdat;
    let bankAdat = req.query.bankAdat;


    //progamAdat:
    felhasznalonev = programAdat[0];
    jelszo = passwordHash.generate(programAdat[1]);
    beosztas = programAdat[2];
    jogosultsag = programAdat[3];
    egyeb = programAdat[4];
    statusz = programAdat[5];

    //szemelyesAdat:
    nev = szemelyesAdat[0];
    anyaNev = szemelyesAdat[1];
    szuletesiHely = szemelyesAdat[2];
    szuletesiIdo = formatDate(szemelyesAdat[3]);
    allandoLakcim = szemelyesAdat[4];
    ideiglenesLakcim = szemelyesAdat[5];
    gyermekekSzama = szemelyesAdat[6];

    //kartyaAdat:
    szemelyigSzam = kartyaAdat[0];
    lakcimkSzam = kartyaAdat[1];
    adoazJel = kartyaAdat[2];
    tajSzam = kartyaAdat[3];
    jogositvanySzam = kartyaAdat[4];
    jogositvanyKategoriaSzam = kartyaAdat[5];

    //bankAdat:
    bankszamlaSzam = bankAdat[0];
    szamlavezetoBankNev = bankAdat[1];
    
    // majd a státuszt is le lehet kérni ha kell
    
    let qr = `INSERT INTO alkalmazott (felhasznalonev, jelszo, nev, szuletesiHely, szuletesiIdo, anyaNev, allandoLakcim, ideiglenesLakcim, szemelyigSzam, lakcimkSzam, adoazJel, tajSzam, bankszamlaSzam, szamlavezetoBankNev, jogositvanySzam, jogositvanyKategoriaSzam, gyermekekSzama, beosztas, jogosultsag, egyeb, statusz)  VALUES ('${felhasznalonev}', '${jelszo}', '${nev}', '${szuletesiHely}', '${szuletesiIdo}', '${anyaNev}', '${allandoLakcim}', '${ideiglenesLakcim}', '${szemelyigSzam}', '${lakcimkSzam}', '${adoazJel}', '${tajSzam}', '${bankszamlaSzam}', '${szamlavezetoBankNev}', '${jogositvanySzam}', '${jogositvanyKategoriaSzam}', '${gyermekekSzama}', '${beosztas}', '${jogosultsag}', '${egyeb}', '${statusz}')`;

    db.query(qr, (err,result)=>{
        if(err){
            console.log(err);
        }
       

        if(result != null){
            res.send({
                message:'employee data inserted'

            });
        }
        else{
            res.send({
                message:'hibás adatok'
            });
        }
    });
});

//alkalmazott adatmódosítás

app.get('/alkalmazott/:felhasznalonev', (req, res)=>{

    let felhasznalonev =req.params.felhasznalonev;

    let jelszo = passwordhash.generate(req.query.jelszo);
    let nev = req.query.nev;
    let szuletesihely = req.query.szuletesiHely;
    let szuletesiido = formatDate(req.query.szuletesiIdo);
    let anyaneve = req.query.anyaNev;
    let allandolakcim = req.query.allandoLakcim;
    let ideigleneslakcim = req.query.ideiglenesLakcim;
    let szemelyigazolvanyszam = req.query.szemelyigSzam;
    let lakcimkartyaszama = req.query.lakcimkSzam;
    let adoazonositojel = req.query.adoazJel;
    let tajszam = req.query.tajSzam;
    let bankszamlaszam = req.query.bankszamlaSzam;
    let szamlavezetobank = req.query.szamlavezetoBankNev;
    let jogositvanyszam = req.query.jogositvanySzam;
    let jogositvanykategoria = req.query.jogositvanyKategoriaSzam;
    let gyermekekszama = req.query.gyermekekSzama;
    let beosztas = req.query.beosztas;
    let jogosultsag = req.query.jogosultsag;
    let egyeb = req.query.egyeb;

    let qr = `update alkalmazott set jelszo = '${jelszo}', nev = '${nev}', szuletesiHely = '${szuletesihely}', szuletesiIdo = '${szuletesiido}', anyaNev='${anyaneve}', allandoLakcim='${allandolakcim}', ideiglenesLakcim='${ideigleneslakcim}', szemelyigSzam = '${szemelyigazolvanyszam}', lakcimkSzam = '${lakcimkartyaszama}', adoazJel='${adoazonositojel}', tajSzam = '${tajszam}', bankszamlaSzam = '${bankszamlaszam}', szamlavezetoBankNev = '${szamlavezetobank}', jogositvanySzam = '${jogositvanyszam}', jogositvanyKategoriaSzam = '${jogositvanykategoria}', gyermekekSzama = '${gyermekekszama}', beosztas = '${beosztas}', jogosultsag = '${jogosultsag}', egyeb='${egyeb}' where felhasznalonev = '${felhasznalonev}'`;

    db.query(qr,(err, result)=>{
        if(err){    

            console.log(err);
        }
        res.send({
            message:'employee data updated',
            data:result
        });
    });
});

//Cég adatainak lekérése

app.get('/ceg', (req, res) =>
{
    let qr = 'select * from ceg';
    db.query(qr, (err, result) =>
    {
        if(err)
        {
            console.log(err);
        }

        if(result){
            res.send(
            {
                message:'projektek adatai',
                data: result
            });
        }
    });
});
 
//Partner adatainak lekérése

app.get('/partner', (req, res) => {
    let qr = 'select * from partner';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result) {
            res.send(
                {
                    message: 'partnerek adatai',
                    data: result
                });
        }
    });
});

//feladat hozzáadása az adatbázishoz

app.post('/feladatok', (req, res)=>{
    let feladatnev = req.query.feladatnev;
    let hatarido = req.query.hatarido;
    let feladatleiras = req.query.feladatleiras;

    let qr = `call addTask('${feladatnev}', '${hatarido}', '${feladatleiras}')`;

    db.query(qr, (err, result)=>{
        if(err)
        {
            console.log(err);
        }
       

        if(result != null)
        {
            res.send(
            {
                message:'data inserted'
            });
        }
        else
        {
            res.send(
            {
                message:'hibás adatok'
            });
        }
    });
});

//új partner hozzáadása

app.post('/partnerek', (req,res) =>
{
    let projekAz = req.body.projekAz;
    let projekNev = req.body.projekNev;
    let inditasIdopontja = formatDate(req.body.inditasIdopontja);
    let hatarido = formatDate(req.body.hatarido);
    let megrendeloAdoszam = req.body.megrendeloAdoszam;
    let eszkozigeny = req.body.eszkozigeny;
    let maxLetszam = req.body.maxLetszam;

    let qr = `insert into projekt (projekAz, projekNev, inditasIdopontja, hatarido, megrendeloAdoszam, eszkozigeny, maxLetszam) values('${projekAz}', '${projekNev}', '${inditasIdopontja}', '${hatarido}' , '${megrendeloAdoszam}', '${eszkozigeny}', '${maxLetszam}'`;

    db.query(qr, (err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
       

        if(result != null)
        {
            res.send(
            {
                message:'data inserted'
            });
        }
        else
        {
            res.send(
            {
                message:'hibás adatok'
            });
        }
    });
});

//Összes projekt kiíratása

app.get('/projekt', (req, res)=>{
    let qr = `select * from projekt`;

    db.query(qr, (err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result){
            res.send({
                message:'projektek adatai',
                data: result
            });
        }
    });
});

//projektek módosítása

app.put('/projekt/:projektAz', (req, res)=>
{
    let projektAz = req.params.projektAz;

    let projektNev = req.body.projekNev;
    let inditasIdopontja = formatDate(req.body.inditasIdopontja);
    let hatarido = formatDate(req.body.hatarido);
    let megrendeloAdoszam = req.body.megrendeloAdoszam;
    let eszkozigeny = req.body.eszkozigeny;
    let maxLetszam = req.body.maxLetszam;

    let qr = `update projekt set projektNev = '${projektNev}', inditasIdopontja = '${inditasIdopontja}', hatarido ='${hatarido}', megrendeloAdoszam = '${megrendeloAdoszam}', eszkozigeny = '${eszkozigeny}', maxLetszam = '${maxLetszam}' where projektAz = '${projektAz}'`;

    db.query(qr,(err, result)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message:'projekt data updated',
            data:result
        });
    });
});

//Projekthezrendel tábla adatainak lekérése

app.get('/projekthezrendel', (req, res) =>{
    let qr = `select * from projekthezrendel `
    db.query(qr, (err, result) => {

      
        if(err) {
            console.log(err);
        }

        if(result) {
            res.send(
                {
                    message: 'parojekthez rendel tabla adatai',
                    data: result
                })
            }
    })
});

//Bejelentkezés - Jelszó összehasonlítás

app.get('/log', (req, res)=>{
    passwordHash.verify(req.query.beirt, req.query.hashelt);

    res.send({
        data: passwordHash.verify(req.query.beirt, req.query.hashelt)
    });
});

app.get('/felhasznalonevkrealas', (req,res) =>
{
    let teljesnev = req.query.nev;
    teljesnev = teljesnev.replace(" ", "").toLowerCase();
    let qr = `select felhasznalonev  from alkalmazott order by felhasznalonev`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err);
        }
        
        for(let i = 0; i < result.length; i++){
            let j = 1;
            if(result[i].felhasznalonev === teljesnev)
            {
                adatbnevSzama = result[i].felhasznalonev;
                adatbnevSzama = adatbnevSzama.split("_")[1];
                if(adatbnevSzama != null)
                {
                    while(j <= adatbnevSzama)
                    {
                        j++;
                    }
                }
                teljesnev += "_" + j;
                teljesnev = teljesnev.split("_")[0] + "_" + j;
            
            }
        }


        //console.log(teljesnev);
            res.send({
            message: 'felhasznalonev letrehozas',
            data: teljesnev
           
        });
    });
});

app.get('/projektkrealas',(req, res) =>
{
    let projektAz = req.query.projektaz;
    let projektNev = req.query.projektnev;
    var today = new Date();
    var inditasIdopontja = fromatDate(today);
    //today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    let hatarido = formatDate(req.query.hatarido);
    let megrendeloAdoszam = req.query.megrendeloAdo;
    let eszkozigeny = 'nincs';
    let maxLetszam = req.query.limit;

    let qr = `insert into projekt (projektAz, projektNev, inditasIdopontja, hatarido, megrendeloAdoszam, eszkozigeny, maxLetszam) values('${projektAz}', '${projektNev}', '${inditasIdopontja}', '${hatarido}' , '${megrendeloAdoszam}', '${eszkozigeny}', '${maxLetszam}')`;

    db.query(qr, (err, result)=>{
        if (err) {
            console.log(err);
        }
       

        if (result != null) {
            res.send(
                {
                    message: 'data inserted'
                });
        }
        else {
            res.send(
                {
                    message: 'hibás adatok'
                });
        }

    })

});

app.get('/projektidkrealas', (req, res) =>
{
    let id = 1;

    let qr = `select projektAz from projekt`;

    db.query(qr, (error, result)=>{
        if (error) {
            console.log(err);
        }

        for(let i = 0; i < result.length; i++)
        {
            if(id == result[i].projektAz)
            {
                id++;
            }
        }

        res.send({
            message: 'projektId letrehozas',
            data: id
        })
    })

});

app.get('/putleader', (req, res) =>
{
    let projektAz = req.query.projektAz;
    let felhasznalonev = req.query.felhasznalonev;
    let projektVez = "IGEN";
    let qr = `insert into projekthezrendel (projektAz, felhasznalonev, vezeto) values('${projektAz}', '${felhasznalonev}', '${projektVez}')`;

    db.query(qr, (error, result)=>{
        if (error) {
            console.log(error);
        }
        res.send({
            message: 'Kötőtábla beszúrás letrehozas',
            data: result
        })
    })
});

app.get('/getLeaders', (req, res)=>
{
    let qr = `SELECT felhasznalonev FROM alkalmazott where jogosultsag = 'Vezeto'`

    db.query(qr, (error, result)=>{
        if (error) {
            console.log(error);
        }
        res.send({
            message: 'Projektvezetök megtalalva',
            data: result
            
        })
    })
});

app.get('/feladatok', (req, res)=>
{
    let qr = `select * from feladatok`;

    db.query(qr, (err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result){
            res.send({
                message:'feladatok adatai',
                data: result
            });
        }
    });
});

app.get('/TasksforUser', (req, res)=>{
    let felhasznalo = req.query.felhasznalo;

    let qr = `call myTasks('${felhasznalo}')`;

    db.query(qr, (err, result)=>{
        if(err){
            console.log(err, 'errs');
        }

        if(result){
            res.send({
                message: 'done',
                data: result
            });
        }
    });
})

app.get('/putTask', (req,res)=>
{
    let feladatNev = req.query.feladatNev;
    let feladatHatarido = formatDate(req.query.Hatarido);
    let feladatLeiras = req.query.feladatLeiras;
    let qr = `insert into feladatok (feladatNev, feladatHatarido, feladatLeiras) values('${feladatNev}', '${feladatHatarido}', '${feladatLeiras}')`;

    db.query(qr, (error, result)=>{
        if (error) {
            console.log(error);
        }
        res.send({
            message: 'Feladat beszúrás letrehozva',
            data: result
        })
    })
});

app.get('/getfeladatAz',(req, res)=>
{
    let qr = `SELECT feladatAz FROM feladatok ORDER BY feladatAz DESC LIMIT 1`;

    db.query(qr, (error, result)=>{
        if (error) {
            console.log(error);
        }
        res.send({
            message: 'feladat az megtalálása',
            data: result
        })
    })
});

app.get('/putFeladathozRendel', (req,res)=>
{
    let felhasznalonev = req.query.felhasznalonev;
    let feladatAz = req.query.feladatAz;

    let qr = `insert into feladathozrendel (felhasznalonev, feladatAz) values('${felhasznalonev}', '${feladatAz}')`;

    db.query(qr, (error, result)=>{
        if (error) {
            console.log(error);
        }
        res.send({
            message: 'Feladat beszúrás letrehozva',
            data: result
        })
    })
});

app.get('/deleteTask', (req, res)=>{
    let feladatAz= req.query.feladatAz;
    let qr = `call deleteTask('${feladatAz}')`;
    let qr2 = `call deleteFeladathozRendel('${feladatAz}')`;
    db.query(qr, (error, result)=>{
        if (error) {
            console.log(error);
        }
    })
    db.query(qr2, (error, result)=>{
        if (error) {
            console.log(error);
        }
    })
});



app.listen(3000, ()=>
{
    console.log('server running..');
});