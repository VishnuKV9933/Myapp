const bcrypt = require("bcrypt");
const UserModel = require("../Model/UserModel");

const UserSignup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      const newUser = new UserModel({
        username: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
      newUser.save().then((user) => {
        res.status(200).json({ user: user, message: false });
      });
    } else {
      res.json({ user: false, message: "Email already registered" });
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
const Signin = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      res.json({ user: false });
    } else {
      const validpassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validpassword) {
        res.status(200).json({ user: true, password: false });
      } else {
        res.status(200).json({ user: true, password: true });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const changepassword =async(req,res)=>{
  try {
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
     console.log("1");
      res.json({user:false})
    } else {
      console.log("2");
      const user= await UserModel.updateOne({email: req.body.email},{password:hashPassword})

      res.json({ user: true});
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
module.exports = { UserSignup, Signin ,changepassword};
