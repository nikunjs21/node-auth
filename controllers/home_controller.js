import User from "../models/user.js";
import Blog from "../models/blog.js";

export const home = async (req, res) => {
  // const user = new User({
  //     name: "Jeff",
  //     email: "abc@gmail.com",
  //     password: "asd"
  // })
  // user.bark()
  // await user.save()
  // user.bark()

  // const users = await User.find({ name: /ff/g });
  // console.log(users);

  // res.send("Hello World!");
  console.log(res);
  res.render("home", {
    title: "Home",
  });
  // res.render()
};

export const hello = async (req, res) => {
  if (req.cookies && !req.cookies["user_id"]) {
    res.redirect("/signin");
    return;
  }
  // const blog = new Blog({
  //   title: "new 1",
  //   author: "abc",
  //   body: "asdasd",
  //   comments: [
  //     {
  //       body: "nice",
  //       date: Date.now(),
  //     },
  //     {
  //       body: "nice1",
  //       date: Date.now(),
  //     },
  //   ],
  //   hidden: false,
  //   meta: {
  //     votes: 10,
  //     favs: 11,
  //   },
  // });

  // await blog.save();
  res.send("Hello");
};

export default { home, hello };
