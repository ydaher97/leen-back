import Delivery from "../models/delivery.js";

export const createDelivery = async (req, res) => {
  const { customerId, items, date, workerId } = req.body;

  try {
    const details = new Delivery({
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

    await details.save();

    res.status(201).json({ details });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create delivery", error: error.message });
  }
};

export const getDelivery = async (req, res) => {
  try {
    const orders = await Delivery.find()
      .populate("customer")
      .populate("worker");
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve orders", error: error.message });
  }
};

export const getDeliveryById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Delivery.findOne({ id })
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

export const getOrdersByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.params;

    // Validate the customer ID
    // if (!mongoose.Types.ObjectId.isValid(customerId)) {
    //   return res.status(400).json({ message: "Invalid customer ID" });
    // }
    console.log(customerId);
    // Find orders by customer ID
    const orders = await Delivery.find({ customerId });

    // If no orders found
    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this customer" });
    }

    // Return the orders
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching Invoice:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
