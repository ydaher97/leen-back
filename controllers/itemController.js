import Item from "../models/item.js";

export const createItem = async (req, res) => {
  const { name, price } = req.body;
  console.log(req.body);
  try {
    const newItem = await Item.create({ name, price });
    console.log(newItem);
    res
      .status(201)
      .json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create item", error: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve items", error: error.message });
  }
};

export const getItemById = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({ id });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve item", error: error.message });
  }
};
