import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchGoal, fetchNickname, changeUserInfo } from '../api/auth.api';
import { ChangeUserInfoProps } from '../models/user.model';
import { queryClient } from '../api/queryClient';

export const useUserInfo = () => {
  const { data: nickname, isLoading: isNicknameLoaidng } = useQuery({
    queryKey: ['userInfo', 'nickname'],
    queryFn: fetchNickname,
  });

  const { data: goal, isLoading: isGoalLoading } = useQuery({
    queryKey: ['userInfo', 'goal'],
    queryFn: fetchGoal,
  });

  const { mutate: changeProfile } = useMutation({
    mutationKey: ['userInfo'],
    mutationFn: (data: ChangeUserInfoProps) => changeUserInfo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
  });

  return {
    nickname: nickname ? nickname.userNickname : null,
    goal: goal ? goal.userGoal : null,
    isUserInfoLoading: isNicknameLoaidng || isGoalLoading,
    changeProfile,
  };
};
