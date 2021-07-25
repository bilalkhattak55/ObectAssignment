  //Question No=1.......
  var items = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 },
  ];
  
  //single items...

  var singleItem = items.forEach((item , index) => {
    var items = item.price;
    console.log("Price of item", index , "is", items);
  });
  
  //total sum of each item.....

  var total = items.reduce((sum , item) => sum + item.price, 0);
  console.log("Total prices of items are Rs: ", total);
  
  //Question No=2.......
  
  var StudentInfo = {
    firstName: "Muhammad",
    lastName: "Bilal",
    email: "mbilalkhk@gmail.com",
    password: "000000000",
    age: 19,
    gender: "male",
    city: "Karachi",
    country: "Pakistan",
  };
  
  var firstName = StudentInfo.hasOwnProperty("firstName");
  console.log(firstName);
  var lastName = StudentInfo.hasOwnProperty("lastName");
  console.log(lastName);
  var age = StudentInfo.hasOwnProperty("age");
  console.log(age);
  var country = StudentInfo.hasOwnProperty("country");
  console.log(country);
  
  //Question No=3.....
  
  function Person(first, last, age, id, college) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.id = id;
    this.college = college;
  }
  //Create a Person Object
  const Student1 = new Person("Muhammad", "Bilal", 19, 077654, "uit");
  const Student2 = new Person("umer", "ali", 31, 978675, "UIT");
  console.log(Student1, Student2);
  
  //Question No 4
  
  function CheckPopulation(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  
  const Peoples = new CheckPopulation(
    "Muhammad bilal",
    "Male",
    "new karachi",
    "intermedite",
    "web developer"
  );
  console.log(Peoples);
  
  //save values of education
  function educationData() {
      var select = document.getElementById("education");
      if (localStorage === "") {
        select[localStorage.getItem("save")].selected = true;
      } else if (select.value === "b.com") {
        localStorage.setItem("save", select.value);
      } else if (select.value === "ba") {
        localStorage.setItem("save", select.value);
      } else if (select.value === "bba") {
        localStorage.setItem("save", select.value);
      } else if (select.value === "mphil") {
        localStorage.setItem("save", select.value);
      }
    }
    
    //save values for profession
    function professionPeoples() {
      var profession = document.getElementById("profession");
      if (localStorage === "") {
        profession[localStorage.getItem("save")];
      } else if (profession.value === "programmer") {
        localStorage.setItem("profession", profession.value);
      } else if (profession.value === "web developer") {
        localStorage.setItem("profession", profession.value);
      } else if (profession.value === "android developer") {
        localStorage.setItem("profession", profession.value);
      } else if (profession.value === "doctor") {
        localStorage.setItem("profession", profession.value);
      }
    }
    
    //save values of radio buttons
    
    var radio = document.getElementsByName("gender");
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        localStorage.getItem("gender");
      }
    }