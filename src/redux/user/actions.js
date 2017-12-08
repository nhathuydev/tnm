export function updateUser(data) {
  return {
    type: 'USER_UPDATE',
    payload: data,
  };
}

