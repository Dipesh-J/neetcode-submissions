class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) return s.length;

        let maxCount = 1;
        const hashset = new Set();

        let left = 0;
        for (let right = 0; right < s.length; right++) {
            while (hashset.has(s[right])) {
                hashset.delete(s[left]);
                left++; 
            }
            hashset.add(s[right]);
            maxCount = Math.max(maxCount, right - left + 1);
        }
        return maxCount;
    }
}
