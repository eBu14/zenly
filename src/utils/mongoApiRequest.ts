import axios from "axios";

// api url = ap-south-1.aws.data.mongodb-api.com/app/data-gxuhn/endpoint/data/v1
// api key =  iD6fmjlp3xdLkseDaCgQPd4rc1NX7qhOOC2IAQi0U1WHrZW1TK23HDBTESvRWc5A;

type MongoRequestType = "find" | "findOne" | "insertOne" | "updateOne" | "deleteOne" | "aggregate" ;
type MongoApiCollectionType = "conversations" | "chat";
export const mongoApiRequest = async (

  action: MongoRequestType,
  collection: MongoApiCollectionType ,
  body: object
  ) => {
    try{
  const axiosResponse = await axios.post(
    `${process.env.MONGO_API_URL}/action/${action}`,
    {
      collection: collection,
      database: "penly",
      dataSource: "Cluster0",
      ...body,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGO_API_KEY,
      },
    }
  );
  const { data } = axiosResponse;
  return { response:data };
  } catch (error : any) {
    return{error: error.response.data};
  } 
}
