/*
 * @Author: lh
 * @Date: 2020-07-09 15:45:05
 * @LastEditors: lh
 * @LastEditTime: 2020-07-09 16:30:28
 * @Description: 
 * @email: 3300536651@qq.com
 */
/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (42.81%)
 * Likes:    530
 * Dislikes: 0
 * Total Accepted:    92.1K
 * Total Submissions: 181.1K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 说明：不允许修改给定的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 你是否可以不用额外空间解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 思路一：使用Set 时间复杂度O(N) 空间复杂度O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     if(!head) return head;
//     let set = new Set();
//     let node = head;
//     while(node){
//         if(set.has(node)){
//             return node;
//         }
//         set.add(node);
//         node = node.next;
//     }
//     return null;
// };
/**
 * 思路二: 尝试用时间复杂度O(N),空间复杂度为O(1)去解决，
 * 不使用额外的空间，如果一个链表有环，我们可以使用快慢指针，
 * 快指针跑2步，慢指针跑一步，当相遇
 * 的时候就是链表尾连到链表中的节点
 * @param {*} head 
 */
var detectCycle = function (head) {
    if (!head) return head;
    let slow = head,
        fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next; // 慢指针走一步
        fast = fast.next.next; // 快指针走两步
        if (slow === fast) {
            // 说明有环
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}
// @lc code=end