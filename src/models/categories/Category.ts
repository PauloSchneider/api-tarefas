import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Task } from '../tasks/Task';

@Entity("categorias")
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ name: 'data_inativo', type: 'timestamp with time zone', nullable: true })
  dataInativo: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  @OneToMany(() => Task, task => task.categoria)
  tasks: Task[];
}