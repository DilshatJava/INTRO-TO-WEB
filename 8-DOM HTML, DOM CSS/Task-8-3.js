bankAccunts = [
    {"cc1":"1111", "c2":"1111", "c3":"1111", "c4":"1111", "nameSur":"A A", "CVV":"123"},
    {"cc1":"1112", "c2":"1111", "c3":"1111", "c4":"1111", "nameSur":"B A", "CVV":"123"},
    {"cc1":"1113", "c2":"1111", "c3":"1111", "c4":"1111", "nameSur":"C A", "CVV":"123"},
    {cc1:"1114", "c2":"1111", "c3":"1111", "c4":"1111", "nameSur":"D A", "CVV":"123"}
]

function toCard() {
    let n = 0
    for(let accaunt of bankAccunts){
        if(accaunt.cc1 == c1.value && accaunt.c2 == c2.value &&
            accaunt.cc1 == c1.value && accaunt.c2 == c2.value &&
            accaunt.nameSur == NS.value && accaunt.CVV == key.value){
            alert("Transaction completed")
            n++
            break
        }
    }
    if(n==0){
        alert("Invalid Data")
    }
}