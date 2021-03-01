import request from '@/utils/request'

export default class Request {
  constructor(apiurl) {
    this.apiurl = apiurl;
  }

  get(query, randomKey="") {
    return request({
      url: this.apiurl,
      method: 'get',
      params: query,
      randomKey: randomKey
    })
  }

  post(data, randomKey="", ContentType=null, extraEndUrl="") {
    return request({
      url: this.apiurl + extraUrl,
      method: 'post',
      data,
      randomKey: randomKey ,
      ContentType: ContentType    
    })
  }

  put(data, randomKey="", extraEndUrl="") {
    return request({
      url: this.apiurl + extraUrl,
      method: 'put',
      randomKey: randomKey,
      data
    })
  }
  
  delete(data, randomKey="", extraEndUrl="") {
    return request({
      url: this.apiurl + extraUrl,
      method: 'delete',
      data,
      randomKey: randomKey,
      
    })
  }
  
}