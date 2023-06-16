const cnv = document.documentElement.querySelector("#galaxy");
const ctx = cnv.getContext("2d");

const cfg = {
  orbsCount: 400,
  minVelocity: 0.2,
  ringsCount: 10,
};

let mx = 0;
let my = 0;

window.addEventListener("mousemove", (e) => {
  mx = e.clientX - cnv.getBoundingClientRect().left;
  my = e.clientY - cnv.getBoundingClientRect().top;
});

let cw;
let ch;
let cx;
let cy;
let ph;
let pw;

const resizeCanvas = () => {
  cw = innerWidth;
  cnv.width = cw;
  ch = innerHeight;
  cnv.height = ch;
  cx = cw * 0.5;
  cy = ch * 0.5;
  ph = cy * 0.4;
  pw = cx * 0.4;
};

class Orb {
  constructor() {
    this.size = Math.random() * 5 + 2;
    this.angle = Math.random() * 360;
    this.radius = (((Math.random() * cfg.ringsCount) | 0) * ph) / cfg.ringsCount;
    this.impact = this.radius / ph;
    this.velocity = cfg.minVelocity + Math.random() * cfg.minVelocity + this.impact / 4;
  }

  refresh() {
    const radian = (this.angle * Math.PI) / 180;

    const cos = Math.cos(radian);
    const sin = Math.sin(radian);

    const offsetX = cos * pw * this.impact;
    const offsetY = sin * pw * this.impact;

    const paralaxX = (mx / cw) * 2 - 1;
    const paralaxY = my / ch;

    const x = cx + cos * (ph + this.radius) + offsetX;
    const y = cy + sin * (ph + this.radius) - offsetY * paralaxY - paralaxX * offsetX;

    const distToC = Math.hypot(x - cx, y - cy);
    const distToM = Math.hypot(x - mx, y - my);

    const optic = sin * this.size * this.impact * 0.7;
    const mEffect = distToM <= 50 ? (1 - distToM / 50) * 25 : 0;
    const size = this.size + optic + mEffect;

    const color = "#27AE60";

    if (distToC > ph - 1 || sin > 0) {
      ctx.strokeStyle = ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      distToM <= 50 ? ctx.stroke() : ctx.fill();
    }

    this.angle = (this.angle - this.velocity) % 360;
  }
}

let orbsList;

const createStardust = () => {
  orbsList = [];
  for (let i = 0; i < cfg.orbsCount; i++) {
    orbsList.push(new Orb());
  }
};

let bg2;

const createBackground = () => {
  bg2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, cx);
  bg2.addColorStop(1, "#212121");
};

const init = () => {
  resizeCanvas();
  createBackground();
  createStardust();
};

init();

window.addEventListener("resize", init);

const loop = () => {
  requestAnimationFrame(loop);
  ctx.globalCompositeOperation = "normal";
  ctx.fillStyle = bg2;
  ctx.fillRect(0, 0, cw, ch);

  ctx.globalCompositeOperation = "lighter";
  orbsList.map((e) => e.refresh());
};

loop();
