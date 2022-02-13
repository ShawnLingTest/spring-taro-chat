import { useSystemInfo } from "@/hooks/useSystemInfo";
import { useUserProfile } from "@/hooks/useUserProfile";
import { ScrollView } from "@tarojs/components";
import { useUserProfileRouter } from "./useUserProfileRouter";

const UserProfile = () => {
  const { windowHeight } = useSystemInfo();
  const { id } = useUserProfileRouter();
  const { userProfile, loading } = useUserProfile(id);
  return <ScrollView scrollY style={{ height: windowHeight }}></ScrollView>;
};

export default UserProfile;
