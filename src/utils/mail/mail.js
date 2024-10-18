import { createTransport } from "nodemailer";
import { renderFile } from "ejs";
import { join } from "path";
import { USER_MAIL, PASS_MAIL } from "../env.js";

const transporter = createTransport({
    service: "Zoho",
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
        user: USER_MAIL,
        pass: PASS_MAIL,
    },
    requireTLS: true,
});

const send = async ({ to, subject, content }) => {
    const result = await transporter.sendMail({
        from: "sandervdb@zohomail.com",
        to,
        subject,
        html: content,
    });

    console.log("Send Email to", to);

    return result;
};

const render = async (template, data) => {
    const content = await renderFile(
        join(__dirname, `templates/${template}`),
        data
    );

    return content;
};

export default {
    send,
    render,
};
