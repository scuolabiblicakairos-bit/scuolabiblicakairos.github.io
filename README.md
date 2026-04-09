# Scuola Biblica Kairos — Sito Statico

Blog di teologia biblica. A cura di Dr. Vincenzo Maggio.

## Struttura del progetto

```
scuolabiblicakairos/
├── index.html              # Homepage
├── articoli.html           # Elenco articoli
├── temi.html               # Temi teologici
├── libri.html              # Libri pubblicati
├── chi-siamo.html          # Presentazione
├── css/
│   └── style.css           # Stile unico per tutto il sito
├── js/
│   └── main.js             # Navigazione e animazioni
└── articoli/
    └── i-numeri-parlano.html   # Esempio articolo
    └── (altri articoli...)
```

## Come pubblicare su GitHub Pages

1. Crea un repository su GitHub (es. `scuolabiblicakairos`)
2. Carica tutti i file nella root del repository
3. Vai su **Settings → Pages**
4. Sorgente: **Deploy from a branch → main → / (root)**
5. Il sito sarà disponibile su `https://tuonome.github.io/scuolabiblicakairos/`

## Come collegare un dominio personalizzato (Filefly)

1. In GitHub Pages Settings, inserisci il tuo dominio nel campo **Custom domain**
2. Crea un file `CNAME` nella root con il tuo dominio:
   ```
   www.scuolabiblicakairos.it
   ```
3. Nel pannello DNS di Filefly, aggiungi:
   - Record **CNAME**: `www` → `tuonome.github.io`
   - Record **A** (per il dominio apex): puntare ai server GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## Come aggiungere un nuovo articolo

1. Crea un file in `articoli/nome-articolo.html`
2. Copia la struttura da `articoli/i-numeri-parlano.html`
3. Modifica titolo, contenuto, versetto di apertura
4. Aggiungi il link nella homepage (`index.html`) e in `articoli.html`

## Soli Deo Gloria
