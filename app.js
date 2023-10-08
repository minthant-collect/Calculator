let cal=localStorage.getItem('cal')||'';
function calUpdate(value) {
    cal+=value
    console.log(cal);
    displayCal();
}
function saveCal() { 
    localStorage.setItem('cal',cal)
}
function displayCal() { 
    document.querySelector('.show')
    .innerHTML=cal;
    
 }
