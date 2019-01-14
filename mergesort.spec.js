describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
  });
});

describe('Merge function', function() {
  it('is able to merge two multi-element sorted arrays into one sorted array', function() {
    let firsty = [1, 3, 5, 7];
    let secondy = [2, 4, 6, 8];
    // test the merging algorithm
    expect(merge([firsty, secondy])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('is able to merge two single element arrays', function() {
    let single1 = [2];
    let single2 = [3];
    expect(merge([single1, single2])).toEqual([2, 3]);
  });
});
