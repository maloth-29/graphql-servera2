import getDB from "./common/dbConn.js";




export const resolvers={
    // query section only retrive data
        Query:{
        //     getName:()=>{
        //     return 'vinay'
        //    },
        // getUsers:()=>{
        //     return [
        //         {
        //             name:"vinay",
        //             loc:"warangal"
        //         },
        //         {
        //             name:"lekha",
        //             loc:"guntur"

        //         }
        //     ]
        // },
        getStudents:async ()=>{
         try{
            const db = await getDB();
        const collection = db.collection('students');
        const result = await collection.find().toArray()
        return result
         }catch(ex){
             return ex.message;
         }
        }
        },

        //mutation section(insert,update,delete the data)
        Mutation:{
            saveUser:()=>{
                return true 
             },
            savePlayer:(a,inputData,c,d,e)=>{
                console.log('data',inputData)
                return 1;
                
            },
            saveStudents:async (a,inputData,c,d)=>{
                try{
                const data = inputData.data;
                const db = await getDB();
                const collection = db.collection('students')
                const result = await collection.insertOne(data)
                 return result
                }catch(ex){
                    console.log('error',ex)
                    return ex.message

                }

            }
        }
}