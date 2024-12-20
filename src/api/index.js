import { authGet, authPost, authPut, get, authDelete } from "./request";
import { API } from "./routes";

export default {
  //User Route
  auth: () => {
    return authPost(API.auth, {});
  },
  sendLoginCode: () => {
    return get(API.login, "");
  },
  login: (code) => {
    return get(API.login + `/${code}`);
  },
  addOrganization: (data) => {
    return authPost(API.addOrganization, data);
  },
  getOrganizations: () => {
    return get(API.getOrganizations);
  },
  deleteOrganization: (name) => {
    return authDelete(API.deleteOrganization, { name });
  },

  getTeachers: () => {
    return authGet(API.getTeachers, "");
  },

  authorizeTeacher: (id) => {
    return authPut(API.authorizeTeacher, { id });
  },

  organizationStats: (orgId) => {
    return authGet(API.organizationStats, orgId);
  },
};
