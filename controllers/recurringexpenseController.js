//const Company = require('../models/company');
const RecurringExpense = require('../models/recurringexpense');

const recurringexpenseController = {

   /* getJobs: async (req, res) => {
        try {
            const jobs = await Job.find().populate('companyId', 'name -_id');
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },*/
    getRecurringExpenses: async (req, res) => {
        try {
            const  UserId  = req.userId;
            const recurringexpenses = await RecurringExpense.find({userId:UserId}).select('-__v');

            res.status(200).json(recurringexpenses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createRecurringExpenses: async (req, res) => {
        try {
            //const expense = req.body;
            const  userId = req.userId;

            const recurringexpense = new RecurringExpense({
                ...req.body,
                userId
            });
//console.log(expense);
            // create a new company
           // const newExpense = new Expense(expense);
           // newExpense.userId.push(userId);
            // save the company
            const savedRecurringExpense = await recurringexpense.save();

            res.status(201).json({ message: "RecurringExpense added successfully", recurringexpense: savedRecurringExpense });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteRecurringExpenses: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedRecurringExpense = await RecurringExpense.findByIdAndDelete(id);

            if (!deletedRecurringExpense) {
                return res.status(404).json({ message: "Transaction not found" });
            }

            res.status(200).json({ message: "Transaction deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    /*createJob: async (req, res) => {
        try {
            const { companyId } = req.params;

            const job = new Job({
                ...req.body,
                companyId
            });

            const savedJob = await job.save();

            const companyToUpdate = await Company.findById(companyId);

            companyToUpdate.jobs.push(savedJob._id);

            await companyToUpdate.save();

            res.status(201).json(savedJob);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getJob: async (req, res) => {
        try {
            const { id } = req.params;

            const job = await Job.findById(id).populate('companyId', 'name -_id');

            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }

            res.status(200).json(job);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateJob: async (req, res) => {
        try {
            const { id } = req.params;

            const updatedJob = await Job.findByIdAndUpdate(id, req.body);

            if (!updatedJob) {
                return res.status(404).json({ message: 'Job not found' });
            }

            res.status(200).json(updatedJob);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteJob: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedJob = await Job.findByIdAndDelete(id);

            if (!deletedJob) {
                return res.status(404).json({ message: 'Job not found' });
            }

            const companyToUpdate = await Company.findById(deletedJob.companyId);

            companyToUpdate.jobs = companyToUpdate.jobs.filter(jobId => jobId.toString() !== id);

            await companyToUpdate.save();

            res.status(200).json(deletedJob);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    applyJob: async (req, res) => {
        try {
            const { id } = req.params;

            const job = await Job.findById(id);

            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }

            job.applicants.push(req.userId);

            await job.save();

            res.status(200).json({ message: 'Applied successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAppliedJobs: async (req, res) => {
        try {
            const jobs = await Job.find({ applicants: req.userId }).populate('companyId', 'name -_id');
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }*/
}

module.exports = recurringexpenseController;