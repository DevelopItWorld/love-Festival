// Birthday wishes
const wishes = [
  "Happy Birthday my love ❤️ You are my favorite person forever!",
  "You are sweeter than all teddy bears 🧸",
  "My heart belongs to you 💕 Happy Birthday!",
  "You make my world beautiful 🌸",
  "Forever yours ❤️"
];

function showWish() {
    const box = document.getElementById("wishBox");
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    box.style.display = "block";
    box.innerHTML = randomWish;
}

// Blow candle function
function blowCandle(candle) {
    candle.innerHTML = "💨";
    candle.style.pointerEvents = "none";
}
// Floating hearts generator
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.getElementById("hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);

// Love Letter popup
function openLetter() {
    document.getElementById("loveLetter").style.display = "block";
}
function closeLetter() {
    document.getElementById("loveLetter").style.display = "none";
}

// WhatsApp Share link
const msg = encodeURIComponent("Happy Birthday My Love ❤️ You are my Teddy Forever 🧸");
document.getElementById("whatsappShare").href = 
"https://wa.me/?text=" + msg;

// Fireworks when all candles blown
function checkFireworks() {
    const candles = document.querySelectorAll(".candle");
    let allOut = true;
    candles.forEach(c => {
        if (c.innerHTML === "🔥") allOut = false;
    });
    if (allOut) {
        for (let i = 0; i < 10; i++) {
            const fw = document.createElement("div");
            fw.className = "firework";
            fw.innerHTML = "🎆";
            fw.style.left = Math.random() * 100 + "vw";
            fw.style.top = Math.random() * 100 + "vh";
            document.body.appendChild(fw);
            setTimeout(() => fw.remove(), 1000);
        }
    }
}

// Modify blowCandle function
function blowCandle(candle) {
    candle.innerHTML = "💨";
    candle.style.pointerEvents = "none";
    checkFireworks();
}


// Typing Love Message
const loveMsg = "I love you more than all teddy bears in the world ❤️";
let i = 0;
function typeLove() {
  if (i < loveMsg.length) {
    document.getElementById("typingText").innerHTML += loveMsg.charAt(i);
    i++;
    setTimeout(typeLove, 100);
  }
}
typeLove();

// Stars generator
setInterval(() => {
  const star = document.createElement("span");
  star.innerHTML = "⭐";
  star.style.left = Math.random() * 100 + "vw";
  document.getElementById("stars").appendChild(star);
  setTimeout(() => star.remove(), 10000);
}, 200);


// Microphone Blow Candle
function startMic() {
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const audioContext = new AudioContext();
    const mic = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    mic.connect(analyser);

    const data = new Uint8Array(analyser.frequencyBinCount);

    function detectBlow() {
      analyser.getByteFrequencyData(data);
      let volume = data.reduce((a, b) => a + b) / data.length;

      if (volume > 50) {
        document.querySelector(".candle3d").innerHTML = "💨";
        alert("🎉 Candle Blown! Happy Birthday!");
      }
      requestAnimationFrame(detectBlow);
    }
    detectBlow();
  });
}




// Teddy Game Score
let score = 0;
document.getElementById("teddy").onclick = () => {
  score++;
  document.getElementById("score").innerHTML = "Love Points: " + score;
};

// Proposal Popup
function openProposal() {
  document.getElementById("proposal").style.display = "block";
}
function yesProposal() {
  alert("💖 She/He said YES! Forever Love!");
}
function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

// Fireworks Canvas Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function firework() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let i=0;i<20;i++) {
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 3,0,2*Math.PI);
    ctx.fillStyle = "hsl(" + Math.random()*360 + ",100%,50%)";
    ctx.fill();
  }
}
setInterval(firework, 800);



async function startFace() {
  await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js/models');

  const video = document.getElementById("video");
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  const canvas = document.getElementById("faceCanvas");
  const displaySize = { width: 300, height: 200 };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
    const resized = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0,0,300,200);
    faceapi.draw.drawDetections(canvas, resized);
  }, 100);
}




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 300/300, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(300,300);
document.getElementById("cake3d").appendChild(renderer.domElement);

// Cake layers
const geometry = new THREE.CylinderGeometry(1,1,0.3,32);
const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
const cake = new THREE.Mesh(geometry, material);
scene.add(cake);

camera.position.z = 3;

function animateCake() {
  requestAnimationFrame(animateCake);
  cake.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animateCake();






function teddyChat() {
  const msg = document.getElementById("userMsg").value.toLowerCase();
  let reply = "I love you ❤️";

  if (msg.includes("love")) reply = "I love you more 🧸💕";
  if (msg.includes("birthday")) reply = "Happy Birthday my love 🎂";
  if (msg.includes("miss")) reply = "Teddy misses you too 🤗";

  document.getElementById("botReply").innerText = reply;
}





let roses = 0;
function giveRose() {
  roses++;
  document.getElementById("roseCount").innerText = "Roses: " + roses;
  
  const rose = document.createElement("span");
  rose.innerHTML = "🌹";
  rose.style.fontSize = "30px";
  document.getElementById("roseBox").appendChild(rose);
}



// 💌 Floating Hearts Generator
setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}, 300);

