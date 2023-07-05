import moment from "moment";

export const formatDate = (date) => {
  const objDate = new Date(date);
  const hours = objDate.getHours();
  const minutes = objDate.getMinutes();
  const day = objDate.getDay();
  const month = objDate.getMonth() + 1;
  const year = objDate.getFullYear();
  const fromNowHours = moment().diff(objDate, "hours");
  const format = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
  if (fromNowHours <= 24) {
    return format;
  } else if (fromNowHours > 24 && year === new Date().getFullYear()) {
    return `${format} ${day}-${month}`;
  } else {
    return `${format} ${moment().diff(objDate, "years")} year ago`;
  }
};
