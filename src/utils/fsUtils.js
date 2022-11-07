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
    writeNewData: async (fileName, newData) => {
        const pathFile = `../${fileName}.json`;
        try {
            const oldData = await fsUtils.readData(fileName);
            const newId = oldData[oldData.length - 1].id + 1;
            const newDataWithId = { id: newId, ...newData };
            const allData = JSON.stringify(
                [...oldData, newDataWithId],
            );
            await fs.writeFile(path.resolve(__dirname, pathFile), allData); 
            return newDataWithId;
        } catch (erro) {
            console.log(`Error na escrita do arquivo: ${erro}`);
        }
    },
};

module.exports = fsUtils;
