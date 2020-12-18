const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route POST api/items
// @desc Create an Item
// @access Public (normally private)
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public (normally private)
router.delete("/:id", (req, res) => {
  // req.params.id gets the value directly from the url
  // findById just grabs it, it doesn't delte it yet
  Item.findById(req.params.id)
    // item.remove will remove it
    .then((item) => item.remove().then(() => res.json({ success: true })))
    // .catch will be thrown if the id doens't exist. throw a 404. (we're just saying success: false for an error message)
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
