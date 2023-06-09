const BrowseByServices = require('../services/browse_by.services');

//get all sectors with count of jobs
const getSectorsWithJobCount = async (req, res) => {
  try {
    const sectors = await BrowseByServices.getSectorsWithJobCount();
    res.status(200).json({ sectors });
  } catch (err) {
    res.status(500).json ({ error: error.message});
  }
}

//get all comapnies with count of jobs
const getCompaniesWithJobCount = async (req, res) => {
  try {
    const companies = await BrowseByServices.getCompaniesWithJobCount();
    res.status(200).json({ companies });
  } catch (err) {
    res.status(500).json ({ error: error.message});
  }
}

//export all functions
module.exports = {
  getSectorsWithJobCount,
  getCompaniesWithJobCount,
};