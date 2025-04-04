import mongoose from 'mongoose';
import type { CategoryDocument } from './Category';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  titleInHindi: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  readingTime: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true,
  },
  tags: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Story = mongoose.models.Story || mongoose.model('Story', storySchema);

export default Story;
export type StoryDocument = mongoose.Document & {
  title: string;
  titleInHindi: string;
  content: string;
  author?: string;
  category: CategoryDocument['_id'];
  slug: string;
  readingTime: number;
  difficulty: Difficulty;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  views: number;
}; 