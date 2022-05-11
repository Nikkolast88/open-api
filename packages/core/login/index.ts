import HttpClient from '../../utils/HttpClient';
import { TLogin } from '../typings/API';
import { DUser } from '../typings/DTO';

export function login(data: TLogin) {
  return HttpClient.request<DUser>({
    path: '/login/login',
    format: 'blob',
  });
}
