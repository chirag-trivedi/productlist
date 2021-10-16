import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('http://localhost:8700/products')
        .then(response => response.json(),);
    yield put({ type: "PRODUCTS_RECEIVED", json: json, });
}

function* actionWatcher() {
    yield takeLatest('GET_PRODUCTS', fetchNews);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]

    )
}