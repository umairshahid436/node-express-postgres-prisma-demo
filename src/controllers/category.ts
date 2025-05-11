import { Request, Response, NextFunction } from "express";
import { Category as CategoryType } from "../types/category";
import { Category } from "../models/category";

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resp = await Category.find();
    res
      .status(200)
      .json({ data: resp, count: resp.length, message: "List of categories" });
  } catch (err) {
    next(err);
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const resp = await Category.findById(+id);
    res.status(200).json({ data: resp, message: "Category" });
  } catch (err) {
    next(err);
  }
};

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body as CategoryType;
    const { name } = body;
    const category = new Category(name);
    const resp = await category.save();
    if (resp) {
      res.status(201).json({ data: "Category added successfully" });
    }
  } catch (err) {
    next(err);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body as CategoryType;
    const { name, id } = body;
    if (id) {
      await Category.update(+id, name);
    }
    res
      .status(200)
      .json({ data: req.body, message: "Category updated successfully" });
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const resp = await Category.delete(+id);
    res
      .status(200)
      .json({ data: resp, message: "Category deleted successfully" });
  } catch (err) {
    next(err);
  }
};
