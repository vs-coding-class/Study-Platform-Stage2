class Checker{
  constructor(){
    this.input = createInput("Answer");
    this.nextProblem = createButton("Next Problem");
    this.checkProblem = createButton("Check Problem");
  }

  display(){
    this.input.position(displayWidth/2,displayHeight/2);
    this.nextProblem.position(displayWidth/4,displayHeight/3);
    this.checkProblem.position(displayWidth/4,displayHeight/3 + 20);

    this.nextProblem.mousePressed(()=>{
      bottomNumber = bottomNumber+1;
      Checker.update();
      firstNumber = Math.round(random(1000,9999));
      secondNumber = Math.round(random(1000,9999));

      bigNumber = firstNumber + secondNumber;
      conversion = bigNumber.toString();
    });

    this.checkProblem.mousePressed(()=>{
      checking = this.input.value();
      if(checking === conversion){
        alert("Correct Answer!");
        topNumber=topNumber+1;
        Checker.update();
      }
      else{
       alert("Wrong!");
      }
    });
  }

  static update(){
    database.ref().update({
      top:topNumber,
      bottom:bottomNumber
    });
  }
}