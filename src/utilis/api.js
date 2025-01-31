import axios from 'axios';
// import { HeadersHandler } from './headers';
export const serverUrl="https://server-port-six.vercel.app/"
class APIClass {
  constructor() {
    // Initialize if needed
  }

  // Function to create request options
  async getOptions(query, headers = {}) {
    if (!query) {
      query = {};
    }
    const sendHeaders = {};
    const options = {
      params: query,
      headers: { ...sendHeaders, ...headers },
    };

    return options;
  }

  // Logging function for request and response
  logRequestAndResponse(url, method, data, options, response, isSuccess) {
    // console.group(`API ${method.toUpperCase()} - ${url}`);
    // console.log('Request Payload:', { data, options });
    // console.log(isSuccess ? 'Response Data:' : 'Error Response:', response);
    // console.groupEnd();
  }

  // GET method
  getData(url, query = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const options = await this.getOptions(query);
        const response = await axios.get(url, { ...options });
        this.logRequestAndResponse(url, 'GET', null, options, response?.data, true);
        // HeadersHandler.handleResHeaders(response, 'success');
        resolve(response?.data || response);
      } catch (error) {
        this.logRequestAndResponse(url, 'GET', null, null, error, false);
        // HeadersHandler.handleResHeaders(error?.response || error, 'error');
        reject(error);
      }
    });
  }

  // POST method
  postData(url, data, query = {}, headers = {}) {
    console.log(url,data,query)
    return new Promise(async (resolve, reject) => {
      try {
        const options = await this.getOptions(query, headers);
        const response = await axios.post(url, data, { ...options });
        this.logRequestAndResponse(url, 'POST', data, options, response?.data, true);
        // HeadersHandler.handleResHeaders(response, 'success');
        resolve(response?.data || response);
      } catch (error) {
        this.logRequestAndResponse(url, 'POST', data, null, error, false);
        // HeadersHandler.handleResHeaders(error?.response || error, 'error');
        reject(error);
      }
    });
  }

  // PUT method
  putData(url, data, query = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const options = await this.getOptions(query);
        const response = await axios.put(url, data, { ...options });
        this.logRequestAndResponse(url, 'PUT', data, options, response?.data, true);
        // HeadersHandler.handleResHeaders(response, 'success');
        resolve(response?.data || response);
      } catch (error) {
        this.logRequestAndResponse(url, 'PUT', data, null, error, false);
        // HeadersHandler.handleResHeaders(error?.response || error, 'error');
        reject(error);
      }
    });
  }

  // DELETE method
  deleteData(url, query = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        const options = await this.getOptions(query);
        const response = await axios.delete(url, { ...options });
        this.logRequestAndResponse(url, 'DELETE', null, options, response?.data, true);
        // HeadersHandler.handleResHeaders(response, 'success');
        resolve(response?.data || response);
      } catch (error) {
        this.logRequestAndResponse(url, 'DELETE', null, null, error, false);
        // HeadersHandler.handleResHeaders(error?.response || error, 'error');`
        reject(error);
      }
    });
  }
}

// Create an instance of the APIClass
export const API = new APIClass();
