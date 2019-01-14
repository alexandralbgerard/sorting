describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([15, 4, 2, 5, 8])).toEqual([[15, 4], [2, 5, 8]]);
    expect(split([15, 4, 2, 5, 8, 1])).toEqual([[15, 4, 2], [5, 8, 1]]);
  });
});

describe('Merge Function', function() {
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

describe('mergeSort Array Function', function() {
  it('is able to merge and sort an even length array', function() {
    expect(mergeSort([15, 4, 2, 5, 8, 1])).toEqual([1, 2, 4, 5, 8, 15]);
    it('is able to merge and sort an odd length array', function() {
      expect(mergeSort([15, 4, 2, 5, 8])).toEqual([2, 4, 5, 8, 15]);
    });
  });
});
