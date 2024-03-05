//loadbalnce function for
//chinaDownload (Promise) and USDownload (Promise).

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
