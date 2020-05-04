const controller = {
    getHealth: (req, res) => {
        try {
            return res.status(200).json({ health: "Up & Running" });            
        } catch (e) {
            return res.status(400).json({ health: "Down" });
        }
    }
}

module.exports = controller;