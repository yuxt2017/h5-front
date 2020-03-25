const getters: any = {
  userInfo: (state: any)  => {
    return  {
      userId: state.user.userId,
      name: state.user.name,
    };
  },
  comment: (state: any)  => {
    return  {
      showComment: state.comment.showComment,
      placeholder: state.comment.placeholder,
      moment: state.comment.moment,
    };
  },
};
export default getters;
