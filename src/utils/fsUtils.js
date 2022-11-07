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
    updateData: async (fileName, id, data) => {
        const oldData = await fsUtils.readData(fileName);
        const updatedDataIndex = oldData.findIndex((item) => item.id === id);
        oldData[updatedDataIndex] = { id, ...data };
        
        const updatedDataJSON = JSON.stringify(oldData);
        const pathFile = `../${fileName}.json`;
        try {
            await fs.writeFile(path.resolve(__dirname, pathFile), updatedDataJSON);
            console.log(`Atualizou registro com id: ${id}`);
            return oldData[updatedDataIndex];
        } catch (error) {
            console.log(`Erro na escrita do arquivo: ${error}`);
        }
    },
};

module.exports = fsUtils;
