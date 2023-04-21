let adatLista = []
let pokemon = []
$(function () {
    console.log(adatLista);
    let file=" http://localhost:3000/lista"
    let pokemon="https://pokeapi.co/api/v2/pokemon/pikachu";
    adatBeolvas(pokemon,pokeonMegjelenit);
    $("#torol").on("click",function() {
        adatTorol(file,2)
    })

    $("#hozzaad").on("click",function() {
        
            const UJELEM={
                id:2,
                nev:"Patkány Channel",
                kor:"Pestis",
                darab:"200"
           };
            
        
       adatUj(file,UJELEM)
    });
    
});

function adatBeolvas(vegpont, callbackFv) {
    fetch(vegpont,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    })
        .then((respone) => respone.json())
        .then((data) => {
            callbackFv(data)
        })
        .catch((error)=>console.log(error));

}

function adatUj(vegpont, adat) {
    fetch(vegpont,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(adat)
    })
        .then((respone) => respone.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error)=>console.log(error));

}

function adatTorol(vegpont, id) {
    vegpont=vegpont+"/"+id
    fetch(vegpont,{
        method:"DELETE"
    })
        .then((respone) => respone.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error)=>console.log(error));

}
/*
function megjelenit(adataim){
 tomb=adataim.adatLista;
 console.log("megjelenit adataim",tomb)

}
*/
function pokeonMegjelenit(adataim){
    console.log(adatLista)

    console.log(adataim.sprites.front_default);
    let eleresUt=adataim.sprites.front_default;
    let pokemonNev= adataim.name;
    const POKEMONELEM = $("main");
    const TEXT = `<h2>${pokemonNev}</h2>
                <div class = "kep">
                    <img src= "${eleresUt}" alt ="${pokemonNev}">
                </div>
    `
    POKEMONELEM.html(TEXT);
}
