var list = [2,3,455,6];

function insertNumInList(userValArray){
  //stores number in list
  // The list should not be accessible from outside the module

  userValArray.forEach( (el) => {
    list.push(el);
    console.log('Added '+ el + 'successfully into list.');
  })

}

function getListSortedAsc(){
  // This function is private
  list.sort( (a,b) => {
    return a - b;
  });
  return list;
}

var test = 'connected successfully';

module.exports = {
  test: test,
  insertNumInList: insertNumInList,
  getListSorted: function(){
    var list = getListSortedAsc();
    return list
  }
}