import OrderDetails from "../models/orderDetails.js";

export const createOrderDetails = async (req, res) => {
  const { orderId, itemId, customerName, count, price } = req.body;

  try {
    const totalPrice = count * price;
    const newOrderDetails = await OrderDetails.create({
      orderId,
      itemId,
      customerName,
      count,
      price,
      totalPrice,
    });
    res
      .status(201)
      .json({
        message: "Order details created successfully",
        orderDetails: newOrderDetails,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to create order details",
        error: error.message,
      });
  }
};

export const getOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetails.find()
      .populate("orderId")
      .populate("itemId");
    res.status(200).json(orderDetails);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to retrieve order details",
        error: error.message,
      });
  }
};

export const getOrderDetailsById = async (req, res) => {
  const { id } = req.params;

  try {
    const orderDetails = await OrderDetails.findOne({ _id: id })
      .populate("orderId")
      .populate("itemId");
    if (!orderDetails) {
      return res.status(404).json({ message: "Order details not found" });
    }
    res.status(200).json(orderDetails);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to retrieve order details",
        error: error.message,
      });
  }
};
