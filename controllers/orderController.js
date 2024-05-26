import Order from "../models/order.js";

export const createOrder = async (req, res) => {
  const { customerId, items, date, workerId } = req.body;

  try {
    const orderDetails = new Order({
      customerId,
      items: items.map((item) => ({
        itemId: item.itemId,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      date,
      workerId,
    });

    await orderDetails.save();

    res.status(201).json({ orderDetails });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("customer").populate("worker");
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve orders", error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findOne({ id })
      .populate("customer")
      .populate("worker");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve order", error: error.message });
  }
};
