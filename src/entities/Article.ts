import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Article {
  @PrimaryColumn({ length: 30 })
  slug: string;
  @Column({ length: 50 })
  title: string;
  @Column({ length: 100, nullable: true })
  description?: string;
  @Column({ type: "text" })
  body: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => User)
  author: User;
}

// favoritesCount: {type: Number, default: 0},
// comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
// tagList: [{ type: String }],
// author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
