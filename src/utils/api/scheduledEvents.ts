export const scheduledEventsBaseUrl = "/scheduled-events";
export const scheduledEventByIdUrl = (id: string) => { return scheduledEventsBaseUrl + "/" + id };
export const scheduledEventAuditLogUrl = (id: string)=> { return scheduledEventsBaseUrl + "/" + id + "/audit-log"};
export const scheduledEventParticipateRequestUrl = (id: string) => { return scheduledEventsBaseUrl + "/" + id + "request" };