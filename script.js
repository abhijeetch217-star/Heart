let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index){
pages.forEach(p=>p.classList.remove("active"));
pages[index].classList.add("active");
}

function nextPage(){
if(currentPage < pages.length-1){
currentPage++;
showPage(currentPage);
}
}

function prevPage(){
if(currentPage > 0){
currentPage--;
showPage(currentPage);
}
}

/* background hearts */
setInterval(()=>{
let h=document.createElement("div");
h.className="heart-bg";
h.innerHTML="💗";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),10000);
},1200);

/* final magic */
function startMagic(){

// hearts like balloon
setInterval(()=>{
let h=document.createElement("div");
h.className="heart";
h.innerHTML="💖";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
},200);

// sparkles
setInterval(()=>{
let s=document.createElement("div");
s.className="spark";
s.innerHTML="✨";
s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";
document.body.appendChild(s);
setTimeout(()=>s.remove(),2000);
},300);

// message popup
setTimeout(()=>{
alert("You deserve to smile Eva ✨💛");
},800);

// fireworks
startFireworks();

}

/* fireworks */
function startFireworks(){

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

function boom(){
let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height/2;

for(let i=0;i<30;i++){
particles.push({
x:x,
y:y,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:60
});
}
}

function animate(){
requestAnimationFrame(animate);
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,i)=>{
p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.fillStyle="white";
ctx.fillRect(p.x,p.y,3,3);

if(p.life<=0) particles.splice(i,1);
});
}

setInterval(boom,800);
animate();

  }
