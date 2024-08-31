import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    // const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@chatapplication.z1kdrew.mongodb.net/?retryWrites=true&w=majority&appName=ChatApplication`;
    const MONGODB_URI = `mongodb+srv://chat-api:chat-api@chatapplication.z1kdrew.mongodb.net/`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;