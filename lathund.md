# 📘 Lathund för grupparbete

En snabb guide för hur vi jobbar tillsammans i projektet

## Installationer
- Använd normalize.css för att få sidorna att se enhetliga ut i samtliga webbläsare: https://necolas.github.io/normalize.css/

---

## Gitignore
- Lägg till .DS_STORE (och andra systemfiler) i .gitignore, de behövs inte i repot. Det gäller också t.ex. .map-filer som genereras för CSS.

---

## Övrigt
- Width och height på alla bilder
- Använd rem för fontsize

---

## 🗣️ Språk
- Case: `kebab-case`  
- Språk: Engelska  

---

## 🎨 Prettier-inställningar
```json
{ "tabWidth": 2, "singleQuote": true }
```

---

## 💾 Hur vi commitar

Vi använder:
- gitmoji: https://gitmoji.dev/
- conventional commits  

### Exempel

🐛 bug(createHTML.ts): correct the placement for images  


### 🧾 Conventional commits

Tänk:

> If applied, this commit will…

### 🔤 Commit-typer

- fix: Buggfixar  
- feat: Ny feature  
- feat!: Breaking change  
- build / chore: Byggsystem (Vite, npm)  
- ci: Continuous integration  
- docs: Dokumentation  
- style: Kodstil (ej CSS)  
- refactor: Omskrivning av kod  
- perf: Prestandaförbättringar  
- test: Tester  
- revert: Ångra commit  

---

### Pull-requests

Döp förgreningarna till den feature ni jobbar med. T.ex. (och gärna med webbvänlig namngivning):

- header-navigation
- header-hamburger-clickability
- front-page-hero-image
- product-carousel
osv.

Om du vill att någon ska kolla på din PR, sätt personen som en “reviewer”.

Assignee skapar t.ex. onödiga notiser & taggningar, om ni inte kommit överens om att varje person i gruppen ska granska varje PR.

Ta en skärmdump på förändringen om den är visuell och klistra in i beskrivningen för PR:en. På GitHub kan du smidigt klistra in bilden direkt ur datorns minne; du behöver inte gå via ett bildbehandlingsprogram utan det räcker med Ctrl/Cmd + V för att klistra in bilden.

Ta en skärmdump på Mac: Cmd + Ctrl + Shift + 4 (då kan du dra ut en ruta på skärmen, och den sparas i minnet - klistra sedan in med Cmd + V)
Ta en skärmdump på Windows: Använd t.ex. "Print Screen"-knappen på tangentbordet, eller "Snipping Tool"-programmet.
Behöver du visa hur något fungerar med interaktion, kan du göra en smidig inspelning via gifcap.dev.


## 🗓️ Daily standup

- Tid: 09:00 varje dag  
- Vad gjorde jag igår?  
- Vad ska jag göra idag?  
- Har jag några hinder?  

---

## 📅 Sprint planning

- Tid: Måndag efter standup  
- Uppgift: Räkna ut teamets story point-kapacitet  


### 📊 Story points

| SP  | Beskrivning            | Tidsåtgång              |
|-----|------------------------|--------------------------|
| 1   | En "no-brainer"        | Ett par timmar – halv dag |
| 3   | Kräver fokus           | ~1 dag                   |
| 5   | Mer komplex            | 2–3 dagar                |
| 8   | Bör brytas ner         | ~1 vecka                 |
| 15  | För stor               | > 1 vecka                |

---

## 🔁 Retrospektiv

- Tid: Fredag efter standup  
- Vad fungerade bra?  
- Vad kan förbättras?  

📌 Miro:  
https://miro.com/welcomeonboard/dFRrUGdrSDlMamVmY1VXczR6UHZVUjZFVW5WR0ZWTDN6cUl2Y2NYZDhnM3hzQUtZSXhuNEFmS0tSMzEvUGFjcDZsb05maWtHVU9OMFBOTUxCOERPdzRnZTI4STVKZXB2VWpHYml1NHZSOWNWTWRqYkgrN1p0WGtKWXdESWRzT0N0R2lncW1vRmFBVnlLcVJzTmdFdlNRPT0hdjE=?share_link_id=650695894842
