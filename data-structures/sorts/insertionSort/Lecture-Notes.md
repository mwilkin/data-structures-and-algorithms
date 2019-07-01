## Lecture Notes: Insertion Sort

Brief description of what this algorithm is, does, and why we care.

Is it more efficient than others? How does it attack the problem differently?

### Learning Objectives

* What
* Will
* The
* Students
* Learn
* Today

### Lecture Flow

* Main Point
* * Supporting Points

* Another main point
* * More details
* * Go here

### Diagram

<img src="./assets/insertionSort.png" width=400>

### Algorithm

Describe in detail how the algorithm works. Include small code snippets to possibly support the points

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