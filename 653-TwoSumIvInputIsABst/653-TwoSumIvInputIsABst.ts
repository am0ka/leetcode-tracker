// Last updated: 6/8/2026, 11:51:29 AM
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTarget(root: TreeNode | null, k: number): boolean {
    const seen = new Set<number>();
    
    function dfs(node: TreeNode | null): boolean {
        if (!node) return false;
        
        const compl = k - node.val;
        if (seen.has(compl)) return true;
        
        seen.add(node.val);
        
        return dfs(node.left) || dfs(node.right);
    }
    
    return dfs(root);
};