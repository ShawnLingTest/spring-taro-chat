declare namespace API {
  namespace Common {
    type PageParams<T = any> = {
      pageSize: number;
      current: number;
    } & T;

    type PageResult<T> = {
      total: number;
      data: T[];
    };
  }
}
