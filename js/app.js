var document = window.document;
window.onload = function () {
};

function toContactMe(){
    window.scrollTo({
        left:0,
        top:1500,
        behavior:'smooth'
    })
    } 
function examin(){
    var Postcode;
    Postcode = document.getElementById("S_PostCode").value;
    var patt= /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var value = patt.test(Postcode);
    if(value === false){
        alert("invalid Postcode");
        return false;
    }
    return value;
}