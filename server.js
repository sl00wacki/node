const express = require('express');
const app = express();
const port = 2011;

// Ustawienie ścieżki do plików statycznych (w tym przypadku dla plików HTML)
app.use(express.static('public'));
    
// Definicja endpointu dla strony głównej
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
