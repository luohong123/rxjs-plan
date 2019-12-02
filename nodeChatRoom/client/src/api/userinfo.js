/*
 * @Author: honghong
 * @Date: 2019-11-30 10:02:55
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-30 14:36:45
 * @Description: 用户信息
 * @email: 3300536651@qq.com
 */
import request from '@/utils/request';

export function login(data) {
    return request({
        url: '/login',
        method: 'get',
        params: data
    })
}
export function register(data) {
    return request({
        url: '/register',
        method: 'get',
        data
    })
}