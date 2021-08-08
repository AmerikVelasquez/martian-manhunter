let arr = [];

export default function noDuplicate(str) {
    if(arr.includes(str)){
        return false;
    } else {
        arr.push(str);
        return true;
    }
}