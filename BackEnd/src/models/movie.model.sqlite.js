import sequelize from "../database/config.js";
import {
    DataTypes
} from sequelize;

const movie = sequelize.define("Movie", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    },

    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    lancamento: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    diretor: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    temas_ambientais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


export default movie;