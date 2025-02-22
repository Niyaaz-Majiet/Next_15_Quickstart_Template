"use server";

export async function login(): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(true);
    } catch (error: any) {
      reject(true);
    }
  });
}

export async function logout(): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(true);
    } catch (error: any) {
      reject(true);
    }
  });
}
