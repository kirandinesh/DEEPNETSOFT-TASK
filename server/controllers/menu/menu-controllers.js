const Menu = require("../../models/menu.model");

exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMenu = async (req, res) => {
  const { name, description } = req.body;
  const menu = new Menu({ name, description, items: [] });

  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addItemToMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Menu not found" });

    const { name, description, price } = req.body;
    menu.items.push({ name, description, price });

    const updatedMenu = await menu.save();
    res.status(201).json(updatedMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
