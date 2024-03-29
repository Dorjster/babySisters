import nodemailer from "nodemailer";
import { Request, Response } from "express";
import { ParentModel } from "../../db";
import { BabysitterModel } from "../../db";
import { getUserByEmail } from "../../utils";

export const forgotPasswordQuery = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(req.body);

  const isUser = await getUserByEmail(email);
  if (!isUser) {
    throw new Error("Email not found");
  }

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

  const code = Math.floor(Math.random() * 10000);

  const options = {
    from: "binderiyabilguun@gmail.com",
    to: email,
    subject: "Hello",
    text: `Verifcation for ${email}
    Your code is: ${code}`,
  };

  await ParentModel.findOneAndUpdate({ email: email }, { $set: { otp: code } });

  await BabysitterModel.findOneAndUpdate(
    { email: email },
    { $set: { otp: code } }
  );

  await transporter.sendMail(options);
};
