
let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitSpeed = document.getElementById("bits");
let kbSpeed = document.getElementById("kbs");
let mbSpeed = document.getElementById("mbs");

let imageLink = "https://source.unsplash.com/random?topics=nature"; // Unsplash API

image.onload = async function () {
  endTime = new Date().getTime();

  await fetch(imageLink).then((response) => {
    imageSize = response.headers.get("content-length");
    calculateSpeed();
  });
};

function calculateSpeed() {
  let timeDuration = (endTime - startTime) / 1000;

  let loadedBits = imageSize * 8;
  let speedInBps = (loadedBits / timeDuration).toFixed(2);
  let speedInKbps = (speedInBps / 1024).toFixed(2);
  let speedInMbps = (speedInKbps / 1024).toFixed(2);

  bitSpeed.innerHTML += `${speedInBps} BPS` ;
  kbSpeed.innerHTML += `${speedInKbps} KBPS`;
  mbSpeed.innerHTML += `${speedInMbps} MBPS`;
}

const init = async () => {
  startTime = new Date().getTime();
  image.src = imageLink;
};

window.onload = () => init();