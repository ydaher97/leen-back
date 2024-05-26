import Worker from "../models/worker.js";

export const createWorker = async (req, res) => {
  const { name } = req.body;

  try {
    const newWorker = await Worker.create({ name });
    res
      .status(201)
      .json({ message: "Worker created successfully", worker: newWorker });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create worker", error: error.message });
  }
};

export const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve workers", error: error.message });
  }
};

export const getWorkerById = async (req, res) => {
  const { id } = req.params;

  try {
    const worker = await Worker.findById(id);
    console.log(worker);
    if (!worker) {
      return res.status(404).json({ message: "Worker not found" });
    }
    res.status(200).json(worker);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve worker", error: error.message });
  }
};
