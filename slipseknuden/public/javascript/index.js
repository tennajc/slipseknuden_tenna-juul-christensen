(function() {
    const getUrlParameter = function (sParam) {
        const sPageURL = decodeURIComponent(window.location.search.substring(1));
        const sURLVariables = sPageURL.split('&');
        let sParameterName;
        for (let int = 0; int < sURLVariables.length; int = int + 1) {
            sParameterName = sURLVariables[int].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    const visEtProdukt = function(varenr) {
        fetch('./produkt.json')
        .then(function (result){
            return result.json();
        })
        .then(function (produkter) {
            produkter.forEach(function (produkt) {
               if (produkt.varenr == varenr) {
                const img = document.createElement('IMG');
                img.setAttribute('src', produkt.billede);
                   const h2 = document.createElement('H2');
                   const navn = document.createTextNode(produkt.navn);
                   h2.appendChild(navn);
                  
                   

                   const text = document.createElement('P');
                   const beskrivelse = document.createTextNode(`${produkt.beskrivelse}`);

                   text.appendChild(beskrivelse);
    
                   const para = document.createElement('P');
                   const pris = document.createTextNode(`kr. ${produkt.pris}`);
                   
                   para.appendChild(pris);
                   
    
                   const myDiv = document.querySelector('.indexProdukt');
                   myDiv.appendChild(img);
                   myDiv.appendChild(h2);
                   myDiv.appendChild(text);
                   myDiv.appendChild(para);
               }
            });
        }); 
    }; // Vis et produkt
    
    const visAlleProdukter = function() {
        fetch('./produkt.json')
            .then(function (result) {
                return result.json();
            })
            .then(function(produkter) {
                const placeholder = document.querySelector('.indexProdukter');
                produkter.forEach(function (produkt) {
                    const p = document.createElement('P');
                    const anchor = document.createElement('A');
                    anchor.setAttribute('href', '?produkt=' + produkt.varenr);
                    const tekst = document.createTextNode(produkt.beskrivelse);

                    const img = document.createElement('IMG');
                    img.setAttribute('src', produkt.billede);
                    p.appendChild(img);
                    anchor.appendChild(img);
                    anchor.appendChild(tekst);
                    p.appendChild(anchor);
                    
                    placeholder.appendChild(p);
                    
                    
                });
            })
    }; // Vis alle produkter

    document.addEventListener('DOMContentLoaded', function(){
       if (getUrlParameter('produkt')) {
           visEtProdukt(getUrlParameter('produkt'));
       }
       else {
           visAlleProdukter();
       }
});
})();