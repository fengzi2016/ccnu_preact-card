function request(options) {
    let requestOptions = {
      method: options.method,
      url: options.url
    };
  
    if (options.method === "POST") {
      requestOptions.headers = {
        "Content-Type": "application/json"
      };
      requestOptions.body = options.body;
    }
    return new Promise((resolve, reject) => {
      fetch(requestOptions, ret => {
        if (ret.ok) {
          resolve(JSON.parse(ret.data));
        } else {
          reject(ret);
        }
      });
    });
  }
  export default request;