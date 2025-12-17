// const dbtoken = db.ref('db_token/').on('value', tokenSuccess, handleError)
// import{db} from "db.js";
let loop01;

// let tokenNew = 0;

// function tokenSuccess(items1) {
//     tokenNew = items1.val()[0]['token'];
//     let tokenAturan = document.getElementById('token');
//     tokenAturan.innerHTML = `${tokenNew}`;
// }


// function handleError(error) {
//     console.log(error);
// }

let jawabB = [];


function mulai1() {

    const petunjuk = document.getElementById('petunjukkuis');
    const soal = document.getElementById('soalkuis');

    petunjuk.hidden = true;
    soal.hidden = false;
    console.log(soal)

    listsoal1();
}

function listsoal1() {
    let noSoal = 1;

    function getSoal(url, success, error) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(xhr.response);
                } else if (XPathEvaluator.status === 404) {
                    error();
                }
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    }

    getSoal('kuis1.json', (results) => {
        const listSoalJson = JSON.parse(results);
        let soal = '';
        let soalRand = [];
        let soalRandom = [];
        let i = 0;
        console.log(listSoalJson)
        while (i < listSoalJson.length) {
            let rand = Math.floor(Math.random() * listSoalJson.length);
            soalRand[i] = listSoalJson[rand];
            soalRandom = Array.from(new Set(soalRand));
            i = soalRandom.length;
        }

        soalRandom.forEach(s => {
            soal += tampilSoal(s);
        });

        const listSoal = document.querySelector('.list-soal');
        listSoal.innerHTML = soal;


        document.getElementById("id1").hidden = false;
        document.getElementById("id2").hidden = true;
        document.getElementById("id3").hidden = true;
        document.getElementById("id4").hidden = true;
        document.getElementById("id5").hidden = true;
        document.getElementById("id6").hidden = true;
        document.getElementById("id7").hidden = true;
        document.getElementById("id8").hidden = true;
        document.getElementById("id9").hidden = true;
        document.getElementById("id10").hidden = true;
        document.getElementById("id11").hidden = true;
        document.getElementById("id12").hidden = true;
        document.getElementById("id13").hidden = true;
        document.getElementById("id14").hidden = true;
        document.getElementById("id15").hidden = true;


    }, () => {

    });

    countDownDate = new Date().getTime();
    //waktu 45 menit
    countDownDate += 2700750;

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Perhitungan waktu untuk menit dan detik
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("waktu").innerHTML = minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("waktu").innerHTML = "Waktu Selesai";
            nilaiwktu = 1;
            cekKuis1TO();
        }
    }, 1000);

    let idx = 0;
    function tampilSoal(s) {
        jawabB[idx++] = s.jawaban;
        return `<div id="id${idx}">
                <form>
                <p>${noSoal++}. ${s.soal}</p>
                <input type="radio" id="jA${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="A">
                <label for="jA${s.id}">${s.a}</label><br>
                <input type="radio" id="jB${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="B">
                <label for="jB${s.id}">${s.b}</label><br>
                <input type="radio" id="jC${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="C">
                <label for="jC${s.id}">${s.c}</label><br>
                <input type="radio" id="jD${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="D">
                <label for="jD${s.id}">${s.d}</label><br>
                </form>
                </div>`;
    }
}

let kuis1_1 = "";
let kuis1_2 = "";
let kuis1_3 = "";
let kuis1_4 = "";
let kuis1_5 = "";
let kuis1_6 = "";
let kuis1_7 = "";
let kuis1_8 = "";
let kuis1_9 = "";
let kuis1_10 = "";



