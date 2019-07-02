## Lecture Notes: Merge Sort

Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort where the order of equal elements is the same in the input and output. 

The Merge Sort Algorithm is a divide and conquer algorithm which runs in O(n log n), time in the worst case. It can be easily adapted to operate on linked lists and very large lists stored on slow-to-access media such as disk storage or network attached storage.

### Learning Objectives

* Students will learn how to implement working code based on Pseudo code, including providing working tests to verify the stability and functionality of the code. 

* Students will learn the benefits and drawbacks of using merge sort, including when it is advantageous to use and when it is not. 

* Students will learn the run time or Big O of merge sort. 

### Lecture Flow

* Merge sort first divides the array into equal halves then combines the halves in a sorted manner. 
* * Merge sort keeps on dividing the list into equal halves until it can no more be divided. 
* * Finally, merge those sublists in a manner that results into a sorted list.

* It is a stable sorting method
* * A stable sorting algorithm being an algorithm where the order of equal elements is the same in the input and output.

* Merge sort is good for large data structures.
* * It can be easily adapted to operate on linked lists and very large lists stored on slow-to-access media such as disk storage or network attached storage.


### Diagram

<img src="./assets/merge-sort.png" width=400>

### Algorithm

* 

### Pseudocode

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if arr.length > 1
      DECLARE mid <-- n/2
      DECLARE b <-- arr[0...mid]
      DECLARE c <-- arr[mid...n]
      // break down the left side
      Mergesort(b)
      // break down the right side
      Mergesort(c)
      // merge the left and the right side together
      Merge(b, c, arr)

ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = b.length
       add remaining items in array c to array a
    else
       add remaining items in array b to array a
       
    return a


### Readings and References

#### Watch

* [Merge Sort in JavaScript](https://www.youtube.com/watch?v=o1V9J3QR1ZQ)

#### Read

* [Programming with JS: Merge Sort](https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0)

* [Merge Sort Algorithm in JavaScript](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)

#### Bookmark

* [Merge Sort](https://khan4019.github.io/front-end-Interview-Questions/sort.html#mergeSort)