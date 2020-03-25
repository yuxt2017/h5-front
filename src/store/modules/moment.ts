const comment = {
    state: {
        count: 0,
        showComment: false,
        placeholder: '评价',
        moment: null,
    },

    mutations: {
        updateCommentDisplay(state: any, show: any) {
            state.showComment = show;
        },
        updateCommentPlaceholder(state: any, placeholder: string) {
            state.placeholder = placeholder;
        },
        updateMoment(state: any, moment: any) {
            state.moment = moment;
        },
    },
};

export default comment;

