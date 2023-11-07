class CrudRepository{
    constructor(model){
        this.model=new model;
    }

    async create(data){
        try {
            console.log(data)
            const response= this.model.create(data).exec();
            console.log("Response",response)
            return response;
        } catch (error) {
            throw error;
        }
    }

    async destroy(id){
        try {
            const result=await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const result=await this.model.get(id);
            return result;
        } catch (error) {
            console.log('so')
            throw error;
        }
    }

    async getAll(){
        try {
            const result=await this.model.find({});
            return result;
        } catch (error) {
            throw error;
        }
    }

    async update(id,data){
        try {
            const result=await this.model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch (error) {
            throw error;
        }
    }
}
export default CrudRepository;
