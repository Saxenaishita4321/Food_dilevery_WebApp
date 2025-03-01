import foodModel from "../models/foodModel.js";
import fs from 'fs';

const addFood = async (req, res) => {
    try {
        // ✅ Validate if Image Exists
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        let image_filename = req.file.filename;

        // ✅ Create New Food Item
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        // ✅ Save Food Item to Database
        await food.save();
        res.status(201).json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};

//all food list
const listFood = async (req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

//remove Food Item
const removeFood = async(req,res)=>{

    try {
        const food= await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export { addFood,listFood,removeFood }
