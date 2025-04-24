import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTarefas1745455646584 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tarefas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'titulo',
            type: 'varchar'
          },
          {
            name: 'descricao',
            type: 'text'
          },
          {
            name: 'prioridade',
            type: 'enum',
            enum: ['Baixa', 'Normal', 'Alta'],
            enumName: 'tarefas_status_enum',
            default: "'Normal'"
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['Pendente', 'Andamento', 'Completado', 'Arquivado'],
            enumName: 'tarefas_prioridade_enum',
            default: "'Pendente'"
          },
          {
            name: 'usuario',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'categoria',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
        ],
        foreignKeys: [
          {
            name: 'TarefasUsuario',
            columnNames: ['usuario'],
            referencedTableName: 'usuarios',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
          },
          {
            name: 'TarefasCategoria',
            columnNames: ['categoria'],
            referencedTableName: 'categorias',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
