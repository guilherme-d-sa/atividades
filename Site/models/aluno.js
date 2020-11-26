'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
  let Aluno = sequelize.define('Aluno', {
    id: {
      field: 'idProfessor',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      field: 'nomeProfessor',
      type: DataTypes.STRING,
      allowNull: false
    },
    login: {
      field: 'loginProfessor',
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      field: 'senhaProfessor',
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      field: 'telefoneProfessor',
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      field: 'emailProfessor',
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      tableName: 'Professor',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return Aluno;
};
