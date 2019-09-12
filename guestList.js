function people (name){
var guestList = ["Ate", "Vivi", "Dom", "David", "Ivan", "Odin"]
    if (guestList.includes(name)){
        alert("Welcome");;
    } else {
        alert("bye bye")
    }
}

people(prompt("Whats your Name?"));
