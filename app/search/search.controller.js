module.exports = (req, res, next) => {
    return res.status(200).json({ status: 200, data: [], message: "Succesfully Users Retrieved" });
};
