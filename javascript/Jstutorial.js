 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        import { getDatabase, ref, set, push, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
        
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyDUbkzRquQl23eOEYvaNb_rThj3nlAVAx4",
          authDomain: "bangun-ruang-67fb3.firebaseapp.com",
          databaseURL: "https://bangun-ruang-67fb3-default-rtdb.firebaseio.com",
          projectId: "bangun-ruang-67fb3",
          storageBucket: "bangun-ruang-67fb3.appspot.com",
          messagingSenderId: "360433130501",
          appId: "1:360433130501:web:a5aa3a1e6bb1b2e7e8906c"
        };

        // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

const dbkkm = ref(db, "kkm/");
onValue(dbkkm, kkmSuccess, handleError, (snapshot) => {
  console.log("kkm", snapshot.val());
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

let kkm1;
let kkm2;
let kkm3;
let kkm4;

let getKKM;
function kkmSuccess(items1) {
  getKKM = items1.val();

  kkm1 = items1.val()[0]["kkm"];
  kkm2 = items1.val()[1]["kkm"];
  kkm3 = items1.val()[2]["kkm"];
  kkm4 = items1.val()[3]["kkm"];
}
function handleError(error) {
  console.log(error);
}
console.log(localStorage);

const btn = document.querySelectorAll(".nav-link");

btn[6].addEventListener("click", function () {
  tidakBisa("kuis1", "materi2.html");
});
btn[7].addEventListener("click", function () {
  tidakBisa("kuis1", "m2-1.html");
  materi3();
});
btn[8].addEventListener("click", function () {
  tidakBisa("kuis1", "m2-2.html");
});
btn[9].addEventListener("click", function () {
  tidakBisa("kuis1", "../kuis/kuis2.html");
});
btn[11].addEventListener("click", function () {
  tidakBisa("kuis2", "materi3.html");
});
btn[12].addEventListener("click", function () {
  tidakBisa("kuis2", "m3-1.html");
});
btn[13].addEventListener("click", function () {
  tidakBisa("kuis2", "../kuis/kuis3.html");
});
btn[14].addEventListener("click", function () {
  tidakBisa("kuis3", "../kuis/Evaluasi.html");
});

function tidakBisa(kuisKe, location) {
  onValue(ref(db, "datasiswa/" + sessionStorage.getItem("nisn") + "/kuis"), (snapshot) => {
    const kuis = snapshot.val();
    let kkm;
    if (kuisKe === "kuis1") {
      kkm = kkm1;
    } else if (kuisKe === "kuis2") {
      kkm = kkm2;
    } else if (kuisKe === "kuis3") {
      kkm = kkm3;
    } else if (kuisKe === "evaluasi") {
      kkm = kkm4;
    }
    if (parseInt[kuisKe] >= parseInt(kkm)) {
      window.location.href = location;
    } else {
      $("#exampleModal").modal("show");
    }
  });
}

// function materi2() {
//   var hasilakhir = localStorage.getItem("skkuis1");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm1));
//   if (parseInt(hasilakhir) >= parseInt(kkm1)) {
//     window.location.href = "materi2.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

// function materi3() {
//   var hasilakhir = localStorage.getItem("skkuis1");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm1));
//   if (parseInt(hasilakhir) >= parseInt(kkm1)) {
//     window.location.href = "m2-1.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

// function materi4() {
//   var hasilakhir = localStorage.getItem("skkuis1");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm1));
//   if (parseInt(hasilakhir) >= parseInt(kkm1)) {
//     window.location.href = "m2-2.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

// function kuis2() {
//   var hasilakhir = localStorage.getItem("skkuis1");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm1));
//   if (parseInt(hasilakhir) >= parseInt(kkm1)) {
//     window.location.href = "../kuis/kuis2.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

// function materi5() {
//   var hasilakhir = localStorage.getItem("skkuis2");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm2));
//   if (parseInt(hasilakhir) >= parseInt(kkm2)) {
//     window.location.href = "materi3.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

// function materi6() {
//   var hasilakhir = localStorage.getItem("skkuis2");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm2));
//   if (parseInt(hasilakhir) >= parseInt(kkm2)) {
//     window.location.href = "m3-1.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

// function kuis3() {
//   var hasilakhir = localStorage.getItem("skkuis2");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm2));
//   if (parseInt(hasilakhir) >= parseInt(kkm2)) {
//     window.location.href = "../kuis/kuis3.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

// function evaluasi() {
//   var hasilakhir = localStorage.getItem("skkuis3");
//   console.log(parseInt(hasilakhir));
//   console.log(parseInt(kkm3));
//   if (parseInt(hasilakhir) >= parseInt(kkm3)) {
//     window.location.href = "../kuis/Evaluasi.html";
//   } else {
//     $("#exampleModal").modal("show");
//   }
// }

