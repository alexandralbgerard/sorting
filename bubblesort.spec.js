describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one item', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an array with multiple items', function() {
    expect(bubbleSort([7, 4, 2, 6, 1])).toEqual([1, 2, 4, 6, 7]);
  });
});
