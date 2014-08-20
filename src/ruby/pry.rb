require 'pry' # require adds the gem for whatever is declared, in this case 'pry'

def multiply(x,y)
	binding.pry # stops code, opens in pry so you can test it out
	Kernel.puts("After binding.pry")
	return x*y
end

multiply(10,45)