import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { User } from '../users/User';
import { Category } from '../categories/Category';

export enum PriorityLevel {
  LOW = "Baixa",
  MEDIUM = "Normal",
  HIGH = "Alta",
}

export enum TaskStatus {
  TODO = "Pendente",
  IN_PROGRESS = "Andamento",
  DONE = "Completado",
  ARCHIVED = "Arquivado"
}

@Entity("tarefas")
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  titulo: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({
    type: "enum",
    enum: PriorityLevel,
    default: PriorityLevel.MEDIUM
  })
  prioridade: PriorityLevel;

  @Column({
    type: "enum",
    enum: TaskStatus,
    default: TaskStatus.TODO
  })
  status: TaskStatus;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  @Column()
  usuario: string;

  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn({ name: 'usuario' })
  usuarioDados: User;

  @Column({ nullable: true })
  categoria: string;

  @ManyToOne(() => Category, category => category.tasks, { nullable: true })
  @JoinColumn({ name: 'categoria' })
  categoriaDados: Category;

}