import SibApiV3Sdk from 'sib-api-v3-sdk';
import logger from './logger.js';

// Brevo client for New Lead notifications (BREVO_API_KEY_NEW_LEAD)
const newLeadClient = new SibApiV3Sdk.ApiClient();
newLeadClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY_NEW_LEAD;
const newLeadApi = new SibApiV3Sdk.TransactionalEmailsApi(newLeadClient);

// Brevo client for Converted Lead / Mentee confirmation (BREVO_API_KEY_)
const convertedClient = new SibApiV3Sdk.ApiClient();
convertedClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY_;
const convertedApi = new SibApiV3Sdk.TransactionalEmailsApi(convertedClient);

/**
 * Send internal notification email when a new lead submits the form.
 * Uses BREVO_API_KEY_NEW_LEAD
 */
export const sendNewLeadNotification = async (lead) => {
  try {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = `🔔 New Lead: ${lead.name}`;
    sendSmtpEmail.sender = { name: 'CRM System', email: 'office@pranjalsarkar.com' };
    sendSmtpEmail.to = [{ email: 'vaibhavdigitalwebconnection@gmail.com', name: 'Support' }];
    sendSmtpEmail.htmlContent = `
        <h2>New Lead Application</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Role:</strong> ${lead.role}</p>
        <p><strong>Company:</strong> ${lead.company}</p>
        <p><strong>Message/LinkedIn:</strong> ${lead.message}</p>
    `;

    await newLeadApi.sendTransacEmail(sendSmtpEmail);
    logger.info('[Brevo Success] New lead notification sent to Support');
    return true;
  } catch (error) {
    logger.error('[Brevo Error] New lead notification failed:', error.response?.text || error.message);
    return false;
  }
};

/**
 * Send HTML confirmation email to mentee when lead is marked as CONVERTED.
 * Uses BREVO_API_KEY_
 */
export const sendMenteeConfirmation = async (lead) => {
  try {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = '🎊 Welcome Aboard! AI Product Leadership Studio';
    sendSmtpEmail.sender = { name: 'Team Pranjal Sarkar', email: 'office@pranjalsarkar.com' };
    sendSmtpEmail.to = [{ email: lead.email, name: lead.name }];
    sendSmtpEmail.htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <!-- Header Gradient Banner -->
          <div style="background: linear-gradient(to right, #0088ff, #8800ff); padding: 40px 20px; border-radius: 12px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">🎊 Welcome Aboard!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">AI Product Leadership Studio</p>
          </div>
          
          <!-- Body Content -->
          <div style="padding: 30px 20px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; margin-bottom: 20px;"><strong>Hi ${lead.name},</strong></p>
            
            <p style="font-size: 16px; line-height: 1.5; color: #555;">
              Congratulations! Your enrollment in the <strong>AI Product Leadership Studio</strong> is confirmed. We're thrilled to have you join this selective cohort.
            </p>
            
            <!-- What happens next box -->
            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #166534; font-size: 16px; display: flex; align-items: center; gap: 8px;">
                ✅ What happens next:
              </h3>
              <ul style="color: #166534; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>You'll be added to our exclusive WhatsApp group</li>
                <li>You'll receive program materials and schedule</li>
                <li>Pranjal will personally welcome you</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.5; color: #555;">
              If you have any questions, reply to this email or reach out to us directly.
            </p>
            
            <p style="font-size: 16px; margin-top: 30px;">
              <strong>Looking forward to working with you!</strong><br/>
              <span style="color: #777;">— Team Pranjal Sarkar</span>
            </p>
          </div>
        </div>
      `;

    await convertedApi.sendTransacEmail(sendSmtpEmail);
    logger.info(`[Brevo Success] Mentee confirmation sent to ${lead.email}`);
    return true;
  } catch (error) {
    logger.error('[Brevo Error] Mentee confirmation failed:', error.response?.text || error.message);
    return false;
  }
};
