import { http } from '../../utils/http';
import { TLogin } from '../typings/API';
import { DUser } from '../typings/DTO';

export function login(data: TLogin): Promise<DUser> {
  return http.post('/login', data);
}
