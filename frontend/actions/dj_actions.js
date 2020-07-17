import * as DjApiUtil from '../util/dj_api_util';

export const RECEIVE_DJS = 'RECEIVE_DJS';
export const RECEIVE_DJ = 'RECEIVE_DJ';

export const receiveDjs = djs => ({
  type: RECEIVE_DJS,
  djs
});

export const receiveDj = dj => ({
  type: RECEIVE_DJ,
  dj
});

export const fetchDjs = djs => dispatch => (
  DjApiUtil.fetchDjs(djs)
    .then(djs => dispatch(receiveDjs(djs)))
)

export const fetchDj = djId => dispatch => (
  DjApiUtil.fetchDj(djId)
    .then(dj => dispatch(receiveDj(dj)))
);

export const createDj = dj => dispatch => (
  DjApiUtil.createDj(dj)
    .then(dj => dispatch(reveiveDj(dj)))
);

export const updateDj = dj => dispatch => (
  DjApiUtil.updateDj(dj)
    .then(dj => dispatch(reveiveDj(dj)))
);