const fs = require('fs').promises;
const path = require('path');

const fsUtils = {
    readData: async (fileName) => {
        const pathFile = `../${fileName}.json`;
        try {
            const data = await fs.readFile(
                path.resolve(__dirname, pathFile), 
                { encoding: 'utf-8' },
            );
            const dataJSON = JSON.parse(data);
    
            return dataJSON;
        } catch (error) {
            console.log(`Erro na leitura do arquivo: ${error}`);
        }
    },
};

module.exports = fsUtils;
