const sentenceCapitalization = (sentence) => {
    return sentence.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(sentenceCapitalization('hello world hello'));