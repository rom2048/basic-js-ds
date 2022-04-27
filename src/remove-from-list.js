function removeKFromList( l, k ) {
  let nlist = null;
  let arr = [];

  while(l) {
    if (l.value !== k) {
      arr.push(l.value);
    }
    l = l.next;
  }

  arr = arr.reverse();
  arr.forEach(item => {
    nlist = {value: item, next: nlist}
  });

  return nlist;
}

module.exports = {
  removeKFromList
};
