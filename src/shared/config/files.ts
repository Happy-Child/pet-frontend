import bytes from 'bytes';
import { FILE } from '@/shared/constants';

export const MAX_SIZE_TO_UPLOAD = bytes('1MB') * 2;

export const ALLOWED_EXTS_TO_UPLOAD = [FILE.EXTS.PNG, FILE.EXTS.JPG];
