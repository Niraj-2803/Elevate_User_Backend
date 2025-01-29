const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  // Personal Information
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  primaryPhone: { type: String, required: true },
  otherPhones: [String],
  primaryEmail: { type: String, required: [true, 'Primary email is required'], unique: true },
  otherEmails: [{
    type: String,
    unique: true,   // Ensures other emails are unique
    sparse: true    // Allows null values to be treated as unique
  }],
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  currentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  profilePicture: { type: String },

  // Education
  higherEducation: {
    degree: { type: String, required: true },
    specialization: { type: String, required: true },
    collegeName: { type: String, required: true },
    university: { type: String, required: true },
    startYear: { type: String, required: true },
    endYear: { type: String, required: true },
    studyMode: { type: String, required: true },
    aggregateType: { type: String, required: true },
    aggregateValue: { type: String, required: true }
  },
  
  twelfthStandard: {
    institute: { type: String, required: true },
    specialization: { type: String, required: true },
    board: { type: String, required: true },
    medium: { type: String, required: true },
    aggregateType: { type: String, required: true },
    aggregateValue: { type: String, required: true }
  },
  
  tenthStandard: {
    institute: { type: String, required: true },
    board: { type: String, required: true },
    medium: { type: String, required: true },
    aggregateType: { type: String, required: true },
    aggregateValue: { type: String, required: true }
  },

  // Professional Experience
  experiences: [{
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    industry: { type: String, required: true },
    jobType: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    responsibilities: { type: String, required: true }
  }],

  // Skills
  skills: [String],

  // Projects
  projects: [{
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    role: String,
    link: String
  }],

  // Social Links
  socialLinks: {
    linkedin: String,
    portfolio: String,
    social: String,
    github: String
  },

  // Preferences
  preferences: {
    jobLocation: { type: String, required: true },
    salary: String,
    workSchedule: { type: String, required: true }
  },

  // Additional Information
  additionalInfo: {
    languages: { type: String, required: true },
    relocationWillingness: { type: String, required: true },
    noticePeriod: { type: String, required: true }
  },

  // Legal
  backgroundCheckConsent: { type: Boolean, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
