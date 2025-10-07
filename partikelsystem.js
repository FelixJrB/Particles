/*
Vad ska jag göra
visa många partikar på skärmen
börja på position
röra sig i en slummässig riktning
bleknar bort eller försvinner efter en tid

systemet ska fortsätta utan att bli långsamma
*/
// steg för steg: 1. börja med en partikel, 2. gör många pariklar, 3. få dem att försvinna när de 'dör'
// 4. lägg till några visuella effekter(blekning, krympning, spår), lägg till interaktion

//let particle = []

//vad den skall innehålla
/* 
- x
- y
- side
- time
- maxtime
- angle
- speed
*/


//funktioner
/*
- update ()
- draw()
- isAlive()
*/
class Particle {
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.size = 12;
      this.time = 0;
      this.maxTime = 60 + Math.random() * 60;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = 0.5 * Math.random();
    }


  update () {
    // this.y = this.y + this.speed;
    this.y += Math.cos(this.angle) * this.speed;
    this.x += Math.sin(this.angle) * this.speed;
    this.speed *= 0.99;
    this.time++;
  }

  draw () {
    push();
    noStroke();
    fill(255, 0, 0, 100);
    translate(this.x, this.y);
    ellipse(0, 0, this.size );
    pop();
  }

  isAlive () {
   return this.time < this.maxTime;
  }
}
//     let particle = []

// let particle = new Particle (width / 2, height / 2);
let particles = [];

function createParticles (x, y) {
  
for (let i = 0; i < 100; i++) {
    particles.push(new Particle(x, y));
}
}


// create

function draw () {
    background (0, 0, 0);
  //   particle.update();
  //   particle.draw();
  
  for (let particle of particles){
    particle.update();
  particle.draw();

  if (!particle.isAlive()) {
    const index = particles.indexOf(particle);
    particles.splice(index, 1);
  }
}


}
console.log(particles.length);
// console.log(Math.cos(Math.PI))
// console.log(Math.sin(Math.PI))


function mousePressed () {
    createParticles(mouseX, mouseY);
}