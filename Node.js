const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Dosya yükleme ayarları
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/yukleme', upload.single('foto'), (req, res) => {
  const yorum = req.body.yorum;
  // Burada yorum ve fotoğraf bilgilerini veritabanına kaydedebilirsiniz.
  res.send('Fotoğraf ve yorum yüklendi!');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
