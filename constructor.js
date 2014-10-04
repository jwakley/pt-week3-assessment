/*Create a function called 'person' that accepts a name and an age parameter
  and returns an object with those properties. 
*/

    var person = function(name, age) {
      var person = {};
      person.name = name;
      person.age = age;
      return person;
    };

/* Call your function twice creating two different objects */

  var maddie = person('maddie', 11);
  var lindsay = person('Lindsay', 9);
    

/* In this scenario, can you add a method to your person functions prototoype and then have
   the objects you create with that function delegate to the person's prototype?

   //Explain your answer here
   No, you can only add a property/method to an object that was created through a constructor function ... 
   Not on object literals like the one we created in the function above.


/* Create a Constructor function called 'Person' that accepts a name and an age paramter
    and returns an object with those parameters */

  var Person = function(name, age) {
    this.name = name;
    this.age = age;
  };

/* Add a property called sayAge to the Person's prototype which says that instances name */

  Person.prototype.sayAge = function() {
    console.log("I am " + this.age + " years old!");
  };

/* Create two instances of Person and call sayAge with one of those instances. */

  var jeramy = new Person('Jeramy', 36);
  var devin = new Person('Devin', 27);

  jeramy.sayAge();