let nilai = 0;
function cek1(pilih) {
    kuis1_1 = pilih;
    document.getElementById("soal1").classList.add('text-white', 'btn-primary');
    document.getElementById("soal1").classList.remove('btn-light');
}
function cek2(pilih) {
    kuis1_2 = pilih;
    document.getElementById("soal2").classList.add('text-white', 'btn-primary');
    document.getElementById("soal2").classList.remove('btn-light');
}
function cek3(pilih) {
    kuis1_3 = pilih;
    document.getElementById("soal3").classList.add('text-white', 'btn-primary');
    document.getElementById("soal3").classList.remove('btn-light');
}
function cek4(pilih) {
    kuis1_4 = pilih;
    document.getElementById("soal4").classList.add('text-white', 'btn-primary');
    document.getElementById("soal4").classList.remove('btn-light');
}
function cek5(pilih) {
    kuis1_5 = pilih;
    document.getElementById("soal5").classList.add('text-white', 'btn-primary');
    document.getElementById("soal5").classList.remove('btn-light');
}
function cek6(pilih) {
    kuis1_6 = pilih;
    document.getElementById("soal6").classList.add('text-white', 'btn-primary');
    document.getElementById("soal6").classList.remove('btn-light');
}
function cek7(pilih) {
    kuis1_7 = pilih;
    document.getElementById("soal7").classList.add('text-white', 'btn-primary');
    document.getElementById("soal7").classList.remove('btn-light');
}
function cek8(pilih) {
    kuis1_8 = pilih;
    document.getElementById("soal8").classList.add('text-white', 'btn-primary');
    document.getElementById("soal8").classList.remove('btn-light');
}
function cek9(pilih) {
    kuis1_9 = pilih;
    document.getElementById("soal9").classList.add('text-white', 'btn-primary');
    document.getElementById("soal9").classList.remove('btn-light');
}
function cek10(pilih) {
    kuis1_10 = pilih;
    document.getElementById("soal10").classList.add('text-white', 'btn-primary');
    document.getElementById("soal10").classList.remove('btn-light');
}
function cek11(pilih) {
    kuis1_11 = pilih;
    document.getElementById("soal11").classList.add('text-white', 'btn-primary');
    document.getElementById("soal11").classList.remove('btn-light');
}
function cek12(pilih) {
    kuis1_12 = pilih;
    document.getElementById("soal12").classList.add('text-white', 'btn-primary');
    document.getElementById("soal12").classList.remove('btn-light');
}
function cek13(pilih) {
    kuis1_13 = pilih;
    document.getElementById("soal13").classList.add('text-white', 'btn-primary');
    document.getElementById("soal13").classList.remove('btn-light');
}
function cek14(pilih) {
    kuis1_14 = pilih;
    document.getElementById("soal14").classList.add('text-white', 'btn-primary');
    document.getElementById("soal14").classList.remove('btn-light');
}
function cek15(pilih) {
    kuis1_15 = pilih;
    document.getElementById("soal15").classList.add('text-white', 'btn-primary');
    document.getElementById("soal15").classList.remove('btn-light');
}


// $(function () {
    // setInterval(cek, 1000);
// });

let kuis1 = [];
function cek() {
    kuis1 = [kuis1_1, kuis1_2, kuis1_3, kuis1_4, kuis1_5, kuis1_6, kuis1_7, kuis1_8, kuis1_9, kuis1_10, kuis1_11, kuis1_12, kuis1_13, kuis1_14, kuis1_15];
}

function dialogsubmit() {
    $('#ModalSubmit1').modal('show');
}

function cekKuis1TO() {
    const soalkuis = document.getElementById('soalkuis');
    soalkuis.hidden = true;
    const hasilkuis = document.getElementById('hasilkuis');
    hasilkuis.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (kuis1[a] == jawabB[a]) {
            nilai = nilai + 15;
        }
    }

    localStorage.setItem("nkuis1", nilai);
    var namaS = localStorage.getItem('nama');
    var kelasS = localStorage.getItem('kelas');
    var sekolahS = localStorage.getItem('sekolah');

    alert(`Nilai Anda ${jawaban} / 15`);
}

