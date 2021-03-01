import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL: 'https://getman.cn/mock',
		timeout: 5000,
	})
	
	// 拦截器
	/* instance.interceptors.request.use(config => {
		return config
	},err => {
		return Promise.reject();
	}) */
	
	/* instance.interceptors.response.use(res => {
		res => {
		    if (response.status === 200) {
		        return response.data;
		    } else {
		        Promise.reject();
		    }
		},
		error => {
		    return Promise.reject();
		}
	}) */
	
	return instance(config)
}