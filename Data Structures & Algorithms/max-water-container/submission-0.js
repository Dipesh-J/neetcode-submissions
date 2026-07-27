class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let maxWater = 0;

        while (left < right) {
            let leftWall = heights[left];
            let rightWall = heights[right];
            maxWater = Math.max(maxWater, (right - left) * Math.min(leftWall, rightWall));
            if (leftWall < rightWall) {
                left++;
            } else {
                right--;
            }
        }
        return maxWater;
    }
}
