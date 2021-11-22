import { RequestModel } from './RequestModel';

export default class RequestRepo {
  create(path: string, ip: string) {
    const newRequest = new RequestModel({
      name: path,
      date: new Date(),
      ip: ip
    });

    return new Promise((resolve, reject) => {
      newRequest.save(function (err: any, request: any) {
        if (err) {
          reject(err);
        }
        resolve(request);
      });
    });
  }

  list(Model: any) {
    const params = {
      limit: 10
    };
    return new Promise((resolve, reject) => {
      Model.find({})
        .limit(params.limit)
        .exec(function (err: any, data: any) {
          if (err) reject(err);
          resolve(data);
        });
    });
  }
}
