import mongoose from "mongoose";

let MONGODB_URI: string;
if (process.env.MONGODB_URI === undefined) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
} else {
  MONGODB_URI = process.env.MONGODB_URI;
}

// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function mongoDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default mongoDB;
