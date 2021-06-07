// mengatur computer memilih jawaban secara random menggunakan math.random
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "batu";
  return "kertas";
}

// membuat peraturan permainan menang dan kalah dengan if
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "kertas") return comp == "batu" ? "MENANG!" : "KALAH!";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
  if (player == "kertas") return comp == "gunting" ? "KALAH!" : "MENANG!";
  if (player == "gunting") return comp == "batu" ? "KALAH" : "MENANG!";
}

// membuat animasi memutar gambar seolah komputer sedang loading atau berfikir
function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gunting", "batu", "kertas"];
  let i = 0;
  const waktu = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktu > 1000) {
      clearInterval;
      return;
    }

    imgComputer.setAttribute("src", "IMG-suitgame/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// menentukan hasil dari pertarungan suit
const chose = document.querySelectorAll("li img");
chose.forEach(function (i) {
  i.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = i.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "IMG-suitgame/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGunting.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp : " + pilihanComputer);
//   //   console.log("player : " + pilihanPlayer);
//   //   console.log("hasil : " + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "IMG-suitgame/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp : " + pilihanComputer);
//   //   console.log("player : " + pilihanPlayer);
//   //   console.log("hasil : " + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "IMG-suitgame/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pKertas.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   //   console.log("comp : " + pilihanComputer);
//   //   console.log("player : " + pilihanPlayer);
//   //   console.log("hasil : " + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "IMG-suitgame/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
