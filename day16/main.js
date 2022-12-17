function insertDashes(sentence) {
    let wordsArray = sentence.split(" ")
    let newWords = []
    
    for (let i = 0; i < wordsArray.length; i++) {
        let newWord = wordsArray[i].split("")
        
        newWord = newWord.join("-")
        
        newWords.push(newWord)
    }
    
    return newWords.join(" ")   
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});