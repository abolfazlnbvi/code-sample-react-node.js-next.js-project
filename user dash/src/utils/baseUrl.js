import { CrossStorageClient } from "cross-storage";
const PRODUCTON = true
export const baseUrl = PRODUCTON == true ? "http://localhost:8443" : "https://api.amoozkaar.ir"
export const baseUrlUpload = PRODUCTON == true ? "http://localhost:8443" : "https://api.amoozkaar.ir"
export const baseUrlImage = PRODUCTON == true ? "http://localhost:8443/image" : "https://api.amoozkaar.ir/images"
export const storage = new CrossStorageClient(PRODUCTON == true ? "http://localhost:5223" : 'https://amoozkaar.ir');

// host

// export const baseUrl = "https://api.amoozkaar.ir"
// export const storage = "https://amoozkaar.ir"
// export const baseUrlUpload = "https://api.amoozkaar.ir"
// export const baseUrlImage = "https://api.amoozkaar.ir/images"


// localhost


// export const baseUrl = "http://localhost:8443"
// export const storage = "http://amoozkaar.ir"
// export const baseUrlUpload = "http://api.amoozkaar.ir"
// export const baseUrlImage = "http://api.amoozkaar.ir/images"