// ✨ Sparkle on click
document.getElementById("loveBtn").addEventListener("click", function(e){
  // Sound
  document.getElementById("loveSound").play();

  // Sparkles
  for(let i=0;i<10;i++){
    let s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = e.clientX + Math.random()*30 - 15 + "px";
    s.style.top = e.clientY + Math.random()*30 - 15 + "px";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),1000);
  }
});


window.onload = function(){

// TEXT
document.getElementById("title").innerText =
 localStorage.getItem("title") || "Special Moment 💖";

// THEME
let theme = localStorage.getItem("theme");
if(theme=="dark") document.body.style.background="#000";
if(theme=="light") document.body.style.background="#fff";
if(theme=="love") document.body.style.background="pink";

// EVENT MODE
let event = localStorage.getItem("eventMode");
if(event=="Birthday") document.title="Happy Birthday 🎂";
if(event=="Love Proposal") document.title="I Love You ❤️";

// PARTICLES
if(localStorage.getItem("particles")=="on"){
console.log("Particles Enabled");
}
}
// MUSIC
photoUpload.onchange = function(){
let files = this.files;
let arr = [];
for(let f of files){
arr.push(URL.createObjectURL(f));
}
localStorage.setItem("photos", JSON.stringify(arr));
}




























//////////////////////////////////////////////////////////code for future use/////////////////////////////////////////////////////////////





// // ================= Wishes =================
// const wishes = [
//  "Happy Birthday my love ❤️",
//  "You are sweeter than teddy bears 🧸",
//  "My heart belongs to you 💕",
//  "You make my world beautiful 🌸",
//  "Forever yours ❤️"
// ];

// function showWish(){
//  let box = document.getElementById("wishBox");
//  if(!box) return;
//  box.style.display="block";
//  box.innerHTML = wishes[Math.floor(Math.random()*wishes.length)];
// }

// // ================= Floating Hearts =================
// setInterval(()=>{
//  let h = document.createElement("span");
//  h.innerHTML="❤️";
//  h.style.left=Math.random()*100+"vw";
//  document.getElementById("hearts")?.appendChild(h);
//  setTimeout(()=>h.remove(),5000);
// },300);

// // ================= Love Letter =================
// function openLetter(){
//  document.getElementById("loveLetter")?.style.display="block";
// }
// function closeLetter(){
//  document.getElementById("loveLetter")?.style.display="none";
// }

// // ================= Candle =================
// function blowCandle(candle){
//  candle.innerHTML="💨";
//  candle.style.pointerEvents="none";
//  checkFireworks();
// }

// function checkFireworks(){
//  let candles=document.querySelectorAll(".candle");
//  if(candles.length==0) return;
//  let allOut=[...candles].every(c=>c.innerHTML!=="🔥");
//  if(allOut){
//   for(let i=0;i<10;i++){
//    let fw=document.createElement("div");
//    fw.className="firework";
//    fw.innerHTML="🎆";
//    fw.style.left=Math.random()*100+"vw";
//    fw.style.top=Math.random()*100+"vh";
//    document.body.appendChild(fw);
//    setTimeout(()=>fw.remove(),1000);
//   }
//  }
// }

// // ================= Typing Text =================
// const loveMsg="I love you more than all teddy bears ❤️";
// let i=0;
// function typeLove(){
//  let el=document.getElementById("typingText");
//  if(!el) return;
//  if(i<loveMsg.length){
//   el.innerHTML+=loveMsg.charAt(i++);
//   setTimeout(typeLove,100);
//  }
// }
// typeLove();

// // ================= Proposal Popup =================
// function openProposal(){
//  document.getElementById("proposal")?.style.display="block";
// }
// function moveNo(){
//  let btn=document.getElementById("noBtn");
//  if(!btn) return;
//  btn.style.position="absolute";
//  btn.style.left=Math.random()*80+"%";
//  btn.style.top=Math.random()*80+"%";
// }

// // ================= Fireworks Canvas =================
// let canvas=document.getElementById("fireworks");
// if(canvas){
//  let ctx=canvas.getContext("2d");
//  canvas.width=window.innerWidth;
//  canvas.height=window.innerHeight;

//  setInterval(()=>{
//   ctx.clearRect(0,0,canvas.width,canvas.height);
//   for(let i=0;i<20;i++){
//    ctx.beginPath();
//    ctx.arc(Math.random()*canvas.width,Math.random()*canvas.height,3,0,2*Math.PI);
//    ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
//    ctx.fill();
//   }
//  },800);
// }

// // ================= LocalStorage Admin Panel =================
// window.onload=function(){
//  let t=localStorage.getItem("title");
//  if(t) document.getElementById("title")?.innerText=t;

//  let theme=localStorage.getItem("theme");
//  if(theme=="dark") document.body.style.background="#000";
//  if(theme=="light") document.body.style.background="#fff";
//  if(theme=="love") document.body.style.background="pink";
// }

// // ================= Photo Upload =================
// let photoUpload=document.getElementById("photoUpload");
// if(photoUpload){
//  photoUpload.onchange=function(){
//   let arr=[...this.files].map(f=>URL.createObjectURL(f));
//   localStorage.setItem("photos",JSON.stringify(arr));
//  };
// }

