module.exports = function toReadable(number) {
    
    const unit=['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const dozen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty','ninety']
    number = String(number).split('');
    if(number.length ===1 && Number(number[0]) >0){
        result = unit[number]
        // console.log(result)
        return result
    } else if(number.length ===1 && Number(number[0])=== 0){
        result = 'zero'
        // console.log(result)
        return result
    } else if(number.length === 2 && Number(number[0])=== 1){
        result=teen[number[1]]
        // console.log(result)
        return result
    } else if(number.length === 2 && Number(number[0])>=2){
        result = dozen[number[0]] +" "+ unit[number[1]]
        // console.log(result)
        return result
    } else if(number.length === 3 && Number(number[1])>1){
        result = unit[number[0]]+' hundred '+dozen[number[1]] +" "+ unit[number[2]]
        // console.log(result)
        return result
    } else if(number.length === 3 && Number(number[1])=== 1){
        result = unit[number[0]]+' hundred '+teen[number[2]]
        // console.log(result)
        return result
    } else if(number.length === 3 && Number(number[1])===0){
        result = unit[number[0]]+' hundred '+ unit[number[2]]
        return result
    }

}
// toReadable (105)