import { Request } from "express";
import { ParentModel } from "../../db";
import { passwordHash, getUserByEmail } from "../../utils";
import nodemailer from "nodemailer";

export const createParentQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;

    const hash = passwordHash(password);

    const isUserCreated = await getUserByEmail(email);

    if (isUserCreated) {
      throw new Error("Бүртгэлтэй хэрэглэгч байна");
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

    const code = Math.floor(1000 + Math.random() * 9000);

    const options = {
      from: "binderiyabilguun@gmail.com",
      to: email,
      subject: "Babysitter",
      text: `${email} хаягт илгээсэн нэг удаагийн нууц үг: ${code}`,
    };

    const user = await ParentModel.create({
      name: name,
      email: email,
      phone: phone,
      password: hash,
      verifyCode: code,
    });

    await transporter.sendMail(options);

    return user._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
