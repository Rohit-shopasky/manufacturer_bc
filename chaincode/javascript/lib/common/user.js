const ClientIdentity = require('fabric-shim').ClientIdentity;
module.exports={
   async checkUser(ctx){
    let cid = new ClientIdentity(ctx.stub);
    let user_attrs = cid.attrs;
    console.log(user_attrs);
    return 1;
   }
}