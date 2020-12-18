class Animal{
    constructor(name){
          this.name =name;
          
      }
    action(){
       
          document.getElementById(this.actionSoundName).play();
  
      }
  
    goImage(){
          let mainImage =document.querySelector('img');
          mainImage.src=this.showImage;
      }
    putInTheDocument(){
      var petsTable = document.getElementById("petsTable");
      var petTR = document.createElement("tr");
    
      var petNameTD = document.createElement("td");
      petNameTD.textContent = this.name;
      petTR.appendChild(petNameTD);
    
      var petLegsTD = document.createElement("td"); 
      petLegsTD.textContent = this.legs;
      petTR.appendChild(petLegsTD);
    
      var petActionTD = document.createElement("td");
      var petActionTDButton = document.createElement("button");
      petActionTDButton.textContent = this.actionText;
      petActionTD.appendChild(petActionTDButton);
      petTR.appendChild(petActionTD);
      
      petActionTDButton.onclick = this.action.bind(this);
      petsTable.querySelector("tbody").appendChild(petTR);
  
      petTR.addEventListener('click',this.goImage.bind(this));
  
  }
  }
  
  class Cat extends Animal{
      constructor(name,legs,actionText,showImage,actionSoundName){
          super(name);
          this.legs=4;
          this.actionSoundName='meow';
          this.actionText='Meoow';
          this.showImage='https://image.shutterstock.com/image-photo/18-july-2014-turkey-istanbul-260nw-526951102.jpg'
      }
  }
  
  
  
  class Monkey extends Animal{
      constructor(name,legs,actionText,showImage,actionSoundName){
          super(name);
          this.legs=2;
          this.actionSoundName='scream';
          this.actionText='Scream';
          this.showImage='https://media.istockphoto.com/photos/male-chimpanzee-in-business-clothes-picture-id143921954?k=6&m=143921954&s=612x612&w=0&h=4Ep24y6XhOI8z9chljpOwu6iErBAk1KUPSWQc1V2yHY='
      }
  }
  
  
  var Mila = new Cat('Mila');
  Mila.putInTheDocument();
  
  var Charlie = new Monkey('Charlie');
  Charlie.putInTheDocument();