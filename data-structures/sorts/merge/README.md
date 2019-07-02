# Challenge Summary: Insertion Sort

The basic idea of insertion sort is to select one element at a time and then search for the correct place to insert it.

## Challenge Description

Complete a working, tested implementation of Insertion Sort, based on the pseudo code provided

## Approach & Efficiency

I reasearch insertion sort (watched videos, read articles, and reviewed incremental illustrations ), reviewed the Pseudo code, wrote tests and then created to code.

## Provided Pseduo Code 

  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
