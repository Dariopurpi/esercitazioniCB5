//creiamo server (0)
const express = require("express");
const fs = require("fs");
const app = express();

//apriamo la cartella public
app.use(express.static("public"));
//includiamo urlencoded
//che ci serve per leggere i parametri da post
app.use(express.urlencoded({ extended: false }));

//server in ascolto
app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});
app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});
//a questo punto provare se il server va scrivendo sul terminale -> npm start

//prima chiamata per ottenere gli attori e dovrebbe tornare un json
app.get("/attori", function (req, res) {
  //leggere il file

  const attori_text = fs.readFileSync("./src/attori.json");
  const attori = JSON.parse(attori_text);
  //fare un map perchè vogliamo solo alcuni elementi
  const arr_attori = attori.map((att) => {
    const { id, nome, cognome, data_nascita } = att;
    return { id, nome, cognome, data_nascita };
  });
  res.json(arr_attori);
});
//andare a controllare su postman se funziona(1)

//stabilire lo stato per vedere se funziona e scrivere al singolare perchè si va ad incidere su un singolo elemento
app.post("/attore", function (req, res) {
  //console.log("Parametri: " + JSON.stringify(req.params, null, 4));
  //console.log("Body: " + JSON.stringify(req.body, null, 4));

  if (req.body.nome == undefined) {
    res.status(400).send("Attore not found");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Attore not found");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  //console.log("il mio parametro: " + req.body.id);

  const attori_text = fs.readFileSync("./src/attori.json", "utf-8");
  const attori = JSON.parse(attori_text);

  const index = Number(nuovo_attore.id) - 1;
  console.log("Nuovo Attore: " + index);
  attori[index] = nuovo_attore;

  //attori[Number(nuovo_attore.id) - 1] = nuovo_attore;
  console.log(attori);

  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));

  res.status(200).send("Attore creato");
});

//leggere informazioni per singolo attore
app.get("/attore", function (req, res) {
  // -------------lettura parametro ---------------------
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status(400).send("Parametro mancante!");
  }
  // console.log("ID attore: "+id_attore);
  // ---------------------------------------------

  // -------------lettura dati da file ---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  // ------------- filtro i dati -----------------------------
  const attr = attori.find((attore) => {
    return attore.id == id_attore;
  });
  // ---------------------------------------------
  // console.log("Attore: "+attr);
  if (typeof attr === "undefined") {
    console.log("Attore undefined ");
    res.status(200).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});
