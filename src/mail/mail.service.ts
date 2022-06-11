import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserCreateAccount(
    firstName: string,
    lastName: string,
    email: string,
  ) {
    await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Medsirat! Ragistration',
      template: 'confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: `${firstName} ${lastName}`,
      },
    });
  }
}
