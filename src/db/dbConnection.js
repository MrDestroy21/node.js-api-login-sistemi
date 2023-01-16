const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("veritabanına başarıyla baglandı");
    })
    .catch((err) => {
        console.log("veritabanına baglanırken hatta çıktı : ", err);
    })