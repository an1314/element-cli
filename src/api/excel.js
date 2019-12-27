import axios from 'axios'
import XLSX from 'xlsx'

export function getExcelData(fileName){
    return new Promise((req, rej) => {
        axios.get('http://192.168.32.128:8090/files/'+fileName, {
            responseType: 'arraybuffer'
        })
        .then(res => {
            var data = new Uint8Array(res.data)
            var workbook = XLSX.read(data, {type: 'array'})
            var workSheet = workbook.Sheets[workbook.SheetNames];
            console.log(XLSX.utils.sheet_to_json(workSheet))
        })
    })
   
}