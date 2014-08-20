# Quicksort Algorithm Implementation

def quicksort(array, min=0, max=array.length-1)
	if min < max
		index = reorder_partition(array, min, max)
		quicksort(array, min, index-1)
		quicksort(array, index+1, max)
	end
end

def reorder_partition(array, left_index, right_index)
	middle_index = (left_index+right_index)/2
	pivot_value = array[middle_index]

	array_swap!(middle_index, right_index)

	less_array_pointer = left_index

	for greater_array_pointer in left_index...right_index
		if array[greater_array_pointer] <= pivot_value
      array.swap!(greater_array_pointer, less_array_pointer)
      less_array_pointer+=1
    end
  end

  array.swap!(less_array_pointer, right_index)

  return less_array_pointer
end

class Array
  def swap!(a,b)
    self[a], self[b] = self[b], self[a]
    self
  end
end