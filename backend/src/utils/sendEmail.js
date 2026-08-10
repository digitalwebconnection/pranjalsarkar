import logger from './logger.js';

/**
 * Send email using Web3Forms API
 */
const sendWeb3Form = async (accessKey, subject, lead, extraFields = {}) => {
  if (!accessKey) {
    logger.warn('[Web3Forms Warning] Access key is missing.');
    return false;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: subject,
        from_name: "Product Leadership Studio CRM",
        // Lowercase fields tell Web3Forms to use these for the Reply-To header
        name: lead.name,
        email: lead.email,
        
        // Capitalized fields will be rendered neatly in the Web3Forms email table
        "Lead Name": lead.name,
        "Email Address": lead.email,
        "Phone Number": lead.phone || 'Not provided',
        "Company Name": lead.company || 'Not provided',
        ...extraFields
      })
    });

    const data = await response.json();
    if (data.success) {
      logger.info(`[Web3Forms Success] Sent: ${subject}`);
      return true;
    } else {
      logger.error(`[Web3Forms Error] Failed to send:`, data);
      return false;
    }
  } catch (error) {
    logger.error(`[Web3Forms Error] Exception:`, error.message);
    return false;
  }
};

/**
 * Send internal notification email when a new lead submits the form.
 */
export const sendNewLeadNotification = async (lead) => {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY_NEW_LEAD;
  logger.info(`[NEW LEAD] Name: ${lead.name}, Email: ${lead.email}, Role: ${lead.role}, Company: ${lead.company}`);
  
  await sendWeb3Form(accessKey, `🔔 New Lead: ${lead.name} — ${lead.role || 'Unknown'} at ${lead.company || 'Unknown'}`, lead, {
    Role: lead.role || 'Not provided',
    Message: lead.message || 'No message',
    "Action Required": "Please call and qualify this lead."
  });
};

/**
 * Send internal notification email when a lead is CONVERTED.
 */
export const sendAdminConversionNotification = async (lead) => {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY_CONVERTED_LEAD;
  logger.info(`[CONVERTED LEAD] Name: ${lead.name}, Email: ${lead.email}`);

  await sendWeb3Form(accessKey, `✅ Lead Converted: ${lead.name}`, lead, {
    Status: "Successfully Converted!"
  });
};

/**
 * Send confirmation/onboarding email to mentee when lead is marked as CONVERTED.
 * Note: Web3Forms sends to the owner email, not the lead's email, so this will act as another admin notification,
 * or it can be removed if you only use Web3Forms.
 */
export const sendMenteeConfirmation = async (lead) => {
  logger.info(`[Mentee Confirmation] System no longer uses SMTP. Mentee welcome email cannot be directly sent to ${lead.email} via Web3Forms API.`);
  // Since Web3Forms doesn't support sending emails to arbitrary recipients (like the lead),
  // we just log it or we could send another notification to the admin.
  return true;
};
