import { Injectable } from '@angular/core';
import {Headers} from "@angular/http";

@Injectable()
export class ResourceService {

  constructor() { }

  GET_HEADERS(): Headers{
    return new Headers({'Content-Type':'application/json'})
  }
  POST_HEADERS(): Headers{
    return new Headers({'Content-Type':'application/json'})
  }
  PUT_HEADERS(): Headers{
    return new Headers({'Content-Type':'application/json'})
  }
  DELETE_HEADERS(): Headers{
    return new Headers({'Content-Type':'application/json'})
  }

  API_URL:string = "https://ng4-complete-guide-7115b.firebaseio.com/"
}
