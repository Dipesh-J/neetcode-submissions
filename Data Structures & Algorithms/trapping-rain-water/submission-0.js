class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const len = height.length;
        let water = 0;
        const leftMax = [];
        leftMax[0] = height[0];

        for (let i = 1; i < len; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }

        const rightMax = [];
        rightMax[len - 1] = height[len - 1];

        for (let i = len  - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }

        for (let i = 0; i < len; i++) {
            water += Math.min(leftMax[i], rightMax[i]) - height[i];
        }
        return water;
    }
}
