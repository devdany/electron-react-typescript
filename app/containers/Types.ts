interface User{
  loginUser: {
    accountId: string
    createdAt: string
    updatedAt: string
  }
}

interface UserState {
  user: User
}

export {
  UserState
}