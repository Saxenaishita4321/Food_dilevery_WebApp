import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ishitasaxena437:pd4inc3ttMRlbvLy@cluster0.dlzzd.mongodb.net/FOOD_dev').then(()=>console.log("DB Connected"));
}


// import mongoose from "mongoose";

// const connectDB = async () => {
//     await mongoose.connect('')
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.log("DB Connection Error:", err));
// };

// export default connectDB;
