const routes = require("next-routes")();

routes
    .add("/newPatient/register", 'patients/newPatient')
    .add("/records/:address", "patients/show")
    .add("/records/read/:referenceKey", "patients/records/read")
    .add("/records/add/:address", "patients/records/addRecord")
    .add("/login","auth/login");
module.exports = routes;