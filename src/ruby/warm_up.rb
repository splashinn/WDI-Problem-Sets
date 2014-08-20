# Part 1: Write a method remove_duplicates which takes an array and removes the duplicates, while returning the array
# w/o the duplicates

def remove_duplicates(arr)
	new_array = arr.uniq()
	Kernel.print(new_array)
end

a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]

remove_duplicates(a)

# Part 1: another solution

def remove_duplicates_1(arr)
	i = arr.length
	while i > 0
		if arr[i] == arr[i-1]
			arr.slice!(i)
		end
		i -= 1
	end
	return arr
end

d = [1, 1, 2, 2, 3, 3, 4, 4]

Kernel.print(remove_duplicates_1(d))

# Part 2: Write a method that does the exact same thing as above, except make 
# it work on an unsorted array. It's up to you to decide how you handle duplicates
# (which one do you remove?); all that matters is that you return an array of unique elements.

def remove_duplicates_unsorted(arr)
	new_array = arr.uniq()
	Kernel.print(new_array)
end

b = [2, 4, 3, 2, 1, 3, 4, 1, 5, 6, 5, 6, 7, 8, 9, 19, 18, 19, 29, 20, 9, 29]

remove_duplicates_unsorted(b)

# Part 2: another solution

def remove_duplicates_unsorted_1(arr)
	new_array = Array.new()
	for item in arr
		if !new_array.include?(item)
			new_array.push(item)
		end
	end
	return new_array
end

Kernel.print(remove_duplicates_unsorted_1(c))

c = [2, 4, 3, 2, 1, 3, 4, 1, 5, 6, 5, 6, 7, 8, 9, 19, 18, 19, 29, 20, 9, 29]

# For a hash, in order to remove duplicate items you could use 'index_by'

# Part 3: 
def remove_duplicates_hash(my_hash)
	new_hash = Hash.new()
	my_hash.each do |key, value|
		if !new_hash.has_value?(value)
			new_hash[key] = value
		end
	end
	return new_hash
end

