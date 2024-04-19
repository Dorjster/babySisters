import { Request } from "express";
import { AvailableModel, BabysitterModel, InfoModel } from "../../db";
import { passwordHash, getUserByEmail } from "../../utils";
import nodemailer from "nodemailer";

export const createBabysitterQuery = async (req: Request) => {
  const { name, email, phone, password } = req.body;

  try {
    const hash = passwordHash(password);

    const isUserCreated = await getUserByEmail(email);

    if (isUserCreated) {
      throw new Error("Бүртгэлтэй хэрэглэгч байна");
    }
    const info = await InfoModel.create({});
    const available = await AvailableModel.create({});

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "binderiyabilguun@gmail.com",
        pass: "xhzrdhtfhdwxopad",
      },
    });

    const code = Math.floor(1000 + Math.random() * 9000);

    const options = {
      from: "binderiyabilguun@gmail.com",
      to: email,
      subject: "Babysitter",
      text: `${email} хаягт илгээсэн нэг удаагийн нууц үг: ${code}`,
    };

    const user = await BabysitterModel.create({
      name: name,
      email: email,
      phone: phone,
      password: hash,
      info_id: info._id,
      verifyCode: code,
      availableTime: available._id,
    });

    await transporter.sendMail(options);

    return user._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// import nodemailer from "nodemailer";
// import { Request, Response } from "express";
// import { ParentModel } from "../../db";
// import { BabysitterModel } from "../../db";
// import { getUserByEmail } from "../../utils";

// export const forgotPasswordQuery = async (req: Request, res: Response) => {
//   const { email } = req.body;
//   console.log(req.body);

//   const isUser = await getUserByEmail(email);
//   if (!isUser) {
//     throw new Error("Хэрэглэгч олдсонгүй");
//   }

//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "binderiyabilguun@gmail.com",
//       pass: "xhzrdhtfhdwxopad",
//     },
//   });

//   const code = Math.floor(Math.random() * 10000);

//   const options = {
//     from: "binderiyabilguun@gmail.com",
//     to: email,
//     subject: "Babysitter",
//     text: `${email} хаягт илгээсэн нэг удаагийн нууц үг: ${code}`,
//   };

//   await ParentModel.findOneAndUpdate({ email: email }, { $set: { otp: code } });

//   await BabysitterModel.findOneAndUpdate(
//     { email: email },
//     { $set: { otp: code } }
//   );

//   await transporter.sendMail(options);
// };
