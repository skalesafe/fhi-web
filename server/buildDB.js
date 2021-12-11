'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const buildData = () => {
  let data;


  const resultGrp1 = excelToJson({
    sourceFile: './xlx/Group1BasketsJanet.xlsx',
    header: {
      // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
      rows: 1 // 2, 3, 4, etc.
    },
    sheets: ['Basket 1', 'Basket 2', 'Basket 3', 'Basket 4', 'Basket 5']
  });

  data = JSON.stringify(resultGrp1, null, 2);
  fs.writeFileSync('./xlx/Group1BasketsJanet.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

  const resultGrp3 = excelToJson({
    sourceFile: './xlx/FinalFHI-Group3.xlsx',
    header: {
      // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
      rows: 1 // 2, 3, 4, etc.
    },
    sheets: ['All Items']
  });

  data = JSON.stringify(resultGrp3, null, 2);

  fs.writeFileSync('./xlx/final-FHI-Group3.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

}

module.exports = {
  buildData
}
