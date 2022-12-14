import User from "./../model/user-model";

//POST - image upload by mimetype
export const imageUpload = async (req, res) => {
  try {
    const data = await new User({
      name: req.body.name,
      image: req.body.image,
    });
    if (req.file) {
      data.image = req.file.path;
    }
    console.log(req.file);
    await data.save();
    if (
      req.file.mimetype === "image/png" ||
      req.file.mimetype === "image/jpg" ||
      req.file.mimetype === "image/jpeg"
    ) {
      return res.status(201).json({
        status: "success",
        Data: data,
      });
    } else {
      return res.send(
        "file format is wrong. file format is only in jpeg,jpg and png"
      );
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fails",
      Message: err.message,
    });
  }
};

//GET - name by special charcter
export const getNameByCharacter = async (req, res) => {
  try {
    const data = await User.find({ name: { $regex: /@/, $options: "i" } });
    // .find({ name: { $regex: /@/} });
    // .find({ name: { $regex: /@/i } });
    res.status(200).json({
      status: "success",
      result: data.length,
      message: "name fetched by special character",
      Data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fails",
      message: err.message,
    });
  }
};
