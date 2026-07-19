class Solution {
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join("");
    }

    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const length = parseInt(str.slice(i, j));
            const s = str.slice(j + 1, j + 1 + length);
            result.push(s);
            i = j + 1 + length;
        }
        return result;
    }
}
