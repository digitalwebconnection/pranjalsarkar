import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    // Form submission data
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    role: {
      type: String,
      trim: true,
      default: '',
    },
    company: {
      type: String,
      trim: true,
      default: '',
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },

    // Funnel status
    status: {
      type: String,
      enum: ['NEW', 'QUALIFIED', 'NOT_QUALIFIED', 'OPPORTUNITY', 'CONVERTED'],
      default: 'NEW',
    },

    // Admin notes
    notes: {
      type: String,
      default: '',
    },

    // Zoom meeting details
    zoomLink: {
      type: String,
      default: '',
    },
    zoomDate: {
      type: Date,
      default: null,
    },

    // Payment tracking
    paymentStatus: {
      type: String,
      enum: ['PENDING', 'RECEIVED'],
      default: 'PENDING',
    },

    // Onboarding flags
    whatsappAdded: {
      type: Boolean,
      default: false,
    },
    confirmationEmailSent: {
      type: Boolean,
      default: false,
    },

    // Status change history
    statusHistory: [
      {
        from: String,
        to: String,
        changedAt: {
          type: Date,
          default: Date.now,
        },
        note: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Index for efficient querying
leadSchema.index({ status: 1, createdAt: -1 });
leadSchema.index({ email: 1 });

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
