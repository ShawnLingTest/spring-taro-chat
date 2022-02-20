import { getUserProfile } from "@/service/apis/user";
import { useEffect, useState } from "react";


export function useUserProfile(id: string) {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<API.User.UserProfileResult>({
    id: 0,
    avatarUrl: '',
    nickname: '',
  });

  useEffect(() => {
    let mounted = true;
    getUserProfile(id).then(({ data }) => {
      if (mounted) {
        setUserProfile(data);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) {
        setLoading(false);
      }
    })
  }, [id])

  return {
    loading,
    userProfile
  }
}