function cekKuis1TO() {
    const soalkuis = document.getElementById('soalkuis');
    soalkuis.hidden = true;
    const hasilkuis = document.getElementById('hasilkuis');
    hasilkuis.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (kuis1[a] == jawabB[a]) {
            nilai = nilai + 15;
        }
    }

    localStorage.setItem("nkuis1", nilai);
    var namaS = localStorage.getItem('nama');
    var kelasS = localStorage.getItem('kelas');
    var sekolahS = localStorage.getItem('sekolah');

    if (nilai < 70) {
        const namaHTL = document.getElementById('namaHTL');
        namaHTL.innerHTML = namaS;
        const kelasHTL = document.getElementById('kelasHTL');
        kelasHTL.innerHTML = kelasS;
        const sekolahHTL = document.getElementById('sekolahHTL');
        sekolahHTL.innerHTML = sekolahS;
        const nilaiHTL = document.getElementById('nilaiHTL');
        nilaiHTL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = false;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = true;
    } else {
        const namaHL = document.getElementById('namaHL');
        namaHL.innerHTML = namaS;
        const kelasHL = document.getElementById('kelasHL');
        kelasHL.innerHTML = kelasS;
        const sekolahHL = document.getElementById('sekolahHL');
        sekolahHL.innerHTML = sekolahS;
        const nilaiHL = document.getElementById('nilaiHL');
        nilaiHL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = true;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = false;
    }

    let harinya = hari();
    let waktunya = waktu();

    window.createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);

}



