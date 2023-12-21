/**
 *  处理返回参数格式
 */

module.exports = {
    /**
     * 成功返回
     */
    getSuccessRes (data,msg = '成功') {
        return {
            statusCode:200,
            data,
            msg
        }
    },

    /**
     * 分页成功返回
     */
    getPageSuccessRes (data,total,msg = '成功') {
        return {
            statusCode:200,
            data,
            total,
            msg
        }
    },

    /**
     * 失败返回
     */
    getErrorRes (statusCode,msg = '失败') {
        return {
            statusCode,
            msg
        }
    }
}
