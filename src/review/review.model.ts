import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ProductModel } from '../product/product.model';

export type ReviewDocument = mongoose.HydratedDocument<ReviewModel>;

@Schema({ timestamps: true })
export class ReviewModel {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ProductModel.name })
  product: ProductModel;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
