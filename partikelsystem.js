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
      // Sparar startpositionen för partikeln
      this.x = x;
      this.y = y;
      
      // Storleken på partikeln (12 pixlar)
      this.size = 12;
      
      // Räknare för hur länge partikeln har levt (startar på 0)
      this.time = 0;
      
      // Slumpmässig maximal livstid mellan 60-120 frames
      this.maxTime = 60 + Math.random() * 60;
      
      // Slumpmässig riktning i radianer (0 till 2π = 0-360 grader)
      this.angle = Math.random() * Math.PI * 2;
      
      // Slumpmässig hastighet mellan 0 och 0.5 pixlar per frame
      this.speed = 0.5 * Math.random();
    }


  update () {
    // this.y = this.y + this.speed;
  // Flyttar partikeln i y-led baserat på vinkel och hastighet
  // cos(angle) ger vertikal rörelse
  this.y += Math.cos(this.angle) * this.speed;
  
  // Flyttar partikeln i x-led baserat på vinkel och hastighet
  // sin(angle) ger horisontell rörelse
  this.x += Math.sin(this.angle) * this.speed;
  
  // Saktar ner partikeln gradvis (behåller 99% av hastigheten varje frame)
  // Gör att partikeln till slut stannar
  this.speed *= 0.99;
  
  // Ökar tidräknaren med 1 varje frame
  this.time++;
}

draw() {
  // Sparar nuvarande ritstatus
  push();
  
  // Ingen kantlinje på ellipsen
  noStroke();
  
  // Röd färg med 100 i transparens (R, G, B, Alpha)
  fill(255, 0, 0, 100);
  
  // Flyttar koordinatsystemet till partikelns position
  translate(this.x, this.y);
  
  // Ritar en cirkel vid (0,0) med storleken this.size
  // (0,0 är nu partikelns position tack vare translate)
  ellipse(0, 0, this.size);
  
  // Återställer ritstatus till vad den var innan push()
  pop();
}

  isAlive() {
  // Returnerar true om partikeln fortfarande lever
  // (om tiden som gått är mindre än maximal livstid)
  return this.time < this.maxTime;
}
}

// Gamla testkommentarer (inte i bruk):
// let particle = []
// let particle = new Particle (width / 2, height / 2);

// Array som lagrar alla aktiva partiklar
let particles = [];

// Funktion som skapar många partiklar på samma position
function createParticles(x, y) {
  
  // Skapar 100 nya partiklar
  for (let i = 0; i < 100; i++) {
    // Lägger till en ny partikel på position (x, y) i arrayen
    particles.push(new Particle(x, y));
  }
}


// create

// Huvudloopen som körs varje frame (p5.js)
function draw() {
    // Svart bakgrund (raderar förra framen)
    background(0, 0, 0);
    
    // Gammal kod för en enda partikel (inte i bruk längre):
    // particle.update();
    // particle.draw();
 
    // Loopar igenom alla partiklar i arrayen
    for (let particle of particles) {
        // Uppdaterar partikelns position och hastighet
        particle.update();
        
        // Ritar partikeln på skärmen
        particle.draw();
        
        // Kollar om partikeln är "död" (har levt för länge)
        if (!particle.isAlive()) {
            // Hittar partikelns position i arrayen
            const index = particles.indexOf(particle);
            
            // Tar bort partikeln från arrayen (1 element från index)
            particles.splice(index, 1);
        }
    }
}

// Skriver ut hur många partiklar som finns just nu
console.log(particles.length);

// Gamla testkommentarer för trigonometri:
// console.log(Math.cos(Math.PI))
// console.log(Math.sin(Math.PI))

// Körs automatiskt när man klickar med musen (p5.js)
function mousePressed() {
    // Skapar 100 nya partiklar där muspekaren är
    createParticles(mouseX, mouseY);
}