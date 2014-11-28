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
    this.operands = [];
    this.operands.length = 3;

    //set event listeners for the operators
    this.setPlusListener();
    this.setMinusListener();
    this.setMultiplyListener();
    this.setDivideListener();
    this.setEqualsListener();

    //set event listeners for the numbers
    this.setNumZeroListener();
    this.setNumOneListener();
    this.setNumTwoListener();
    this.setNumThreeListener();
    this.setNumFourListener();
    this.setNumFiveListener();
    this.setNumSixListener();
    this.setNumSevenListener();
    this.setNumEightListener();
    this.setNumNineListener();
  },

  //listener for the plus (+) operator
  setPlusListener: function() {
    var self = this;
    self.plus.onclick = function() {
      var text = self.txtDisplay.value + "+";
      calculator.operands[1] = "+";
      console.log(calculator.operands[1]);
      return self.txtDisplay.value = text;
    };
  },

  //listener function for the minus (-) operator
  setMinusListener: function() {
    var self = this;
    self.minus.onclick = function() {
      var text = self.txtDisplay.value + "-";
      calculator.operands[1] = "-";
      console.log(calculator.operands[1]);
      return self.txtDisplay.value = text;
    };
  },

  //listener function for the multiply (*) operator
  setMultiplyListener: function() {
    var self = this;
    self.multiply.onclick = function() {
      var text = self.txtDisplay.value + "*";
      calculator.operands[1] = "*";
      console.log(calculator.operands[1]);
      return self.txtDisplay.value = text;
    };
  },

  //listener function for the divide (/) operator
  setDivideListener: function() {
    var self = this;
    self.divide.onclick = function() {
      var text = self.txtDisplay.value + "/";
      calculator.operands[1] = "/";
      console.log(self.operands[1]);
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
    }
  },

  setNumberListener: function(number) {
    var self = this;
    self.number.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + self.number.value;
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + self.number.value;
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = self.number.value;
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = self.number.value;
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + self.number.value;
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + self.number.value;
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = self.number.value;
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = self.number.value;
        }
      }
    };
  },

  //listener function for the number zero (0) button
  setNumZeroListener: function() {
    var self = this;
    self.numZero.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "0";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "0";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "0";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "0"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "0";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "0";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "0";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "0";
        }
      }
    };
  },

  //listener function for the number one (1) button
  setNumOneListener: function() {
    var self = this;
    self.numOne.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "1";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "1";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "1";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "1"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "1";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "1";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "1";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "1";
        }
      }
    };
  },

  //listener function for the number two (2) button
  setNumTwoListener: function() {
    var self = this;
    self.numTwo.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "2";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "2";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "2";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "2"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "2";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "2";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "2";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "2";
        }
      }
    };
  },

  //listener function for the number three (3) button
  setNumThreeListener: function() {
    var self = this;
    self.numThree.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "3";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "3";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "3";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "3"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "3";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "3";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "3";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "3";
        }
      }
    };
  },

  //listener function for the number four (4) button
  setNumFourListener: function() {
    var self = this;
    self.numFour.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "4";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "4";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "4";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "4"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "4";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "4";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "4";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "4";
        }
      }
    };
  },

  //listener function for the number one (5) button
  setNumFiveListener: function() {
    var self = this;
    self.numFive.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "5";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "5";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "5";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "5"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "5";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "5";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "5";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "5";
        }
      }
    };
  },

  //listener function for the number six (6) button
  setNumSixListener: function() {
    var self = this;
    self.numSix.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "6";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "6";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "6";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "6"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "6";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "6";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "6";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "6";
        }
      }
    };
  },

  //listener function for the number seven (7) button
  setNumSevenListener: function() {
    var self = this;
    self.numSeven.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "7";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "7";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "7";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "7"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "7";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "7";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "7";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "7";
        }
      }
    };
  },

  //listener function for the number eight (8) button
  setNumEightListener: function() {
    var self = this;
    self.numEight.onclick = function() {
      
      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "8";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "8";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "8";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "8"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "8";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "8";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "8";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "8";
        }
      }
    };
  },

  //listener function for the number nine (9) button
  setNumNineListener: function() {
    var self = this;
    self.numNine.onclick = function() {

      if(calculator.operands[1] == null) {

        if(calculator.operands[0] != null) {
          calculator.operands[0] = calculator.operands[0] + "9";
          console.log(calculator.operands[0]);
          var text = self.txtDisplay.value + "9";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[0] = "9";
          console.log(calculator.operands[0]);
          return self.txtDisplay.value = "9"
        }
      }

      else {

        if(calculator.operands[2] != null) {
          calculator.operands[2] = self.operands[2] + "9";
          console.log(calculator.operands[2]);
          var text = self.txtDisplay.value + "9";
          return self.txtDisplay.value = text;
        }

        else {
          calculator.operands[2] = "9";
          console.log(calculator.operands[2]);
          return self.txtDisplay.value = "9";
        }
      }
    };
  }
};

window.onload = calculator.init();







