export function getBaseUrl() {
    switch (process.env.NODE_CMS_ENV) {
    case 'qafc':
        return 'http://cms.qafc.ops.com/';
    case 'pre':
        return 'http://cmsb.yiqiguang.com/';
    case 'online':
        return 'https://cmsbackend.toobob.com/';
    default:
        return 'http://cms.dev.ops.com/';
    }
}

export function getPageBaseUrl() {
    switch (process.env.NODE_CMS_ENV) {
    case 'qafc':
        return 'http://cms-web.qafc.ops.com/';
    case 'pre':
        return 'http://cmsuat.yiqiguang.com/';
    case 'online':
        return 'http://cms.yiqiguang.com/';
    default:
        return 'http://cms-web.qafc.ops.com/';
    }
}
