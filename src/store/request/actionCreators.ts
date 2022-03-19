import axios from "axios";

export const GET = (url: string, dispatch: any, requestAction: any) =>
  new Promise<any>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.get(url)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as any);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as any);
        });
  });

export const POST = (url: string, data: any, dispatch: any, requestAction: any) =>
  new Promise<any>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.post(url, data)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as any);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as any);
        });
  });

export const PUT = (url: string, data: any, dispatch: any, requestAction: any) =>
  new Promise<any>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.put(url, data)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as any);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as any);
        });
  });

export const PATCH = (url: string, data: any, dispatch: any, requestAction: any) =>
  new Promise<any>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.patch(url, data)
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as any);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as any);
        });
  });

export const SEQUENTIAL = (actions: any[], dispatch: any, requestAction: any) => {
  return new Promise<any>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }));
    let errorFlag = false;
    (actions.reduce(
      (acc: Promise<any>, next: () => Promise<any>) => {
        return acc.then((accResult: string | any[]) => {
          return dispatch(next())
            .then((nextResult: any) => {
              return accResult.concat(nextResult)
            })
            .catch((error: any) => {
              errorFlag = true
              return accResult.concat(error)
            })
        })
      }, Promise.resolve([])))
      .then((result: any) => {
        if (!errorFlag) {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(result)
        } else {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(result)
        }
      })

  })
}

export const PARALLEL = (actions: any[], dispatch: any, requestAction: any) => {
  dispatch(requestAction({ status: 'pending', value: true }))
  return Promise.all<any>(
    actions.map((action) => dispatch(action()))
  )
    .then(results => {
      dispatch(requestAction({ status: 'suceeded', value: true }))
      dispatch(requestAction({ status: 'failed', value: false }))
      dispatch(requestAction({ status: 'pending', value: false }))
      return results
    })
    .catch(error => {
      dispatch(requestAction({ status: 'suceeded', value: false }))
      dispatch(requestAction({ status: 'failed', value: true }))
      dispatch(requestAction({ status: 'pending', value: false }))
      return error
    });
}
export const SUCCESS = (message?: string) =>
  new Promise<any>((resolve) => {
    resolve({ message })
  });

export const ERROR = (message?: string) =>
  new Promise<any>((resolve, reject) => {
    reject({ message })
  });

