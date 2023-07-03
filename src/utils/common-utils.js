export const formatDate = (date)=>{
    const objDate = new Date(date);
    const hours = objDate.getHours();
    const minutes = objDate.getMinutes();
    return `${hours < 10 ? '0'+ hours: hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}