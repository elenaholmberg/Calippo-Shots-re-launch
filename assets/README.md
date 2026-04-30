[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/j3SJFt0N

## Länk till Figma: https://www.figma.com/design/8tzhvZMDsuYsAH05k0I9oI/Bleed---Trim?node-id=0-1&t=kDnZuHRMov2b9gtu-1

## 1) Uppgift
Koda en responsiv kampanjsida utifrån Figma-designen.  
Sidan ska se så lik designen ut som möjligt på mobil, tablet och desktop.

---

## 2) Viktigast att följa
1. **Layouten ska matcha Figma** (spacing, storlekar, textplacering).
2. **Headerbilden/hero-bilden ska fungera på alla devices** utan att viktig del av bilden försvinner.
3. **Produktkortens ramar ska markeras vid hover**.
4. Sidan ska vara semantiskt korrekt och ha `alt`-texter.
---

## 3) Struktur som ska kodas (uppifrån och ner)

### A. Header
- Vänster: GB-logga
- Mitten: menylänkar (`Produkter`, `Smaker`, `Om oss`)
- Höger: hamburger-ikon
  
**Krav:**
- Ligger högst upp
- Jämn vertikal centrering
- Tydlig kontrast mellan text och bakgrund
  
---

### B. Hero-sektion
- Stor headerbild/bakgrundsbild
- Rubrik: **“Årets stora nyheter”**
- Produktbild med Calippo-burkar
  
**Krav:**
- Hero-bilden måste vara responsiv
- Viktigt innehåll i bilden får inte kapas på mobil/tablet/desktop
- Rubriken ska vara läsbar ovanpå bilden
  
---

### C. Produktkort (3 st)
1. Cola & Lemon  
2. Lemon & Lime  
3. Orange
   
Varje kort ska innehålla:
- bild
- rubrik
- kort text
- CTA (t.ex. “Läs mer”)
  
**Krav:**
- Alla kort ska ha samma storlek och spacing
- Konsekvent typografi och padding
---

### D. Feature-sektion
- Produktbild till vänster
- Rubrik + text till höger

---

### E. Citat-sektion
- Bild till vänster
- Citatruta med orange bakgrund till höger
- Namn/ålder i citatet
---

### F. Footer
- Röd bakgrund
- GB Glace-logga
- Navigationslänkar
- Sociala ikoner
- Nyhetsbrevsfält + knapp
---

## 4) Interaktioner
- GB-loggan ska implementeras som SVG.
- Hover:  - ramen runt produktkort/bild markeras tydligt

## Cookie-banner – knappar
Knapparna i cookie-bannern (`Anpassa`, `Avvisa alla`, `Acceptera alla cookies`) ska vara fungerande klickbara knappar och ha tydliga hover-states.

### Krav
- Alla tre knappar ska kunna klickas.
- Hover ska ge visuell feedback (t.ex. färgändring, border eller skugga).
- Knapparna ska ha samma stil och storlek som i Figma.
- Fokusläge (focus state) ska vara synligt för tangentbordsnavigering.


---
## 5) Responsivitet
Sidan ska testas i tre lägen:
- Mobil
- Tablet
- Desktop

---

## 6) Klar-checklista
- [ ] Header matchar Figma
- [ ] Hero med responsiv headerbild fungerar på alla devices
- [ ] 3 produktkort är korrekt byggda
- [ ] GB-bilder som SVG
- [ ] Hover-ram fungerar på produktkort/bilder
- [ ] Feature-sektion är klar
- [ ] Citat-sektion är klar
- [ ] Footer är klar
- [ ] Alt-text finns på alla bilder
- [ ] Sidan matchar Figma visuellt i mobil, tablet, desktop


## Om vår design

Vi har tagit fram tre versioner av designen i Figma för att visa hur sidan anpassas till olika enheter:
- **Desktop:** Full version med bred layout och tydlig uppdelning av sektioner.
- **Tablet:** Mellanläge där innehållet skalas om och omstruktureras för bättre läsbarhet.
- **iPhone (mobil):** Mobilanpassad version med större fokus på scroll och tydlig touchvänlig navigation.
Syftet med dessa tre Figma-bilder är att säkerställa att kampanjsidan fungerar visuellt och användarmässigt på flera skärmstorlekar.


När vi gjorde designen ville vi att sidan skulle kännas som en kampanj för GB/Calippo: färgstark, sommrig och lätt att förstå.
I början diskuterade vi att bygga designen med en tydlig retrostil inspirerad av äldre GB-kampanjer. Efter att ha testat den riktningen valde vi istället en mer modern känsla, eftersom den gav bättre läsbarhet, tydligare struktur.
Vi behöll dock vissa delar av varumärkeskänslan, som färgerna och den lekfulla kampanjtonen, för att sidan fortfarande skulle kännas tydligt kopplad till GB/Calippo.
Därför valde vi en tydlig struktur med stora bilder och korta texter, så att man snabbt ser vad produkten är och vilka smaker som finns.
Vi använde rött som huvudfärg i header och footer eftersom det passar varumärket och skapar igenkänning.
För att skilja smakerna åt använde vi egna accentfärger i korten (röd, grön och orange). Det gör att användaren snabbt kan jämföra produkterna utan att behöva läsa mycket text.
Vi har försökt hålla designen enkel och tydlig. Först kommer hero-sektionen med “Årets stora nyheter”, sedan produktkorten, och efter det mer information och citat.
Tanken är att användaren ska kunna scrolla naturligt och förstå innehållet steg för steg utan att känna att sidan är rörig.
Typsnitt och storlekar är valda för att rubriker ska synas tydligt, samtidigt som brödtexten fortfarande är lättläst i mobil. 
Vi lade också in enkel interaktion i produktbilderna, där ramen markeras vid hover. 
Sammanfattningsvis har vi försökt skapa en design som känns modern, tydlig och nära varumärket, men samtidigt enkel för användaren att navigera och ta till sig snabbt.





