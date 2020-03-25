import http from '@/utils/http';

const IndexService = {
    register(data: any, config: any = null) {
        return http.post('/x/x', data, config);
    },
};

export default IndexService;
