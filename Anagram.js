// Direct Comparison
function anagram(word1, word2) {
    lowerWord1 = word1.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    console.log(lowerWord1)
    lowerWord2 = word2.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    console.log(lowerWord2)
    if(lowerWord1 == lowerWord2) {
        console.log(word1 + " is an anagram of " + word2)
    } else {
        console.log('Nope!')
    }
}

anagram('PE tER!', 'retpe')

// Group Anagrams
let listOfAnagrams = ['abed',
    'bade',
    'bead',
    'abet',
    'beat',
    'beta',
    'abets',
    'baste',
    'betas',
    'beast',
    'beats',
    'abut',
    'tabu',
    'tuba',
    'acme',
    'came',
    'mace',
    'acre',
    'care',
    'race',
    'acres',
    'cares',
    'races',
    'scare',
    'actors',
    'costar',
    'castor',
    'actress',
    'casters',
    'recasts',
    'airmen',
    'marine',
    'remain'
];

function groupAnagrams(strs) {
    let result = {}; // Object that stores key to group words together.
    for (let word of strs) { // Iterate each word
        let sortedKey = word.split("").sort().join("");
        if (result[sortedKey]) { //check if key exist in result
            result[sortedKey].push(word); //if it does, push string value.
        } else {
            result[sortedKey] = [word]; //if it does not, make it exist
        }
    }
    return Object.values(result); //return object values of result.
}

groupAnagrams(listOfAnagrams)

// http://www.english-for-students.com/Complete-List-of-Anagrams.html]  
// https://www.youtube.com/watch?v=kQL41OMf51Y&ab_channel=ThinkFWD
// https://medium.com/@646634/grouping-anagrams-together-in-javascript-4da359d6bb98