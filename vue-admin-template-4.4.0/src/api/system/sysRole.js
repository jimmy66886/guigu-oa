import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {

    findAll(){
        return request({
            url: `${api_name}/findAll`,
            method: 'get'
        })
    },

    getRoles(adminId) {
        return request({
            url: `${api_name}/toAssign/${adminId}`,
            method: 'get'
        })
    },

    assignRoles(assginRoleVo) {
        return request({
            url: `${api_name}/doAssign`,
            method: 'post',
            data: assginRoleVo
        })
    },


    // 角色列表-条件分页查询
    getPageList(current, limit, seachObj) {
        return request({
            url: `${api_name}/${current}/${limit}`,
            method: 'get',
            // 普通对象参数传递写法 params:对象参数名称
            // 如果是json格式传递  data: 对象参数名称
            // 或者说,如果是查询字符串,那就是params,如果是post请求的请求体,就用data
            params: seachObj
        })
    },
    // 角色删除
    removeById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete',
        })
    },
    // 角色添加
    saveRole(sysRole) {
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: sysRole
        })
    },
    // 角色修改-数据回显
    getById(id) {
        return request({
            url: `${api_name}/get/${id}`,
            method: 'get'
        })
    },
    updateById(sysRole) {
        return request({
            url: `${api_name}/update`,
            method: 'put',
            data: sysRole
        })
    },
    batchRemove(idList) {
        return request({
            url: `${api_name}/batchRemove`,
            method: 'delete',
            data: idList
        })
    },
}