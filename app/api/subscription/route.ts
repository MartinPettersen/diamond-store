/*
const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const userEmail = req.body.text;
    const transporter = await nodemailer.createTransport({
        host: process.env.HOST,
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: "Nyhetsbrev subscription",
        text: "Bekreftelse på at du har meldt deg på nyhetsbrevet. Dette er et portfolio project og det kommer ikke flere mail til denne epost adressen"
    };

    await transporter.sendMail(mailOptions, function (error: any, res: any){
        if (error){
            console.log(error);
        } else {
            res.status(200).json({status: "email sent"});
        }
    });

}*/

import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  return NextResponse.json({ message: 'Thank you for subscribing' })
}