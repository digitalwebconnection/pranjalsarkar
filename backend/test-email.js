import { sendMenteeConfirmation, sendAdminConversionNotification } from './src/utils/sendEmail.js';

const mockLead = {
  name: 'Test User',
  email: 'bhargav.digitalwebconnection@gmail.com', // Sending to the same email to test
  phone: '1234567890',
  company: 'Test Co',
  role: 'Tester'
};

console.log('Testing sendAdminConversionNotification...');
await sendAdminConversionNotification(mockLead);

console.log('Testing sendMenteeConfirmation...');
await sendMenteeConfirmation(mockLead);

console.log('Done.');
