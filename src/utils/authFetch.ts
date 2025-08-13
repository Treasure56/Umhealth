import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { appFetch, AppFetchAs, AppFetchParams, AppRequestInit } from "./appFetch";
import { paths } from "./paths";
import { appCookies } from "@/constants/cookies";

async function authFetch(init: AppFetchParams, fetcAs: AppFetchAs = "json") {
  const { get } = await cookies();
  const token = get(appCookies.userToken)?.value || null;
  if (!token) redirect(paths.login);

  const res = await appFetch({
    ...init,
    headers: {
      ...init.headers,
      Authorization: `Token ${token}`,
    }
  }, fetcAs);

  // console.log((await headers()).get("X-Pathname"), "is");

  // if (res && res.status === 401) redirect(paths.login)
  return res;
}


function get(url: string, init?: AppRequestInit) {
  return authFetch({ url, method: "GET", ...init });
}

function post<K>(url: string, body: K, init?: AppRequestInit) {
  return authFetch({ url, method: "POST", body: JSON.stringify(body), ...init });
}

function patch<K>(url: string, body: K, init?: AppRequestInit) {
  return authFetch({ url, method: "PATCH", body: JSON.stringify(body), ...init });
}

function put<K>(url: string, body: K, init?: AppRequestInit) {
  return authFetch({ url, method: "PUT", body: JSON.stringify(body), ...init });
}

function del<K>(url: string, body?: K, init?: AppRequestInit) {
  return authFetch({ url, method: "DELETE", body: JSON.stringify(body), ...init });
}

function postForm(url: string, body: BodyInit, init?: AppRequestInit) {
  return authFetch({ url, method: "POST", body, ...init }, "formdata");
}

function patchForm(url: string, body: BodyInit, init?: AppRequestInit) {
  return authFetch({ url, method: "PATCH", body, ...init }, "formdata");
}

function putForm(url: string, body: BodyInit, init?: AppRequestInit) {
  return authFetch({ url, method: "PUT", body, ...init }, "formdata");
}


export const AuthFetch = {
  get,
  post,
  put,
  del,
  patch,
  postForm,
  patchForm,
  putForm,
};