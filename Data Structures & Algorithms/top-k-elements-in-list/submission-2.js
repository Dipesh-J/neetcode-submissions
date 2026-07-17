class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const result = [];

        for (let num of nums) {
            if (!freq.has(num)) freq.set(num, 0);
            freq.set(num, freq.get(num) + 1);
        }
        
        const bucket = Array.from({length : nums.length + 1}, () =>[]);

        for (const [num, frequency] of freq) {
            bucket[frequency].push(num);
        }
        let pointer = bucket.length - 1;
        while (result.length < k) {
            for (let num of bucket[pointer]) {
                if (result.length < k) result.push(num);
            }
            pointer--;
        }

        return result;

    }
}
