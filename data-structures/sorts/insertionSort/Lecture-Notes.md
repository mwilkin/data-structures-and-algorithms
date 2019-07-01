## Lecture Notes: Insertion Sort

Insertion sort is a simple sorting algorithm which works in a similar manner as sorting a set of cards you are holding in your hand. 

The Insertion Sort Algorithm runs in O(n^2), or quadratic, time in the worst case. This typically isn’t very effective and shouldn't be used for large lists. But, it usually out performs more advanced algorithms on smaller lists or lists that are partially or fully sorted.

### Learning Objectives

* Students will learn how to implement working code based on Pseudo code, including providing working tests to verify the stability and functionality of the code. 

* Students will learn the benefits and drawbacks of using an insertion sort, including when it is advantageous to use and when it is not. 

* Students will learn the run time or Big O of insertion sort. 

### Lecture Flow

* Items aren't swapped during the sorting process
* * In actuality, the sorted part is looped through to find the first smaller item, or head of the array.

* It is a stable sorting method
* * A stable sorting algorithm is any algorithm that won’t change the relative order of items in a list that have the same value. 

* It sorts in-place
* * It only uses O(1) (constant) space. This is an example of a time-space tradeoff, where you’re sacrificing the speed of your algorithm in order to conserve memory.

* It's adadptive
* * It works well with arrays that are already partially or fully sorted.

### Diagram

<img src="./assets/insertionSort.png" width=400>

### Algorithm
* You can skip the first item (index 0), since any array of size 1 is trivially sorted.

* Starting with the element at index 1, in this case 3, insertion sort will look at the sub-array to the left of index 1 (which is our current “key”) for the position where the key should be placed. Because 5 is greater than 3, it knows that 3 should be placed before 5.

Iteration 0 (unsorted array): [5,3,1,4,6]

Iteration 1, temp is 3 (was at index 1): [5,3,1,4,6] →[3,5,1,4,6]

* After the first iteration of insertion sort, the new temp will be at index 2 which holds the value of 1.  This process will repeat until the last value is compared and sorted, and then insertion sort will return the sorted array.

Iteration 2, temp is 1 (was at index 2): [3,5,1,4,6] →[1,3,5,4,6]


Iteration 3, temp is 4 (was at index 3, ): [1,3,5,4,6] → [1,3,4,5,6]

Iteration 4, temp is 6 (was at index 4): [1,3,4,5,6] → [1,3,4,5,6] — because 6 was already in the right place, no changes are made and insertion sort returns the sorted array. Notice how after each step, all the items to the left of the key are already sorted.

### Pseudocode

  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

### Readings and References

#### Watch

* [Insertion Sort in JavaScript](https://www.youtube.com/watch?v=ArPCGZRXXc0)

#### Read

* [Javascript Algorithms — Insertion Sort](https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c)

* [Insertion Sorting for Beginners in JS](https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg)

#### Bookmark

* [GeeksfoGeeks Insertion sort](https://www.geeksforgeeks.org/insertion-sort/)