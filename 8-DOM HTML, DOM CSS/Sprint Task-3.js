function toSum() {
    if (sum.value!=null) {
        if (val.value=="t") {
            t.value='-';
            d.value=(sum.value/431).toFixed(2);
            e.value=(sum.value/509).toFixed(2);
        }
        if (val.value=="d") {
            t.value=(sum.value*429).toFixed(2);
            d.value='-';
            e.value=((sum.value*431)/509).toFixed(2);
        }
        if (val.value=="e") {
            t.value=(sum.value*507).toFixed(2);
            d.value=((sum.value*509)/431).toFixed(2);
            e.value='-';
        }
        
    }
}