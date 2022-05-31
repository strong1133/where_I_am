
/**
     * Debug Logger
     * @param {String} 이름
     * @param {String} 종류 (함수면 험수)
     * @param {String} 진입인지 종료인지
     * @param {String}  추가로 띄우고 싶은 내용
     * @returns {void}  
     */
const Logger = (name, tpye, entry, content )=>{

    console.log(

        `:: < DEBUG > ::  ${name} (${tpye})  >> ${entry? 'ENTRY' : 'FIN'}   @@`, content
    )

}

module.exports = Logger;