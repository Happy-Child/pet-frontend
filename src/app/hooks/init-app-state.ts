import { sessionModel } from '@/entities/session';
import { useCallOnMount } from '@/shared/libs/hooks';

export const useInitAppState = (): void => {
  useCallOnMount(sessionModel.useRequestHandler());
};