function cekKuis1() {
    if ((kuis1_1 == "") || (kuis1_2 == "") || (kuis1_3 == "") || (kuis1_4 == "") || (kuis1_5 == "") || (kuis1_6 == "") || (kuis1_7 == "") || (kuis1_8 == "") || (kuis1_9 == "") || (kuis1_10 == "") || (kuis1_11 == "") || (kuis1_12 == "") || (kuis1_13 == "") || (kuis1_14 == "") || (kuis1_15 == "")) {
        $('#ModalKuisKosong').modal('show')
        $('#ModalSubmit1').modal('hide')
    } else {
        $('#ModalSubmit1').modal('hide')
        for (let a = 0; a < jawabB.length; a++) {
            if (kuis1[a] == jawabB[a]) {
                const soalkuis = document.getElementById('soalkuis');
                soalkuis.hidden = true;
                const hasilkuis = document.getElementById('hasilkuis');
                hasilkuis.hidden = false;
                nilai = nilai + 15;
            }
        }

        localStorage.setItem("nkuis1", nilai);
        var namaS = sessionStorage.getItem('nama');
        var kelasS = sessionStorage.getItem('kelas');
        var sekolahS = sessionStorage.getItem('sekolah');


        if (nilai < 70) {
            const namaHTL = document.getElementById('namaHTL');
            namaHTL.innerHTML = namaS;

            const kelasHTL = document.getElementById('kelasHTL');
            kelasHTL.innerHTML = kelasS;
            
             const sekolahHTL = document.getElementById('sekolahHTL');
            sekolahHTL.innerHTML = sekolahS;
            const nilaiHTL = document.getElementById('nilaiHTL');
            nilaiHTL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = false;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = true;
        } else {
            const namaHL = document.getElementById('namaHL');
            namaHL.innerHTML = namaS;
            const kelasHL = document.getElementById('kelasHL');
            kelasHL.innerHTML = kelasS;
            const sekolahHL = document.getElementById('sekolahHL');
            sekolahHL.innerHTML = sekolahS;
            const nilaiHL = document.getElementById('nilaiHL');
            nilaiHL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = true;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = false;
        }



        function waktu() {
            var tanggal = new Date();
            setTimeout("waktu()", 1000);
            return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
        }
        
        // harinya
        function hari() {
            tanggallengkap = new String();
            namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
            namahari = namahari.split(" ");
            namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
            namabulan = namabulan.split(" ");
            tgl = new Date();
            hari = tgl.getDay();
            tanggal = tgl.getDate();
            bulan = tgl.getMonth();
            tahun = tgl.getFullYear();
            tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
            return (tanggallengkap);
        }
     
        

        let harinya = hari();
        console.log(harinya);
        let waktunya = waktu();
        console.log(waktunya);

        // Pastikan createTask dipanggil dari window
        window.createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
    }
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1() {
    indeks.innerHTML = 1;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soalPrev").hidden = true;
    document.getElementById("id1").hidden = false;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal2();");
}

function soal2() {
    indeks.innerHTML = 2;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = false;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal1();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal3();");
}

function soal3() {
    indeks.innerHTML = 3;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = false;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal2();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal4();");
}

function soal4() {
    indeks.innerHTML = 4;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = false;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal3();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal5();");
}

function soal5() {
    indeks.innerHTML = 5;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = false;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal4();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal6();");
}

function soal6() {
    indeks.innerHTML = 6;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = false;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal5();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal7();");
}

function soal7() {
    indeks.innerHTML = 7;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = false;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal6();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal8();");
}

function soal8() {
    indeks.innerHTML = 8;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = false;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal7();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal9();");
}

function soal9() {
    indeks.innerHTML = 9;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = false;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal8();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal10();");
}

function soal10() {
    indeks.innerHTML = 10;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = false;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal9();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal11();");
}

function soal11() {
    indeks.innerHTML = 11;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = false;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal10();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal12();");
}

function soal12() {
    indeks.innerHTML = 12;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = false;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal11();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal13();");
}

function soal13() {
    indeks.innerHTML = 13;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = false;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal12();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal14();");
}

function soal14() {
    indeks.innerHTML = 14;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = false;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal13();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal15();");
}

function soal15() {
    indeks.innerHTML = 15;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = true;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = false;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal14();");
}// const dbtoken = db.ref('db_token/').on('value', tokenSuccess, handleError)
// import{db} from "db.js";
let loop01;

// let tokenNew = 0;

// function tokenSuccess(items1) {
//     tokenNew = items1.val()[0]['token'];
//     let tokenAturan = document.getElementById('token');
//     tokenAturan.innerHTML = `${tokenNew}`;
// }


// function handleError(error) {
//     console.log(error);
// }

let jawabB = [];


function mulai1() {

    const petunjuk = document.getElementById('petunjukkuis');
    const soal = document.getElementById('soalkuis');

    petunjuk.hidden = true;
    soal.hidden = false;
    console.log(soal)

    listsoal1();
}

function listsoal1() {
    let noSoal = 1;

    function getSoal(url, success, error) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(xhr.response);
                } else if (XPathEvaluator.status === 404) {
                    error();
                }
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    }

    getSoal('kuis1.json', (results) => {
        const listSoalJson = JSON.parse(results);
        let soal = '';
        let soalRand = [];
        let soalRandom = [];
        let i = 0;
        console.log(listSoalJson)
        while (i < listSoalJson.length) {
            let rand = Math.floor(Math.random() * listSoalJson.length);
            soalRand[i] = listSoalJson[rand];
            soalRandom = Array.from(new Set(soalRand));
            i = soalRandom.length;
        }

        soalRandom.forEach(s => {
            soal += tampilSoal(s);
        });

        const listSoal = document.querySelector('.list-soal');
        listSoal.innerHTML = soal;


        document.getElementById("id1").hidden = false;
        document.getElementById("id2").hidden = true;
        document.getElementById("id3").hidden = true;
        document.getElementById("id4").hidden = true;
        document.getElementById("id5").hidden = true;
        document.getElementById("id6").hidden = true;
        document.getElementById("id7").hidden = true;
        document.getElementById("id8").hidden = true;
        document.getElementById("id9").hidden = true;
        document.getElementById("id10").hidden = true;
        document.getElementById("id11").hidden = true;
        document.getElementById("id12").hidden = true;
        document.getElementById("id13").hidden = true;
        document.getElementById("id14").hidden = true;
        document.getElementById("id15").hidden = true;


    }, () => {

    });

    countDownDate = new Date().getTime();
    //waktu 45 menit
    countDownDate += 2700750;

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Perhitungan waktu untuk menit dan detik
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("waktu").innerHTML = minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("waktu").innerHTML = "Waktu Selesai";
            nilaiwktu = 1;
            cekKuis1TO();
        }
    }, 1000);

    let idx = 0;
    function tampilSoal(s) {
        jawabB[idx++] = s.jawaban;
        return `<div id="id${idx}">
                <form>
                <p>${noSoal++}. ${s.soal}</p>
                <input type="radio" id="jA${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="A">
                <label for="jA${s.id}">${s.a}</label><br>
                <input type="radio" id="jB${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="B">
                <label for="jB${s.id}">${s.b}</label><br>
                <input type="radio" id="jC${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="C">
                <label for="jC${s.id}">${s.c}</label><br>
                <input type="radio" id="jD${s.id}" onclick="cek${idx}(this.value);" name="jawab${s.id}" value="D">
                <label for="jD${s.id}">${s.d}</label><br>
                </form>
                </div>`;
    }
}

