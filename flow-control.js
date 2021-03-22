function basicTeenager(age) {
<<<<<<< HEAD
  if(age >= 13 && age <=19) {
    return 'You are a teenager!';
=======
  if (age >=13 && age <= 19) {
    return "You are a teenager!"
>>>>>>> e514b7829315dca598257eea3a05a93ad50009f7
  }
}

function teenager(age) {
  if(age >= 13 && age <=19) {
    return 'You are a teenager!';
  }
  else {
    return 'You are not a teenager';
  }
}

function ageChecker(age) {
  if(age >= 13 && age <=19) {
    return 'You are a teenager!';
  }
  else if(age >= 20) {
    return "You are a grownup";
  }
  else (age <= 12) {
    return "You are a kid";
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <=19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (ageCheck) {
    case n : if (age >= 13 && age <=19)
      return "You are a teenager";
    break;

    default :
      return "You have an age";
  }
}
