export const participateRequestsBaseUrl = "/participate-requests";
export const participateRequestsForCurrentUserUrl = participateRequestsBaseUrl + "/self";
export const participateRequestAcceptUrl = (id: string) => { return participateRequestsBaseUrl + "/" + id + "/accept"};
export const participateRequestDeclineUrl = (id: string) => { return participateRequestsBaseUrl + "/" + id + "/decline"};
export const participateRequestDeleteUrl = (id: string) => { return participateRequestsBaseUrl + "/" + id }