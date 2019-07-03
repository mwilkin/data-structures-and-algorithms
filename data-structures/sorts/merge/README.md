# Challenge Summary: Merge Sort

The basic idea of Merge sort is a sorting technique based on divide and conquer technique. It has a worst-case time complexity being Ο(n log n). It first divides the array into equal halves and then combines them in a sorted manner.

## Challenge Description

Complete a working, tested implementation of Merge Sort, based on the pseudo code provided

## Approach & Efficiency

I reasearch insertion sort (watched videos, read articles, and reviewed incremental illustrations ), reviewed the Pseudo code, wrote tests and then created to code.

## Provided Pseduo Code 

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
