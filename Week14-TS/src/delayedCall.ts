function delayedCall(Anfunction : () => void) {
    setTimeout(Anfunction , 1000)
}
function Log(){
    console.log("Hi There Sharma ")
}
delayedCall(Log)