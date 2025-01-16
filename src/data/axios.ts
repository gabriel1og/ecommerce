import axios, { AxiosResponse } from "axios";

export interface IUser {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  type: "admin" | "user";
}

const instance = axios.create({
  baseURL: "http://localhost:8800/",
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

const User = {
  getUsers: (): Promise<IUser[]> => requests.get("users"),
};

export default User;
