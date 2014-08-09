// generateAnagrams2.js
// splashinn

function generateAnagrams(word) {
    if (word.length < 2) {
        return [word];
    } else {
        // By declaring all variables outside of the loop,
        // we improve efficiency, avoiding the needless
        // declarations each time.       
        var anagrams = [];
        var before, focus, after;
        var shortWord, subAnagrams, newEntry;
        var i = 0;

        for (var i = 0; i < word.length; i++) {
            before = word.slice(0, i);
            focus = word[i];
            after = word.slice(i + 1, word.length + 1);
            shortWord = before + after;
            subAnagrams = generateAnagrams(shortWord);

            for (var j = 0; j < subAnagrams.length; j++){
                newEntry = focus + subAnagrams[j];
                anagrams.push(newEntry);
            }
        }
        return anagrams;
    }
}
/* Execution & Benchmarking */
function benchMark(word){  
    console.time("Improved Anagram Engine");
    var result = generateAnagrams(word);
    console.timeEnd("Improved Anagram Engine");
    
    for (var i in result){       
        // console.log(result[i] + "<br>"); // Console
        $("html").append(result[i] + "<br>"); // Document    
    }
    // console.log("Total: " + result.length); // Console
    $("html").append("Total: " + result.length); // Document    
}

benchMark("Tina");