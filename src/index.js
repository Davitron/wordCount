

module.exports = {
    words : (sentence) => {
        if (typeof sentence !== 'string') {
            return 'Arguement is not a string';
        } else {
            let wordsCount = {};
            
            //convert arguement to an array of words and avoid white spaces
            let wordsInSentence = sentence.split(' ').filter(word => word !== '');
            
            
            //loop through wordsInSentence to count occurence of each word
            
            wordsInSentence.forEach((word) => {
            if(word in wordsCount) {
                wordsCount[word] += 1;
            } else {
                wordsCount[word] = 1
            }
            })
            
            return wordsCount;

        }
    }
}