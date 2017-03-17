import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Assignment } from './assignment';

@Injectable()

export class AssignmentService {
    readonly url: string = 'http://localhost:3000/assignments';

    constructor(private http: Http) { }


    add(assignment: Assignment): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, assignment).toPromise();
    }

    delete(assignment: Assignment) {
        let deleteUrl = `${this.url}/${assignment.id}`

        return this.http.delete(deleteUrl).toPromise();
    }

    getAll(): Promise<Assignment[]> {
        return this.http.get(this.url).toPromise().then(
            response => {
                let responseObj = response.json();
                let responseArray: Assignment[]=[];

                for (let assignment of responseObj) {
                    responseArray.push(new Assignment(assignment.name, assignment.points, assignment.points_possible, assignment.id))
                }

                return responseArray;
            }
        )
        .catch(error => console.log(error))
    }
}
