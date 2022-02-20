declare namespace API {
  namespace Common {
    type PageParams<T = any> = {
      pageSize: number;
      current: number;
    } & {
      [P in keyof T]: T[P];
    }

    type PageResult<T> = {
      total: number;
      list: T[];
    };
  }
}
