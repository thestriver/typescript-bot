import { connect } from "mongoose"


export const connectDatabase = async () => {

    const MONGO_URI: string = (process.env.MONGO_URI as string);
    // await connect(MONGO_URI);

    //  try {
        // Connect to the MongoDB cluster
        await connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }
        // ,() => console.log("Database Connected!")
        )
    //   } 
      

    // await connect(process.env.MONGO_URI as string);
    console.log("Database Connected!")

}


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://codevore:<password>@cluster0.q9pqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });