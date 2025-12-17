import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
        
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
const db = getDatabase(app);
const dbRef = ref(db);

onValue(ref(db, "datasiswa/" + sessionStorage.getItem("nisn") + "/kuis"), (snapshot) => {
  console.log(snapshot.val());
})

onValue(ref(db, "datasiswa/" + sessionStorage.getItem("nisn") + "/materi"), (snapshot) => {
  const materi = snapshot.val();
  console.log(materi);

  if (materi?.materi1) {
    const centang = document.createElement("i");
    centang?.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_1")?.appendChild(centang);
  }

  if (materi?.materi2) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_2")?.appendChild(centang);
  }

  if (materi?.materi3) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_3")?.appendChild(centang);
  }

  if (materi?.materi4) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_4")?.appendChild(centang);
  }

  if (materi?.materi5) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_5")?.appendChild(centang);
  }

  if (materi?.materi6) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_6")?.appendChild(centang);
  }

  if (materi?.materi7) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_7")?.appendChild(centang);
  }

  if (materi?.materi8) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_8")?.appendChild(centang);
  }

  if (materi?.materi9) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_9")?.appendChild(centang);
  }

  if (materi?.materi10) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_10")?.appendChild(centang);
  }

  if (materi?.materi11) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_11")?.appendChild(centang);
  }

  if (materi?.materi12) {
    const centang = document.createElement("i");
    centang.classList.add("fa-solid", "fa-circle-check", "text-success", "fs-5");
    document.getElementById("materi_12")?.appendChild(centang);
  }
});
