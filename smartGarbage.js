const smartGarbage = function(trash,bins){
  switch (trash){
    case "waste":
      bins.trash += 1;
      break;
    case "recycling":
      bins.recycling += 1;
      break;
    case "compost":
      bins.compost += 1;
      break;
  }
  return bins;
}



smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });


