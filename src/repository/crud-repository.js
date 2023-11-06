
class CrudRepository{
    
    constructor(Model){
        this.model=new Model;
    }

    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const result=await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            console.log(error);
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            console.log(error);
        }
    }

    async getAll(){
        try {
            const result=await this.model.find();
            console.log('results',result)
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async update(id,data){
        try {
            const result=await this.model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            console.log(error);
        }
    }

}
export default CrudRepository;