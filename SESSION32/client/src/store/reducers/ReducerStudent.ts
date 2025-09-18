const initialState = {
  users: [
    {
      id: 1,
      name: "Minh Thu",
    },
    {
      id: 2,
      name: "Minh Huyền",
    },
    {
      id: 3,
      name: "Lan Hồng",
    },
  ],
};
export const reducerStudents = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "EDIT":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
};
