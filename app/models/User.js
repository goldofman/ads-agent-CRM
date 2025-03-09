import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },

    image: {
      type: String,
    },

    hasAccess: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    customerId: {
      type: String,
    },

    planId: {
      type: String,
    },

    boards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Board",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
