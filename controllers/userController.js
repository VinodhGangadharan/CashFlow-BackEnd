const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const userController = {
   


    updateUser: async (req, res) => {
        try {
           // const { id } = req.params;
           const userId = req.userId;


            const currency = req.body;

            const userToUpdate =   currency;
          
            
              
            
            const updatedUser = await User.findByIdAndUpdate(userId, userToUpdate, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({ message: "User details updated successfully", user: updatedUser });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }
}

module.exports = userController;