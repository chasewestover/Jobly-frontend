import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://jobly-marcus-n-chase.herokuapp.com";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.log("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};


    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async applyToJob(username, jobId) {
    await this.request(`users/${username}/jobs/${jobId}`, null, "post")
  }
  static async unapply(username, jobId) {
    await this.request(`users/${username}/jobs/${jobId}`, null, "delete")
  }

  // static async request(endpoint, data = {}, method = "get")

  static async getAllCompanies(data) {
    let res = await this.request(`companies`, data);
    return res.companies;
  }

  static async getAllJobs(data) {
    let res = await this.request(`jobs`, data);
    return res.jobs;
  }

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    JoblyApi.token = res.token;
    return res;
  }

  static async getUser(data) {
    let res = await this.request(`users/${data.username}`);
    return res.user;
  }

  static async register(data) {
    let res = await this.request(`auth/register`, data, "post");
    JoblyApi.token = res.token;
    return res;
  }
  static async update(data, username) {
    this.request(`users/${username}`, data, "patch");
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  

export default JoblyApi;