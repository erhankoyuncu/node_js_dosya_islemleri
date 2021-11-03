const fs = require('fs')

// Dosya Oluşturma 

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {

    if(err) console.log(err);
    console.log("JSON dosyası oluşturuldu ve veri eklendi ")

})

// Dosya Okuma 

fs.readFile('employees.json', 'utf8', (err, data) => {

    // Hata varsa yazdır 
    if(err) console.log(err);
    console.log(data) 

})

// Veri Güncelleme
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 2300}', 'utf8', (err) => {

    if(err) console.log(err);
    console.log("JSON dosyası Güncellendi ")

})

fs.readFile('employees.json', 'utf8', (err, data) => {

    // Hata varsa yazdır 
    if(err) console.log(err);
    console.log(data) 

})


fs.unlink('employees.json',   (err, data) => {

    // Hata varsa yazdır 
    if(err) console.log(err);
    console.log("Dosya Silindi") 

})