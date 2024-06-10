import Customer from "../models/customer.js";

const createUser = async (req, res) => {
  const { name } = req.body;

  try {
    const newUser = await Customer.create({ name });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", error: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve customers", error: error.message });
  }
};

const getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ message: "customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve worker", error: error.message });
  }
};

export { createUser, getCustomers, getCustomerById };
