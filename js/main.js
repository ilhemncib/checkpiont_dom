
let likes = document.getElementsByClassName("like")
console.log(likes)
for (const like of likes) {
    like.addEventListener("click", function() {
//like.classList.toggle("active1")
console.log(parseInt(like.nextElementSibling.innerHTML)+1)
       if(like.style.color == "red"){
            like.style.color = "black";
            like.nextElementSibling.innerHTML = parseInt(like.nextElementSibling.innerHTML) -1 + " likes"
        }
        else{
        like.style.color = "red";
        like.nextElementSibling.innerHTML = parseInt(like.nextElementSibling.innerHTML) +1 + " likes"
    }
        
    })
  
}
//add quantity
let btnsplus = document.querySelectorAll(".plus")
for (const btnplus of btnsplus) {
    btnplus.addEventListener("click", function() {
        btnplus.nextElementSibling.innerHTML++
        totale()

    })
}
//remove quantity
let btnsmoins = document.querySelectorAll(".moins")
for (const btnmoins of btnsmoins) {
    btnmoins.addEventListener("click", function() {
        if(btnmoins.previousElementSibling.innerHTML>0){
        btnmoins.previousElementSibling.innerHTML--
    totale()
}

        else{
            alert("oops")
        }
    })
}
//delete item
let btnsremove = document.querySelectorAll(".close")
for (const btnremove of btnsremove) {
    btnremove.addEventListener("click", function() {
      console.log(btnremove.parentNode.parentNode.remove())
      totale()
    })
}
console.log(btnsremove)


/*
// ana lezem fi kol mara ncopie l5edma hedhy fel remove quantit w add quanti w delete donc nwali na3mel fonction w ba3ed namlelha appel 
qtes=document.querySelectorAll(".qte")
let prices=document.querySelectorAll(".price")
//console.log(prices[0].innerHTML) ; //hedhy bech traja3li 90dt(chaine de caractere) donc ba3ed nzidha paresint bech na7i dt w traja3heli numbr 
//console.log(qtes[0].innerHTML);
/*let somme=0 ;
// array ne5douh qtes ou prices c kif kif puisque 3endhom nafs longuer 
for(let i=0 ; i< qtes.length; i++) {
somme +=parseInt(prices[i].innerHTML)*qtes[i].innerHTML
} 
*/ 






// function 
function totale() {
    let qtes = document.querySelectorAll(".qte")
let prices = document.querySelectorAll(".Price")
let somme =0;
//console.log(parseInt(prices[0].innerHTML))
//console.log(qtes[0].innerHTML)
for (let i = 0; i < qtes.length; i++) {
    somme += parseInt(prices[i].innerHTML)*qtes[i].innerHTML;      
} 
document.getElementById("totale").innerText= "Somme Totale : " +somme+"dt" ;
console.log(somme);
}