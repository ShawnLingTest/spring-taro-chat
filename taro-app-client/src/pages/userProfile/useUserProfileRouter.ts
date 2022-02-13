import { useRouter } from "@tarojs/taro";

export interface RouterType extends Partial<Record<string, string>>{
  id: string;
}

export function useUserProfileRouter() {
  const { params } = useRouter<RouterType>();
  return params;
}