
// let number = 0
// while (number <= 12){
// console.log (number)      // bevrjer wera ro ar mogviwios
// number = number + 2
// }
// console.log ()





// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;    // xarisxshi ayvana
//     counter = counter + 1;
// }
// console.log (result)

// console.log ( 2 ** 10) // ori fifqi xarisxshi ayvanaa






// let yourName ;
//                               // sul vikitxav shens saxels do while
// do {
//     yourName = prompt('who are you?');
// } while (!yourName)              
// console.log(yourName)






// switch (prompt("whats weater like?")) {
//     case "rainy":
//         console.log("remember to bring umbrella")
//         break;
//     case "sunny":
//         console.log("dress lightly")             //switch chveni dzma da megobari
//         break;
//     case "cloudy":
//         console.log("go outside")
//         break;
//     default:
//         console.log("unknown weather type!");
//     break
// }



                            //FUNCTIONS



// const squear = function (x) {
//     return x * x;                 // akvadrateba
// }
// console.log (squear(12))  //12aris input 144 aris output






// const power = function(base, exponent) {
//     let result = 1
//     for (let count =0; count < exponent ; count++ ) {
//         result = result * base;
//     }
//     return result ;
// }
// console.log(power(2,10))





// let x = 10;
// if(true) {
//     let y = 20
//     var z = 30
//     console.log(x+y+z) 
// }
// console.log(x+y)





// humusi yvelas 

// const hummus = function(factor) {
//  const ingredient = function(amount,unit,name) {
//     let ingredientAmount = amount * factor ;
//     if (ingredientAmount > 1) {
//         unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//  }
//     ingredient(1, "can" , "cjickpeas")
//     ingredient(0.25, "cup" , "tahini")
//     ingredient(0.25, "cup", 'lemo juice')
//     ingredient(1, "clove", "garlick")
//     ingredient(2,"tablespoon", "olive oil")
//     ingredient(0.5, "teaspoon", "cumin")
// }

// hummus(20)





// function squear(x) {
//     return x*x           //FUNQCIIS DEKLARACIA
// }
// console.log (squear(12))

// console.log("the future says:",future())
//  function future(){                         //deklarirebul funqviebs prioriteti enichebat da adian zevit 
//     return "you'll never have flying cars"
//  }





//constit sheqmnili cvladi ucvlelia 




// const power = (base,exponent) => {
//     let result = 1
//     for (let count = 0 ; count < exponent;count++) {    //arrow function
//         result*=base
//     }
//     return result
// }
// console.log(power(2,10))


// const squear1 = (x) => {return x * x}
// const squear2 = x => x*x           //arrow tsl kacia

// console.log(squear1(12))
// console.log(squear2(12))





// masivebis dros tvlas viwyebt 0idan da mat sheidzleba mivwvdet numeraciis cotaxanshi davwer ager qvevit
//daje funqciis shenaxvac sheidzleba masivshi

// let listOfNumbers = [2,3,5,7,11, () => console.log("hello world")]
// console.log(listOfNumbers[2])
// console.log(listOfNumbers[4])        mtyvnelobadzmao
// console.log(listOfNumbers[3-1])
// listOfNumbers[5]()



// let names = ["rene", "ketamini","xidze", "xazi","kaia", "ynosva",  ]
// console.log(names [names.length - 1] ) //esmashin roca bolos amotana ginda

// let names = ["rene", "ketamini","xidze", "xazi","kaia", "ynosva",  ]
// console.log(names [Math.floor(names.length / 2)]) //es roca shuas amotana ginda





// let sequence = [1,2,3]
// sequence.push(4)
// sequence.push(5)          //methods about push amatebs ra bolo elementebs 
// sequence.push(8)
// console.log(sequence)
                            // //es daaakonsolebs 123458
                            // //mere es amoigebs bolos da rac darcheba imas amoagdebs console
// console.log(sequence.pop())
// console.log(sequence)

//unshift tavshi / shift tavidan igebs / push boloshi amatebs/pop bolodan igebs

                           





                             // OBJECTS


// let day1 = {
//     sqeurrel:false,
//     events: ["work","touched tree","pizza","running"],      //masividan elementis amogeba
// };
// console.log(day1.events[2])


// let descriptions = {
//     work:"went to work",                      //ase xddeba mashin roca gvinda dashorebuli saxeli davarqvat dsma
//     "touched tree": "touched a tree"
// }
// console.log(descriptions["touched tree"])


// let anObject = {left:1, right:2};
// console.log(anObject.left);
// delete anObject.left;            //delete washlis objects ase 
// console.log(anObject.left)
// console.log(anObject);
// console.log("left"in anObject);     //itoshi in amowmebs esatu is obieqti tu gvaq shignit     
// console.log("right"in anObject);




// let obj = {x: 0, y: 0,z:2}
// console.log(Object.keys(obj)) // amas amoaqvs xyz
// console.log(Object.values(obj)) // amas amoaqvs 002
// console.log(Object.entries(obj)) // amas amoaqvs yvelaferi 


// masivis mutacia shegvidzlia imitorom kompleqsuria 
// primitiuli data struqturebis cvlileba ki ara


