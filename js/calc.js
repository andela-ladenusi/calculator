var calculator = {

  init: function() {
    //retrieve the display textfield
    this.txtDisplay = document.getElementById("display");

    //retrieve the operation buttons
    this.plus = document.getElementById("plus");
    this.minus = document.getElementById("minus");
    this.multiply = document.getElementById("multiply");
    this.divide = document.getElementById("divide");
    this.equals = document.getElementById("equals");

    //retrieve the number buttons
    this.numZero = document.getElementById("zero");
    this.numOne = document.getElementById("one");
    this.numTwo = document.getElementById("two");
    this.numThree = document.getElementById("three");
    this.numFour = document.getElementById("four");
    this.numFive = document.getElementById("five");
    this.numSix = document.getElementById("six");
    this.numSeven = document.getElementById("seven");
    this.numEight = document.getElementById("eight");
    this.numNine = document.getElementById("nine");

    //create an empty array
    this.operands = new Array(3);

    //set event listeners for the operators
    this.setOperatorListener(this.plus);
    this.setOperatorListener(this.minus);
    this.setOperatorListener(this.multiply);
    this.setOperatorListener(this.divide);
    this.setEqualsListener();

    //set event listeners for the numbers
    this.setNumberListener(this.numZero);
    this.setNumberListener(this.numOne);
    this.setNumberListener(this.numTwo);
    this.setNumberListener(this.numThree);
    this.setNumberListener(this.numFour);
    this.setNumberListener(this.numFive);
    this.setNumberListener(this.numSix);
    this.setNumberListener(this.numSeven);
    this.setNumberListener(this.numEight);
    this.setNumberListener(this.numNine);
  },

  setOperatorListener: function(operator) {
    var self = this;
    operator.onclick = function() {
      var text = self.txtDisplay.value + operator.value;
      calculator.operands[1] = operator.value;
      console.log(calculator.operands[1]);
      return self.txtDisplay.value = text;
    };
  },

  setEqualsListener: function() {
    var self = this;
    self.equals.onclick = function() {
      var operands = calculator.operands;
      console.log(operands);

      if(operands[1] == "+") {
        var result = parseInt(operands[0]) + parseInt(operands[2]);
        console.log(result);
        self.txtDisplay.value = result;
        return calculator.operands.splice(0, 3);
      }

      else if(operands[1] == "-") {
        var result = parseInt(operands[0]) - parseInt(operands[2]);
        console.log(result);
        self.txtDisplay.value = result;
        return calculator.operands.splice(0, 3);
      }

      else if(operands[1] == "*") {
        var result = parseInt(operands[0]) * parseInt(operands[2]);
        console.log(result);
        self.txtDisplay.value = result;
        return calculator.operands.splice(0, 3);
      }

      else if(operands[1] == "/") {
        var result = parseInt(operands[0]) / parseInt(operands[2]);
        console.log(result);
        self.txtDisplay.value = result;
        return calculator.operands.splice(0, 3);
      }
    };
  },

  setNumberListener: function(number) {
    var self = this;
    number.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + number.value;
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + number.value;
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = number.value;
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = number.value;
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + number.value;
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + number.value;
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = number.value;
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = number.value;
        }
      }
    };
  }
};

window.onload = calculator.init();