import { meModel } from '@/entities/user';
import { useCallOnMount } from '@/shared/libs/hooks';

export const useInitializeGlobalState = (): void => {
  useCallOnMount(meModel.useRequest());
};
