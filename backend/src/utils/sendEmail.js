import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Read environment variables
dotenv.config();

/**
 * Create transport helper with multiple fallback options for cloud environments like Render
 */
const createTransporter = (user, pass) => {
  const cleanUser = user ? user.trim().replace(/^["']|["']$/g, '') : '';
  const cleanPass = pass ? pass.trim().replace(/^["']|["']$/g, '').replace(/\s+/g, '') : '';

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: cleanUser,
      pass: cleanPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000,
  });
};

/**
 * Send OTP email for password reset.
 */
/**
 * Send internal notification email when a new lead submits the form.
 * Sends to support@productleadership.studio (or INTERNAL_NOTIFICATION_EMAIL env var).
 */
export const sendNewLeadNotification = async (lead) => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const notifyTo = process.env.INTERNAL_NOTIFICATION_EMAIL;

  if (!user || !pass) {
    console.warn('[Lead Email Warning] EMAIL_USER or EMAIL_PASS is missing. Skipping notification.');
    console.log(`[NEW LEAD] Name: ${lead.name}, Email: ${lead.email}, Role: ${lead.role}, Company: ${lead.company}`);
    return;
  }

  const cleanUser = user.trim().replace(/^["']|["']$/g, '');

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #f8fafc; border-radius: 16px;">
      <div style="background: linear-gradient(135deg, #0070f3, #0052eb); border-radius: 12px; padding: 28px; text-align: center; margin-bottom: 24px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">🔔 New Lead Arrived</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 13px;">AI Product Leadership Studio</p>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px;">
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0 0 20px;">A new application has been submitted:</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 120px;">Name</td>
            <td style="padding: 10px 0; color: #1e293b; font-weight: 700;">${lead.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.phone || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Role</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.role || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.company || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.message || 'No message'}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #0070f3;">
          <p style="margin: 0; color: #1e40af; font-size: 13px; font-weight: 600;">
            ⚡ Action Required: Please call and qualify this lead.
          </p>
        </div>
      </div>
      <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 16px;">
        This is an automated notification from AI Product Leadership Studio CRM.
      </p>
    </div>
  `;

  try {
    const transporter = createTransporter(user, pass);
    const info = await transporter.sendMail({
      from: `"Product Leadership Studio" <${cleanUser}>`,
      to: notifyTo,
      subject: `🔔 New Lead: ${lead.name} — ${lead.role || 'Unknown Role'} at ${lead.company || 'Unknown Company'}`,
      html,
    });
    console.log(`[Lead Notification Email Success] Sent to ${notifyTo} | MessageId: ${info.messageId}`);
  } catch (err) {
    console.error(`[Lead Notification Email Error] Failed to send:`, err.message);
    console.log(`[NEW LEAD FALLBACK] Name: ${lead.name}, Email: ${lead.email}, Role: ${lead.role}, Company: ${lead.company}`);
  }
};

/**
 * Send internal notification email when a lead is CONVERTED .
 */
export const sendAdminConversionNotification = async (lead) => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const notifyTo = process.env.INTERNAL_NOTIFICATION_EMAIL;

  if (!user || !pass) return;

  const cleanUser = user.trim().replace(/^["']|["']$/g, '');

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #f8fafc; border-radius: 16px;">
      <div style="background: linear-gradient(135deg, #10b981, #059669); border-radius: 12px; padding: 28px; text-align: center; margin-bottom: 24px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">✅ Lead Converted!</h1>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px;">
        <p style="color: #1e293b; font-size: 15px; font-weight: 600; margin: 0 0 20px;">A lead has just been successfully converted:</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 120px;">Name</td>
            <td style="padding: 10px 0; color: #1e293b; font-weight: 700;">${lead.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.phone || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company</td>
            <td style="padding: 10px 0; color: #1e293b;">${lead.company || 'Not provided'}</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  try {
    const transporter = createTransporter(user, pass);
    await transporter.sendMail({
      from: `"Product Leadership Studio" <${cleanUser}>`,
      to: notifyTo,
      subject: `✅ Lead Converted: ${lead.name}`,
      html,
    });
    console.log(`[Lead Conversion Admin Email Success] Sent to ${notifyTo}`);
  } catch (err) {
    console.error(`[Lead Conversion Admin Email Error] Failed to send:`, err.message);
  }
};

/**
 * Send confirmation/onboarding email to mentee when lead is marked as CONVERTED.
 * Sends from office@pranjalsarkar.com (or falls back to existing Gmail).
 */
export const sendMenteeConfirmation = async (lead) => {
  const user = process.env.EXTERNAL_EMAIL_USER || process.env.EMAIL_USER;
  const pass = process.env.EXTERNAL_EMAIL_PASS || process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.warn('[Mentee Email Warning] Email credentials missing. Skipping confirmation.');
    console.log(`[CONVERTED LEAD] Name: ${lead.name}, Email: ${lead.email}`);
    return;
  }

  const cleanUser = user.trim().replace(/^["']|["']$/g, '');

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #f8fafc; border-radius: 16px;">
      <div style="background: linear-gradient(135deg, #0070f3, #7c3aed); border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 24px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">🎉 Welcome Aboard!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 14px;">AI Product Leadership Studio</p>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px;">
        <p style="color: #1e293b; font-size: 16px; font-weight: 700; margin: 0 0 8px;">Hi ${lead.name},</p>
        <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0 0 20px;">
          Congratulations! Your enrollment in the <strong>AI Product Leadership Studio</strong> is confirmed. 
          We're thrilled to have you join this selective cohort.
        </p>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
          <p style="margin: 0 0 8px; color: #166534; font-size: 14px; font-weight: 700;">✅ What happens next:</p>
          <ul style="margin: 0; padding-left: 20px; color: #15803d; font-size: 13px; line-height: 1.8;">
            <li>You'll be added to our exclusive WhatsApp group</li>
            <li>You'll receive program materials and schedule</li>
            <li>Pranjal will personally welcome you</li>
          </ul>
        </div>
        <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0 0 20px;">
          If you have any questions, reply to this email or reach out to us directly.
        </p>
        <p style="color: #1e293b; font-size: 14px; font-weight: 600; margin: 0;">
          Looking forward to working with you!<br/>
          <span style="color: #64748b; font-weight: 400;">— Team Pranjal Sarkar</span>
        </p>
      </div>
      <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 16px;">
        AI Product Leadership Studio | office@pranjalsarkar.com
      </p>
    </div>
  `;

  try {
    const transporter = createTransporter(user, pass);

    const info = await transporter.sendMail({
      from: `"Pranjal Sarkar — AI Product Leadership Studio" <${cleanUser}>`,
      to: lead.email,
      subject: `🎉 Welcome to AI Product Leadership Studio, ${lead.name}!`,
      html,
    });
    console.log(`[Mentee Confirmation Email Success] Sent to ${lead.email} | MessageId: ${info.messageId}`);
    return true;
  } catch (err) {
    console.error(`[Mentee Confirmation Email Error] Failed to send:`, err.message);
    return false;
  }
};

export const sendOtpEmail = async (toEmail, otp) => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.warn('[OTP Email Warning] EMAIL_USER or EMAIL_PASS is missing in environment variables.');
    console.log(`========================================`);
    console.log(`[LIVE RENDER FALLBACK OTP FOR ${toEmail}]: ${otp}`);
    console.log(`========================================`);
    return;
  }

  const cleanUser = user.trim().replace(/^["']|["']$/g, '');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; background: #f8fafc; border-radius: 16px;">
      <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); border-radius: 12px; padding: 28px; text-align: center; margin-bottom: 24px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">pranjal Electronic World</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">Password Reset OTP</p>
      </div>
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; text-align: center;">
        <p style="color: #475569; font-size: 14px; margin: 0 0 20px;">Use the OTP below to reset your password. It expires in <strong>60 seconds</strong>.</p>
        <div style="background: #f1f5f9; border: 2px dashed #cbd5e1; border-radius: 10px; padding: 18px 32px; display: inline-block; margin: 0 auto 20px;">
          <span style="font-size: 36px; font-weight: 900; letter-spacing: 10px; color: #1e293b; font-family: monospace;">${otp}</span>
        </div>
        <p style="color: #94a3b8; font-size: 12px; margin: 0;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    </div>
  `;

  try {
    const transporter = createTransporter(user, pass);
    const info = await transporter.sendMail({
      from: `"pranjal Electronic World" <${cleanUser}>`,
      to: toEmail,
      subject: `${otp} – Your Password Reset OTP`,
      html,
    });

    console.log(`[OTP Email Success] Sent to ${toEmail} | MessageId: ${info.messageId}`);
  } catch (err) {
    console.error(`[OTP Email Warning] Primary Gmail transport failed (${err.message}). Trying fallback port 587...`);

    try {
      const fallbackTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: cleanUser,
          pass: pass.trim().replace(/^["']|["']$/g, '').replace(/\s+/g, ''),
        },
        tls: { rejectUnauthorized: false },
        connectionTimeout: 10000,
      });

      const fallbackInfo = await fallbackTransporter.sendMail({
        from: `"pranjal Electronic World" <${cleanUser}>`,
        to: toEmail,
        subject: `${otp} – Your Password Reset OTP`,
        html,
      });

      console.log(`[OTP Email Fallback Success] Sent to ${toEmail} | MessageId: ${fallbackInfo.messageId}`);
    } catch (fallbackErr) {
      console.error('[OTP Email Error] All SMTP connections failed on live server:', fallbackErr.message);
      console.log(`========================================`);
      console.log(`[LIVE RENDER FALLBACK OTP FOR ${toEmail}]: ${otp}`);
      console.log(`========================================`);
    }
  }
};
