class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const len = strs.length;
        if (len === 0) return [];

        const result = [];
        const group = new Map();

        for (const str of strs) {
            const keyArr = new Array(26).fill(0);

            for (const ch of str) {
                keyArr[ch.charCodeAt(0) - 97]++;
            }
            const key = keyArr.join("#");

            if (!group.has(key)) group.set(key, []);
            group.get(key).push(str);
        }
        return Array.from(group.values());
    }
}
