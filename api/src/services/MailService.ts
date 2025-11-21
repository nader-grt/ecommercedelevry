import nodemailer, { Transporter } from "nodemailer";
import { mailConfig } from "../../config/mailConfig";

export class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(mailConfig);
  }

  public async sendMail(
    to: string,
    subject: string,
    html: string
  ): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: mailConfig.auth.user,
        to,
        subject,
        html,
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      throw error;
    }
  }
}
