import slugify from "slugify";
import categoryModal from "../models/categoryModal.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(500).send({
        success: false,
        message: "Name is required",
      });
    }

    const existingCategory = await categoryModal.findOne({ name });
    if (existingCategory) {
      return res.status(500).send({
        success: false,
        message: "Category Already Exists",
      });
    }
    const category = await categoryModal({ name, slug: slugify(name) }).save();

    res.status(201).send({
      success: true,
      message: "Category Created Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Category",
      error,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    if (!name) {
      return res.status(500).send({
        success: false,
        message: "Name is required",
      });
    }

    const category = await categoryModal.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: " Error while updateing",
      error,
    });
  }
};

export const categoryController = async (req, res) => {
  try {
    const category = await categoryModal.find({});
    res.status(200).send({
      success: true,
      message: "All category List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting Category",
      error,
    });
  }
};

export const singleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await categoryModal.findOne(slug);
    res.status(200).send({
      success: true,
      message: "Get Single Category",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting Single Category",
      error,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModal.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category Deleted Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting Single Category",
      error,
    });
  }
};
