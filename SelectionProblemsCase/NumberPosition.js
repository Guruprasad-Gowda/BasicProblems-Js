let num = "10";

switch(num.length) {
  case 1:
    console.log("Unit position");
    break;
  case 2:
    console.log("Tenth position");
    break;
  case 3:
    console.log("Hundred position");
    break;
  case 4:
    console.log("Thousand position");
    break;
  default:
    console.log("Position greater than Thousand");
}
