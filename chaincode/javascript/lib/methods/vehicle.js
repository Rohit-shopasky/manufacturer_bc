module.exports={
    async addNewVehicle(ctx,vin, vehicleType, modal, companyName, color)
    {
         let vehicle = {
            vin         :vin,
            vehicleType :vehicleType,
            modal       :modal,
            companyName :companyName,
            color       :color

        }
        await ctx.stub.putState(vin,Buffer.from(JSON.stringify(vehicle)));
        let returnObj = {status:true,data:{}};
        return returnObj; 
    }
}