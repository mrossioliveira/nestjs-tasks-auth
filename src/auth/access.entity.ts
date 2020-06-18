import { BaseEntity, PrimaryColumn, Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class Access extends BaseEntity {
  @PrimaryColumn()
  username: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'refresh_token' })
  refreshToken: string;
}
