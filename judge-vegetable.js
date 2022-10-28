const judgeVegetable = function (vegetables, metric) {
  let highest = 0;
  let name;
  for (let i of vegetables){
    if(i[metric] > highest){
      highest = i[metric];
      name = i.submitter;
    }
  }
  return name;
}