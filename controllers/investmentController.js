//const Company = require('../models/company');
const Investment = require('../models/investment');

const investmentController = {

   /* getJobs: async (req, res) => {
        try {
            const jobs = await Job.find().populate('companyId', 'name -_id');
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },*/
    getInvestments: async (req, res) => {
        try {
            const  UserId = req.userId;
            const investments = await Investment.find({userId:UserId}).select('-__v');

            res.status(200).json(investments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createInvestments: async (req, res) => {
        try {
            //const expense = req.body;
            const  userId = req.userId;

            const investment = new Investment({
                ...req.body,
                userId
            });
//console.log(expense);
            // create a new company
           // const newExpense = new Expense(expense);
           // newExpense.userId.push(userId);
            // save the company
            const savedInvestment = await investment.save();

            res.status(201).json({ message: "Investment added successfully", investment: savedInvestment });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteInvestments: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedInvestment = await Investment.findByIdAndDelete(id);

            if (!deletedInvestment) {
                return res.status(404).json({ message: "Transaction not found" });
            }

            res.status(200).json({ message: "Investment deleted successfully" });
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

module.exports = investmentController;