let kuis1_1 = "";
let kuis1_2 = "";
let kuis1_3 = "";
let kuis1_4 = "";
let kuis1_5 = "";
let kuis1_6 = "";
let kuis1_7 = "";
let kuis1_8 = "";
let kuis1_9 = "";
let kuis1_10 = "";
let kuis1_11 = "";
let kuis1_12 = "";
let kuis1_13 = "";
let kuis1_14 = "";
let kuis1_15 = "";


let nilai = 0;
function cek1(pilih) {
    kuis1_1 = pilih;
    document.getElementById("soal1").classList.add('text-white', 'btn-primary');
    document.getElementById("soal1").classList.remove('btn-light');
}
function cek2(pilih) {
    kuis1_2 = pilih;
    document.getElementById("soal2").classList.add('text-white', 'btn-primary');
    document.getElementById("soal2").classList.remove('btn-light');
}
function cek3(pilih) {
    kuis1_3 = pilih;
    document.getElementById("soal3").classList.add('text-white', 'btn-primary');
    document.getElementById("soal3").classList.remove('btn-light');
}
function cek4(pilih) {
    kuis1_4 = pilih;
    document.getElementById("soal4").classList.add('text-white', 'btn-primary');
    document.getElementById("soal4").classList.remove('btn-light');
}
function cek5(pilih) {
    kuis1_5 = pilih;
    document.getElementById("soal5").classList.add('text-white', 'btn-primary');
    document.getElementById("soal5").classList.remove('btn-light');
}
function cek6(pilih) {
    kuis1_6 = pilih;
    document.getElementById("soal6").classList.add('text-white', 'btn-primary');
    document.getElementById("soal6").classList.remove('btn-light');
}
function cek7(pilih) {
    kuis1_7 = pilih;
    document.getElementById("soal7").classList.add('text-white', 'btn-primary');
    document.getElementById("soal7").classList.remove('btn-light');
}
function cek8(pilih) {
    kuis1_8 = pilih;
    document.getElementById("soal8").classList.add('text-white', 'btn-primary');
    document.getElementById("soal8").classList.remove('btn-light');
}
function cek9(pilih) {
    kuis1_9 = pilih;
    document.getElementById("soal9").classList.add('text-white', 'btn-primary');
    document.getElementById("soal9").classList.remove('btn-light');
}
function cek10(pilih) {
    kuis1_10 = pilih;
    document.getElementById("soal10").classList.add('text-white', 'btn-primary');
    document.getElementById("soal10").classList.remove('btn-light');
}
function cek11(pilih) {
    kuis1_11 = pilih;
    document.getElementById("soal11").classList.add('text-white', 'btn-primary');
    document.getElementById("soal11").classList.remove('btn-light');
}
function cek12(pilih) {
    kuis1_12 = pilih;
    document.getElementById("soal12").classList.add('text-white', 'btn-primary');
    document.getElementById("soal12").classList.remove('btn-light');
}
function cek13(pilih) {
    kuis1_13 = pilih;
    document.getElementById("soal13").classList.add('text-white', 'btn-primary');
    document.getElementById("soal13").classList.remove('btn-light');
}
function cek14(pilih) {
    kuis1_14 = pilih;
    document.getElementById("soal14").classList.add('text-white', 'btn-primary');
    document.getElementById("soal14").classList.remove('btn-light');
}
function cek15(pilih) {
    kuis1_15 = pilih;
    document.getElementById("soal15").classList.add('text-white', 'btn-primary');
    document.getElementById("soal15").classList.remove('btn-light');
}


