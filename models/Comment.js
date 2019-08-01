import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  //   video ID를 가져오는 방법
  //   , video: {
  // 	  type: mongoose.Schema.Types.ObjectId,
  // 	  ref: "Video"
  //   }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
