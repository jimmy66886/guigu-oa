import request from '@/utils/request'

const api_name = '/admin/system/sysUser'

export default {

    updateStatus(id, status) {
        return request({
            url: `${api_name}/updateStatus/${id}/${status}`,
            method: 'get'
        })
    },
      

    getPageList(page, limit, seachObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            params: seachObj
        })
    },

    save(sysUser) {
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: sysUser
        })
    },

    getById(id) {
        return request({
            url: `${api_name}/get/${id}`,
            method: 'get',
        })
    },

    updateById(sysUser) {
        return request({
            url: `${api_name}/update`,
            method: 'put',
            data: sysUser
        })
    },

    removeById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete',
        })
    },

    batchRemove(idList) {
        return request({
            url: `${api_name}/batchRemove`,
            method: 'delete',
            data: idList
        })
    }
}