// $(function () {
    // setInterval(cek, 1000);
// });

let kuis1 = [];
function cek() {
    kuis1 = [kuis1_1, kuis1_2, kuis1_3, kuis1_4, kuis1_5, kuis1_6, kuis1_7, kuis1_8, kuis1_9, kuis1_10, kuis1_11, kuis1_12, kuis1_13, kuis1_14, kuis1_15];
}

function dialogsubmit() {
    $('#ModalSubmit1').modal('show');
}

function cekKuis1TO() {
    const soalkuis = document.getElementById('soalkuis');
    soalkuis.hidden = true;
    const hasilkuis = document.getElementById('hasilkuis');
    hasilkuis.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (kuis1[a] == jawabB[a]) {
            nilai = nilai + 15;
        }
    }

    localStorage.setItem("nkuis1", nilai);
    var namaS = localStorage.getItem('nama');
    var kelasS = localStorage.getItem('kelas');
    var sekolahS = localStorage.getItem('sekolah');

    alert(`Nilai Anda ${jawaban} / 15`);
}

function cekKuis1TO() {
    const soalkuis = document.getElementById('soalkuis');
    soalkuis.hidden = true;
    const hasilkuis = document.getElementById('hasilkuis');
    hasilkuis.hidden = false;
    for (let a = 0; a < jawabB.length; a++) {
        if (kuis1[a] == jawabB[a]) {
            nilai = nilai + 15;
        }
    }

    localStorage.setItem("nkuis1", nilai);
    var namaS = localStorage.getItem('nama');
    var kelasS = localStorage.getItem('kelas');
    var sekolahS = localStorage.getItem('sekolah');

    if (nilai < 70) {
        const namaHTL = document.getElementById('namaHTL');
        namaHTL.innerHTML = namaS;
        const kelasHTL = document.getElementById('kelasHTL');
        kelasHTL.innerHTML = kelasS;
        const sekolahHTL = document.getElementById('sekolahHTL');
        sekolahHTL.innerHTML = sekolahS;
        const nilaiHTL = document.getElementById('nilaiHTL');
        nilaiHTL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = false;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = true;
    } else {
        const namaHL = document.getElementById('namaHL');
        namaHL.innerHTML = namaS;
        const kelasHL = document.getElementById('kelasHL');
        kelasHL.innerHTML = kelasS;
        const sekolahHL = document.getElementById('sekolahHL');
        sekolahHL.innerHTML = sekolahS;
        const nilaiHL = document.getElementById('nilaiHL');
        nilaiHL.innerHTML = nilai;
        const hasilTL = document.getElementById('hasilTL');
        hasilTL.hidden = true;
        const hasilL = document.getElementById('hasilL');
        hasilL.hidden = false;
    }

    let harinya = hari();
    let waktunya = waktu();

    window.createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);

}



