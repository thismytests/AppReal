import { LoggerService } from "@nestjs/common";


const dateFormat = (): string => {
  const date = new Date();
  const separator = ":";
  const params: any = [
    (`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];


  return params.map((item) => {
    return item + separator;
  });
};

export class AppLogger implements LoggerService {
  log(message: any) {
    /* your implementation */
    // console.log(`${dateFormat()} : `, message);
  }

  error(message: string, trace: string) {
    /* your implementation */
  }

  warn(message: string) {
    /* your implementation */
  }

  debug(message: string) {
    /* your implementation */
  }

  verbose(message: string) {
    /* your implementation */
  }
}