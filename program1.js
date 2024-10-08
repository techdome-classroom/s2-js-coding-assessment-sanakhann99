function isValid(s) {

    const stack = [];
    
    const matchingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
       
        if (matchingBrackets[char]) {
            stack.push(char);
        } else {
            const lastOpened = stack.pop();
            if (matchingBrackets[lastOpened] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

