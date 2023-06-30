import dayjs from "dayjs";

export const getDayjs = (date: Date) =>
  dayjs(date).format("YYYY-MM-DD HH:mm:ss");
