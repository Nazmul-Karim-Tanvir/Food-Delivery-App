import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nazmulkarim:124365789moja@cluster0.2muiv.mongodb.net/food-del')
    .then(() => console.log('DB Connected'));
};
