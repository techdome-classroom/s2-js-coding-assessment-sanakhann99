function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            stack.push(char);
        } else {
            const topElement = stack.pop();
            if (map[topElement] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

module.exports = { isValid };

