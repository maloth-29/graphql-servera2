import { gql } from "apollo-server-express";

export const typeDefs=gql`
       scalar JSON
        type Users{
        name:String
        loc:String
        }
        input Player{
         name:String!
        loc:String!
        runs:Int!
        }
        type Students{
        name:String!
        rno:String!
        loc:String!
        }
        input StudentsInput{
        name:String!
        rno:String!
        loc:String!
        }
          

        type Query{
        getName:String
        getUsers:[Users]
        getStudents:[Students]
        }


        type Mutation{
        saveUser:Boolean
        savePlayer(data:Player):Int
        saveStudents(data:StudentsInput):JSON

        }

`