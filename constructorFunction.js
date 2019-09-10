function HouseKeeper (name, yearsOfExperience, likeToClean, workingPermit){
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.likeToClean = likeToClean;
  this.workingPermit = workingPermit;
  this.clean = function(){
    alert("Cleaning in progress...");
  }
}
var HouseKeeper1 = new HouseKeeper ("Trisha", 2, ["house", "bed", "kitchen"], true);
var HouseKeeper2 = new HouseKeeper ("Ara", 6, ["bed", "btah", "kitchen"], false);


document.addEventListener("keydown", function(event){
console.log(event);
});
