let raceNumber = Math.floor(Math.random()*1000);

let earlyRegister = false;

let runnerAge =  32;

if (!earlyRegister)
	raceNumber = raceNumber + 1000;

if (runnerAge > 18 && earlyRegister)
  console.log(`Your race will start at 9:30 am! your race number is ${raceNumber}.`);

else if (runnerAge > 18 || earlyRegister)
  console.log(`Your race will start at 11:00 am! your race number is ${raceNumber}.`);

else if (runnerAge < 18 && !earlyRegister)
  console.log(`Your race will start at 12:30 pm! your race number is ${raceNumber}.`);

else
  console.log('Please see the registration desk.');
