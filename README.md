# Pokemon Battle Game

Als ouder heb je soms ff een moment voor jezelf om tijd te spenderen aan iets waar je geen hersenkracht voor nodig hebt. Daarom is deze applicatie ontwikkeld omdat ik als developer het belangrijk vind dat jij als gebruiker alle 152 Pokemons leert kennen. Aangezien het een deel uitmaakt van jou leuke jaren(of je neemt het moment nu om ooit geintroduceerd te worden aan Pokemons). Er is een kleine wikipedia om te zien wie de sterkere is, en het is ook fijn om te strestest welke Pokemon sterker is dan een andere door middel van "Best of six". Dit battle systeem is opgezet als card turn based game.

[De link naar de Github repository](https://github.com/mrwinter09/pokemon2023)

## Screenshot

![screenshot van de app](src/assets/screenshot.png)

## Benodigheden

Om gebruik te maken van de registratie systeem om in te loggen, moet je de volgende repository downloaden [De link naar de Github repository](https://github.com/hogeschoolnovi/frontend-fake-server)

### Beschrijving

Om gebruik te maken van authenticatie kun je deze server gebruiken. De server draait apart van deze Pokemon project, zodat we de "database" via een API kunnen benaderen

### Gebruik

Voor je de server kunt gebruiken zul je de de dependencies moeten installeren met het commando:

```bash
npm install
```

Er is een speciaal script aangemaakt om deze server te runnen. Het letterlijke script - mocht je nieuwsgierig zijn - kun je terugvinden in de `package.json`. Om de server te starten hoef je slechts het volgende commando in jouw terminal in te voeren:

```bash
npm run json:server
```

Deze server draait op [http://localhost:3000](http://localhost:3000), wanneer je dit in de browser opent zul je alle beschikbare endpoints zien verschijnen.

_Let op_: omdat deze server op `localhost:3000` draait is het belangrijk deze server te starten voor je een React-project start. React zal dan automatisch vragen om dat project op een andere port te draaien.

## NVM

Dit project maakt gebruik van een .nvmrc-bestand om de versie van Node.js te beheren. Het .nvmrc-bestand specificeert de aanbevolen Node.js-versie voor dit project. Dit zorgt ervoor dat alle samenwerkende projectleden dezelfde Node.js-versie gebruiken, wat compatibiliteitsproblemen kan voorkomen.

## Applicatie draaien

Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de `node_modules` door het volgende
commando in de terminal te runnen:

```bash
npm install
```

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

```bash
npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
