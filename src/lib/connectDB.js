const { MongoClient, ServerApiVersion } = require("mongodb");

let db;
export const connectDb = async () => {
  if (db) return db;
  const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_API_NAME}:${process.env.NEXT_PUBLIC_API_PASSWORD }@cluster0.4mwwnz0.mongodb.net/?appName=Cluster0`;

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    
    });


    db  = client.db("car-doctor-pro")
    return db

  } catch (error) {
    console.log(error);
  }
};
