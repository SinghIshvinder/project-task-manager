const taskModel = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  try {
      const tasks = await taskModel.find({});
      res.status(200).json({tasks});
  } catch (error) {
    res.status(500).json({ msg:"Error", Error: err.message});
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg:"Error", Error: err.message});
  }
};

const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const validId = await taskModel.findOne({id: taskID});
        if(!validId){
            res.status(404).json({msg:`ID not found!`})
        }
        const task = await taskModel.findById({_id:taskID});
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`});
        }
        res.status(200).json({ task }); 
    } catch (error) {
        res.status(500).json({ msg:"Error", Error: error.message});
    }
  
};

const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await taskModel.findOneAndUpdate({_id:taskID}, req.body, {new: true, runValidators:true});
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`});
        }
        res.status(200).json({id:taskID, data:req.body});
    } catch (error) {
        res.status(500).json({ msg:"Error", Error: error.message});
    }
  
};

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params // we're looking for the id in the params /:id
        const task = await taskModel.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(400).json({msg: `No task with id: ${taskID} exists!`});
        }
        res.status(200).json({task}); 
    } catch (error) {
        res.status(500).json({ msg:"Error", Error: error.message});
    }
  
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