function cekKuis1() {
    if ((kuis1_1 == "") || (kuis1_2 == "") || (kuis1_3 == "") || (kuis1_4 == "") || (kuis1_5 == "") || (kuis1_6 == "") || (kuis1_7 == "") || (kuis1_8 == "") || (kuis1_9 == "") || (kuis1_10 == "") || (kuis1_11 == "") || (kuis1_12 == "") || (kuis1_13 == "") || (kuis1_14 == "") || (kuis1_15 == "")) {
        $('#ModalKuisKosong').modal('show')
        $('#ModalSubmit1').modal('hide')
    } else {
        $('#ModalSubmit1').modal('hide')
        for (let a = 0; a < jawabB.length; a++) {
            if (kuis1[a] == jawabB[a]) {
                const soalkuis = document.getElementById('soalkuis');
                soalkuis.hidden = true;
                const hasilkuis = document.getElementById('hasilkuis');
                hasilkuis.hidden = false;
                nilai = nilai + 15;
            }
        }

        localStorage.setItem("nkuis1", nilai);
        var namaS = sessionStorage.getItem('nama');
        var kelasS = sessionStorage.getItem('kelas');
        var sekolahS = sessionStorage.getItem('sekolah');


        if (nilai < 70) {
            const namaHTL = document.getElementById('namaHTL');
            namaHTL.innerHTML = namaS;

            const kelasHTL = document.getElementById('kelasHTL');
            kelasHTL.innerHTML = kelasS;
            
             const sekolahHTL = document.getElementById('sekolahHTL');
            sekolahHTL.innerHTML = sekolahS;
            const nilaiHTL = document.getElementById('nilaiHTL');
            nilaiHTL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = false;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = true;
        } else {
            const namaHL = document.getElementById('namaHL');
            namaHL.innerHTML = namaS;
            const kelasHL = document.getElementById('kelasHL');
            kelasHL.innerHTML = kelasS;
            const sekolahHL = document.getElementById('sekolahHL');
            sekolahHL.innerHTML = sekolahS;
            const nilaiHL = document.getElementById('nilaiHL');
            nilaiHL.innerHTML = nilai;
            const hasilTL = document.getElementById('hasilTL');
            hasilTL.hidden = true;
            const hasilL = document.getElementById('hasilL');
            hasilL.hidden = false;
        }



        function waktu() {
            var tanggal = new Date();
            setTimeout("waktu()", 1000);
            return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
        }
        
        // harinya
        function hari() {
            tanggallengkap = new String();
            namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
            namahari = namahari.split(" ");
            namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
            namabulan = namabulan.split(" ");
            tgl = new Date();
            hari = tgl.getDay();
            tanggal = tgl.getDate();
            bulan = tgl.getMonth();
            tahun = tgl.getFullYear();
            tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
            return (tanggallengkap);
        }
     
        

        let harinya = hari();
        console.log(harinya);
        let waktunya = waktu();
        console.log(waktunya);

        // Pastikan createTask dipanggil dari window
        window.createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
    }
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1() {
    indeks.innerHTML = 1;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soalPrev").hidden = true;
    document.getElementById("id1").hidden = false;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal2();");
}

function soal2() {
    indeks.innerHTML = 2;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = false;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal1();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal3();");
}

function soal3() {
    indeks.innerHTML = 3;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = false;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal2();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal4();");
}

function soal4() {
    indeks.innerHTML = 4;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = false;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal3();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal5();");
}

function soal5() {
    indeks.innerHTML = 5;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = false;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal4();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal6();");
}

function soal6() {
    indeks.innerHTML = 6;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = false;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal5();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal7();");
}

function soal7() {
    indeks.innerHTML = 7;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = false;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal6();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal8();");
}

function soal8() {
    indeks.innerHTML = 8;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = false;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal7();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal9();");
}

function soal9() {
    indeks.innerHTML = 9;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = false;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal8();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal10();");
}

function soal10() {
    indeks.innerHTML = 10;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = false;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal9();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal11();");
}

function soal11() {
    indeks.innerHTML = 11;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = false;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal10();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal12();");
}

function soal12() {
    indeks.innerHTML = 12;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = false;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal11();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal13();");
}

function soal13() {
    indeks.innerHTML = 13;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = false;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal12();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal14();");
}

function soal14() {
    indeks.innerHTML = 14;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = false;
    document.getElementById("id15").hidden = true;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal13();");
    document.getElementById("soalNext").setAttribute("onClick", "javascript: soal15();");
}

function soal15() {
    indeks.innerHTML = 15;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = true;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("id11").hidden = true;
    document.getElementById("id12").hidden = true;
    document.getElementById("id13").hidden = true;
    document.getElementById("id14").hidden = true;
    document.getElementById("id15").hidden = false;
    document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal14();");
}