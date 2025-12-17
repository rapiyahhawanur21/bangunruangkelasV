let userlink = document.getElementById("userlink");
let nama = sessionStorage.getItem("nama");

function getNama() {
  if (nama == null) {
    alert("Maaf, kamu harus login terlebih dahulu");

    window.location = "index.html";
  } else {
    userlink.innerText = nama;
  }
}
getNama();

let username = document.getElementById("nisn");
let logout = document.getElementById("logout");

function btnLogout() {
  sessionStorage.removeItem("nisn");
  sessionStorage.removeItem("pw");
  window.location = "index.html";
}

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    });
  }
});

if (document.getElementById("satu")) {
  document.getElementById("satu").hidden = false;
}
if (document.getElementById("dua")) {
  document.getElementById("dua").hidden = true;
}
if (document.getElementById("tiga")) {
  document.getElementById("tiga").hidden = true;
}
if (document.getElementById("empat")) {
  document.getElementById("empat").hidden = true;
}
if (document.getElementById("lima")) {
  document.getElementById("lima").hidden = true;
}

function satu() {
  document.getElementById("btnprev").classList.add("disabled");
  document.getElementById("btnnext").classList.remove("disabled");
  document.getElementById("satu").hidden = false;
  document.getElementById("btnsatu").classList.add("active");
  document.getElementById("dua").hidden = true;
  document.getElementById("btndua").classList.remove("active");
  document.getElementById("tiga").hidden = true;
  document.getElementById("btntiga").classList.remove("active");
  document.getElementById("empat").hidden = true;
  document.getElementById("btnempat").classList.remove("active");
  document.getElementById("lima").hidden = true;
  document.getElementById("btnlima").classList.remove("active");
  document.getElementById("next").setAttribute("onClick", "javascript: dua();");
}

function dua() {
  document.getElementById("btnprev").classList.remove("disabled");
  document.getElementById("btnnext").classList.remove("disabled");
  document.getElementById("satu").hidden = true;
  document.getElementById("btnsatu").classList.remove("active");
  document.getElementById("dua").hidden = false;
  document.getElementById("btndua").classList.add("active");
  document.getElementById("tiga").hidden = true;
  document.getElementById("btntiga").classList.remove("active");
  document.getElementById("empat").hidden = true;
  document.getElementById("btnempat").classList.remove("active");
  document.getElementById("lima").hidden = true;
  document.getElementById("btnlima").classList.remove("active");
  document.getElementById("next").setAttribute("onClick", "javascript: tiga();");
  document.getElementById("prev").setAttribute("onClick", "javascript: dua();");
}

function duaaa() {
  document.getElementById("btnprev").classList.remove("disabled");
  document.getElementById("btnnext").classList.remove("disabled");
  document.getElementById("satu").hidden = true;
  document.getElementById("btnsatu").classList.remove("active");
  document.getElementById("dua").hidden = false;
  document.getElementById("btndua").classList.add("active");
  document.getElementById("tiga").hidden = true;
  document.getElementById("btntiga").classList.remove("active");
  // document.getElementById("empat").hidden = true;
  // document.getElementById("btnempat").classList.remove("active");
  // document.getElementById("lima").hidden = true;
  // document.getElementById("btnlima").classList.remove("active");
  document.getElementById("next").setAttribute("onClick", "javascript: tigaa();");
  document.getElementById("prev").setAttribute("onClick", "javascript: duaaa();");
}

function tiga() {
  document.getElementById("btnprev").classList.remove("disabled");
  document.getElementById("btnnext").classList.remove("disabled");
  document.getElementById("satu").hidden = true;
  document.getElementById("btnsatu").classList.remove("active");
  document.getElementById("dua").hidden = true;
  document.getElementById("btndua").classList.remove("active");
  document.getElementById("tiga").hidden = false;
  document.getElementById("btntiga").classList.add("active");
  document.getElementById("empat").hidden = true;
  document.getElementById("btnempat").classList.remove("active");
  document.getElementById("lima").hidden = true;
  document.getElementById("btnlima").classList.remove("active");
  document.getElementById("next").setAttribute("onClick", "javascript: empat();");
  document.getElementById("prev").setAttribute("onClick", "javascript: tiga();");
}

function empat() {
  document.getElementById("btnprev").classList.remove("disabled");
  document.getElementById("btnnext").classList.remove("disabled");
  document.getElementById("satu").hidden = true;
  document.getElementById("btnsatu").classList.remove("active");
  document.getElementById("dua").hidden = true;
  document.getElementById("btndua").classList.remove("active");
  document.getElementById("tiga").hidden = true;
  document.getElementById("btntiga").classList.remove("active");
  document.getElementById("empat").hidden = false;
  document.getElementById("btnempat").classList.add("active");
  document.getElementById("lima").hidden = true;
  document.getElementById("btnlima").classList.remove("active");
  document.getElementById("next").setAttribute("onClick", "javascript: lima();");
  document.getElementById("prev").setAttribute("onClick", "javascript: empat();");
}

function lima() {
  document.getElementById("btnprev").classList.remove("disabled");
  document.getElementById("satu").hidden = true;
  document.getElementById("btnsatu").classList.remove("active");
  document.getElementById("dua").hidden = true;
  document.getElementById("btndua").classList.remove("active");
  document.getElementById("tiga").hidden = true;
  document.getElementById("btntiga").classList.remove("active");
  document.getElementById("empat").hidden = true;
  document.getElementById("btnempat").classList.remove("active");
  document.getElementById("lima").hidden = false;
  document.getElementById("btnlima").classList.add("active");
  document.getElementById("btnnext").classList.add("disabled");
  document.getElementById("prev").setAttribute("onClick", "javascript: empat();");
  document.getElementById("mnext").hidden = false;
}

function duaa() {
  document.getElementById("btnprev").classList.remove("disabled");
  document.getElementById("satu").hidden = true;
  document.getElementById("btnsatu").classList.remove("active");
  document.getElementById("dua").hidden = false;
  document.getElementById("btndua").classList.add("active");
  document.getElementById("btnnext").classList.add("disabled");
  document.getElementById("prev").setAttribute("onClick", "javascript: satu();");
  document.getElementById("mnext").hidden = false;
}

function tigaa() {
  document.getElementById("btnprev").classList.remove("disabled");
  document.getElementById("satu").hidden = true;
  document.getElementById("btnsatu").classList.remove("active");
  document.getElementById("dua").hidden = true;
  document.getElementById("btndua").classList.remove("active");
  document.getElementById("tiga").hidden = false;
  document.getElementById("btntiga").classList.add("active");
  document.getElementById("btnnext").classList.add("disabled");
  document.getElementById("prev").setAttribute("onClick", "javascript: dua();");
  document.getElementById("mnext").hidden = false;
}
