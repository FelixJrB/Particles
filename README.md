# PARTICLES

Ett interaktivt partikelsystem skapat med p5.js där användaren kan generera partikelexplosioner med musklick.

## 📋 Innehållsförteckning

- [Översikt](#översikt)
- [Funktioner](#funktioner)
- [Komma igång](#komma-igång)
- [Användning](#användning)
- [Hur det fungerar](#hur-det-fungerar)
- [Anpassning](#anpassning)
- [Teknisk information](#teknisk-information)
- [Upphovsman](#upphovsman)
- [Licens](#licens)

## Översikt

Detta projekt visar hur man skapar ett dynamiskt partikelsystem med hjälp av p5.js. Partiklar skapas vid musklick och rör sig i slumpmässiga riktningar innan de försvinner. Perfekt för att förstå:

- Objektorienterad programmering med JavaScript
- Trigonometri för rörelse (sin/cos)
- Array-hantering och objektlivscykler
- p5.js canvas-rendering

### Projektets funktioner:

- 🎆 **Partikelgenerering**: Skapa 100 partiklar per musklick
- 🎯 **Slumpmässig rörelse**: Varje partikel rör sig i en unik riktning
- ⏱️ **Livscykel-hantering**: Partiklar försvinner automatiskt efter 60-120 frames
- 🎨 **Visuella effekter**: Halvtransparenta röda partiklar som saktar ner över tid

## Funktioner

Detta projekt inkluderar:

✅ **Particle-klass**: Hanterar individuella partiklar med position, hastighet och livstid  
✅ **Dynamisk spawning**: Generera partiklar var som helst på canvasen  
✅ **Automatisk cleanup**: Tar bort "döda" partiklar för att optimera prestanda  
✅ **Smooth animation**: Partiklar saktar gradvis ner (99% hastighet per frame)  
✅ **Interaktiv input**: Klicka för att skapa partikelexplosioner

## Komma igång

### Förutsättningar

Detta projekt kräver:

- **p5.js library**: Använder p5canvas extension från VS Code
- **Live Server**: För att köra projektet lokalt

### Installation

1. **Klona repository**
   ```bash
   git clone https://github.com/dittanvändarnamn/particles.git
   cd particles
   ```

2. **Installera p5canvas extension**
   - Öppna VS Code
   - Gå till Extensions
   - Sök efter "p5canvas" av Garrit Schaap
   - Installera extensionen

3. **Kör projektet**
   - Öppna projektet i VS Code
   - Högerklicka på Javascript-filen
   - Välj p5canvas preview 

## Användning

### Grundläggande användning

Klicka var som helst på canvas för att skapa en explosion av 100 partiklar:

```javascript
// Skapa partiklar vid musklick
function mousePressed() {
    createParticles(mouseX, mouseY);
}
```

### Anpassa antal partiklar

```javascript
function createParticles(x, y) {
    // Ändra 100 till önskat antal
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(x, y));
    }
}
```

### Ändra partikelstorlek och färg

```javascript
// I Particle-konstruktorn
this.size = 12; // Ändra storlek

// I draw-metoden
fill(255, 0, 0, 100); // Ändra färg (R, G, B, Alpha)
```

## Hur det fungerar

### Particle-klassen

```javascript
class Particle {
    constructor(x, y) {
        this.x = x;              // Position X
        this.y = y;              // Position Y
        this.size = 12;          // Storlek
        this.time = 0;           // Livstidsräknare
        this.maxTime = 60 + Math.random() * 60; // 60-120 frames
        this.angle = Math.random() * Math.PI * 2; // 0-360°
        this.speed = 0.5 * Math.random(); // 0-0.5 pixlar/frame
    }
}
```

### Uppdateringscykel

1. **Update**: Flyttar partikeln baserat på vinkel och hastighet
2. **Draw**: Renderar partikeln på skärmen
3. **Check**: Kontrollerar om partikeln fortfarande lever
4. **Remove**: Tar bort döda partiklar från arrayen

### Matematiken bakom rörelsen

```javascript
// Trigonometri för 2D-rörelse
this.y += Math.cos(this.angle) * this.speed; // Vertikal
this.x += Math.sin(this.angle) * this.speed; // Horisontell
this.speed *= 0.99; // Friktion (saktar ner)
```

## Anpassning

### Ändra partikellivslängd

```javascript
// Kortare livstid (30-60 frames)
this.maxTime = 30 + Math.random() * 30;

// Längre livstid (120-240 frames)
this.maxTime = 120 + Math.random() * 120;
```

### Ändra hastighet och spridning

```javascript
// Snabbare partiklar
this.speed = 2 * Math.random();

// Långsammare partiklar
this.speed = 0.2 * Math.random();

// Mindre friktion (håller hastigheten längre)
this.speed *= 0.995;
```

### Olika färger per partikel

```javascript
constructor(x, y) {
    // ... befintlig kod ...
    this.color = color(random(255), random(255), random(255));
}

draw() {
    fill(this.color);
    // ... resten av koden ...
}
```

## Teknisk information

- **Språk**: JavaScript
- **Framework**: p5.js
- **IDE**: VS Code med p5canvas extension
- **Rendering**: HTML5 Canvas

## Upphovsman

**Felix Berglund**  
Skapad som del av programmeringskursen

## Licens

Detta projekt är öppen källkod och fritt att använda för utbildningsändamål.

---

💡 **Tips**: Prova att kombinera med andra p5.js-funktioner som `keyPressed()` för att skapa olika partikeleffekter!
