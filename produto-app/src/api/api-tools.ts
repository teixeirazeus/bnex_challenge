export function JWTHeader(token: any) {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}
