password="Vigneshwara!"
function validation(url){
    input=prompt("Please type your password:")
    if (input==password){
        window.location=url
    }
    else{
        alert("Incorrect Password. Please type the correct password:")
    }
}