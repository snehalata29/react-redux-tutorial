import { createAction } from 'redux-actions';
const PREFIX = 'App'
const id =2;
export const updateDocTypeStepId =createAction(`${PREFIX}/UPDATE_DOC_TYPE_STEP_ID`,id => {
    return {
        type: 'UPDATE_DOC_TYPE_STEP_ID',
        currentDocTypeStepId: id
    };
});

export const appAddDocType = createAction(`${PREFIX}/ADD_DOC_TYPE`, payload => ({
    ...payload,
    id: 3,
    fileList: [],
}));