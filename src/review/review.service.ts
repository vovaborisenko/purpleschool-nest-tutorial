import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewDocument, ReviewModel } from './review.model';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewDocument>) {}

  create(dto: CreateReviewDto) {
    return this.reviewModel.create(dto);
  }

  remove(id: string) {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  removeByProductId(productId: string) {
    return this.reviewModel.deleteMany({ product: new Types.ObjectId(productId) }).exec();
  }

  findByProductId(productId: string) {
    return this.reviewModel.find({ product: new Types.ObjectId(productId) }).exec();
  }
}
