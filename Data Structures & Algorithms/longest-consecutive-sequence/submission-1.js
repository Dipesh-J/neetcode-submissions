class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const len = nums.length;
        if (len === 0) return len;
        const hashset = new Set([...nums]);
        let longest = 1;
        for (const value of hashset) {
            if (!hashset.has(value - 1)) {
                let count = 1;
                for (let i = 1; i < len; i++) {
                    if (hashset.has(value + i)) {
                        count++;
                        longest = Math.max(count, longest);
                    } else break;
                }
            }
        }
        return longest;
    }
}