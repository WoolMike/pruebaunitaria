const{sum}=require('./app.js');

// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }

// let oneDollarIs={
//     "JPY": 146.26 // japan yen
//     "EUR": .93, // us dollar
//     "GBP": 0.81, // british pound
// }

// let onePoundIs={
//     "JPY": 178.41, // japan yen
//     "EUR": 1.14, //  euro
//     "DLS": 1.21, // us dollar
// }


test("One euro should be 1.07 dollars",function(){
    
  const {fromEuroToDollar}= require ('./app.js');
  const dollars=fromEuroToDollar(3.5);
  const expected =3.5*1.07;
  expect(fromEuroToDollar(3.5)).toBe(3.745)
  

})

test("One dolar should be 146.26 yens",function(){
    
    const{fromDollarToYen}=require('./app.js');
    const yens=fromDollarToYen(1.4);
    const expected =1.4*146.26;
    expect(fromDollarToYen(1.4)).toBe(204.764)
  })


  test("One yen should be .005 pounds ",function(){
    
    const{fromYenToPound}=require('./app.js');
    const yens=fromYenToPound(1234);
    const expected =1234*.005;
    expect(fromYenToPound(1234)).toBe(6.17)
  })
