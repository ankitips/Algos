// merge two arrays
function mergeArrays(arr1, arr2, n1, 
                              n2, arr3) 
{ 
     i = 0, j = 0, k = 0; 
  
    while (i<n1 && j <n2) 
    { 
      
        if (arr1[i] < Math.abs(arr2[j])) 
            arr3[k++] = arr1[i++]; 
        else
            arr3[k++] = arr2[j++]; 
          console.error("2",arr3[k++]);
    } 
  
    while (i < n1) 
        arr3[k++] = arr1[i++]; 
          console.error("3",arr3[k++]);
  
    while (j < n2) 
        arr3[k++] = arr2[j++]; 
 console.error("4",arr3[k++]);
} 
