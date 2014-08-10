# Generating a random alphanumeric string
# splashinn

range = [*'0'..'9', *'a'..'z', *'A'..'Z']
Array.new(8) {range.sample}.join

# Benchmark for solutions: 
require 'benchmark'
N = 10_000 #Number of Test loops

Benchmark.bmbm(10) {|b|

  b.report('Nat'      ) { N.times { ([nil]*8).map { ((48..57).to_a+(65..90).to_a+(97..122).to_a).sample.chr }.join } }
  b.report('tokland') { N.times { 8.times.map { [*'0'..'9', *'a'..'z', *'A'..'Z'].sample }.join } }
  b.report('knut'   ) { N.times { Array.new(8){[*'0'..'9', *'a'..'z', *'A'..'Z'].sample}.join } }
  b.report('Natinit') { 
    range = ((48..57).to_a+(65..90).to_a+(97..122).to_a)
    N.times { ([nil]*8).map { range.sample.chr }.join }
  }
  b.report('knutinit') { 
      range = ((48..57).to_a+(65..90).to_a+(97..122).to_a)
      N.times { Array.new(8){range.sample}.join }
  }

}