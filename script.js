const prodotti = [
    {
        categoria: "Smartphone",
        modello: "Xiaomi Note 11S",
        taglia: ["64GB", "128GB"],
        prezzo: 148,
        url: "https://m.media-amazon.com/images/I/512A4pEqXaL._AC_UL640_QL65_.jpg"
    },
    {
        categoria: "Smartphone",
        modello: "Samsung Galaxy A14",
        taglia: ["64GB", "128GB"],
        prezzo: 129.90,
        url: "https://m.media-amazon.com/images/I/81aqEBIKEnL._AC_UL640_QL65_.jpg"
    },
    {
        categoria: "Tablet",
        modello: "Lenovo Tab M10 Plus",
        taglia: ["32GB", "64GB"],
        prezzo: 199,
        url: "https://m.media-amazon.com/images/I/61O-VuVpywL._AC_UL640_QL65_.jpg"
    },
    {
        categoria: "Mouse",
        modello: "Logitech M90",
        taglia: [],
        prezzo: 6.49,
        url: "https://m.media-amazon.com/images/I/81+Rjb6LJ2L._AC_UL640_QL65_.jpg"
    },
    {
        categoria: "Tastiera",
        modello: "Logitech K120",
        taglia: [],
        prezzo: 12.99,
        url: "https://m.media-amazon.com/images/I/61xFRHrfVJL._AC_UL640_QL65_.jpg"
    },
    {
        categoria: "Notebook",
        modello: "HP 250 G9",
        taglia: ["128GB", "256GB"],
        prezzo: 148,
        url: "https://m.media-amazon.com/images/I/81nkSdV+0wL._AC_UL640_QL65_.jpg"
    }
]
let container = document.getElementById("container");
function showCards(){

    prodotti.forEach(prodotto => {
        let modello =prodotto.modello;
        let taglia =prodotto.taglia;
        let prezzo =prodotto.prezzo;
        let url =prodotto.url;

    let card = `
    <div class="card" style="width: 18rem;">
    <img src="${url}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${modello}</h5>
    <p class="card-text">${taglia}</p>
    <p class="card-text">${prezzo}</p>
    </div>
    </div>
        `  
    container.innerHTML += card 
    });
}

showCards();