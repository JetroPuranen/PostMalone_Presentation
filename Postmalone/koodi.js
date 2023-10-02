

function laheta(){
    let nimi = document.getElementById("nimi");
    let sposti = document.getElementById("sahkoposti");
    let teksti = document.getElementById("teksti");

    let npituus = nimi.value.length;
    let spituus = sposti.value.length;
    let tpituus = teksti.value.length;
    

    if(npituus <= 1){
        document.getElementById("palaute").innerHTML = "Lomakkeesta puuttuu nimi, Lisää nimi.";
      
    }
    else if(spituus <= 7){
        document.getElementById("palaute").innerHTML = "Vääränlainen sähköposti, Korjaa sähköposti";
    }

    else if(tpituus <= 15){
        document.getElementById("palaute").innerHTML = "Tekstiosion sisältö on liian pieni."
    }
    else{
        alert("Lomakkeen tiedot on lähetetty onnistuneesti. Kiitos palautteesta!")
    }

}


    const haeFakta = () => 
{
    fetch(`http://numbersapi.com/random/date`).then((response) => 
    response.text()).then((Fakta) => { 
    console.log(Fakta);
    document.getElementById("tulostaFakta").innerHTML = Fakta;
    
})
}
