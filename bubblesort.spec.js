describe('the bubble sorting algorithm', function(){
  let test_sort_arr = [6,3,2,5,10,4,9,8,0,1,7]
  let test_sorted_arr = [0,1,2,3,4,5,6,7,8,9,10]

  // beforeEach(() => {
  //   spyOn(window, 'swap').and.callThrough()
  // })

  it('can sort an array', function(){
    const sorted_arr = bubbleSort(test_sort_arr)
    expect(JSON.stringify(sorted_arr)).toEqual(JSON.stringify(test_sorted_arr))


  })
  it('uses swap the right amount of times', function(){
    spyOn(window, 'swap')
    bubbleSort(test_sort_arr);
    expect(swap.calls.count()).toEqual(55)
  })
})
