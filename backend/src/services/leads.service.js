import Lead from '../models/Lead.js';

/**
 * Leads service — business logic layer.
 * Controllers delegate to these functions for testability.
 */

export const findRecentLeadByEmail = async (email) => {
  return Lead.findOne({
    email: email.toLowerCase(),
    createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  });
};

export const createLead = async (data) => {
  return Lead.create(data);
};

export const getLeadStats = async () => {
  return Lead.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]);
};

export const findLeadById = async (id) => {
  return Lead.findById(id);
};

export const deleteLeadById = async (id) => {
  return Lead.findByIdAndDelete(id);
};
