// 500 ms to do an API fetch
const FETCH_DURATION = 500;

export const mimicAsyncFetch = (result) => {
    return new Promise((resolve) => setTimeout(() => resolve(result), FETCH_DURATION));
};
