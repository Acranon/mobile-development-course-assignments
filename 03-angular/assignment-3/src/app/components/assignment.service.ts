import { Injectable }           from '@angular/core';
import { Headers, Http }        from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Assignment }     from './student.component';

@Injectable()

export class AssignmentService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private assignmentUrl = 'http://localhost:3000/assignments';

    constructor(private http: Http) { }

    getAssignments(): Promise<Assignment[]> {
        return this.http.get(this.assignmentUrl)
                   .toPromise()
                   .then(response => response.json().data as Assignment[])
                   .catch(this.handleError);
    }

    create(name: string, scoredPoints: number, possiblePoints: number): Promise<Assignment> {
        return this.http.post(this.assignmentUrl, JSON.stringify({name: name}), {headers:this.headers})
            .toPromise()
            .then(res => res.json().data)
    }

    delete(id: number): Promise<void> {
        const url = `${this.assignmentUrl}/${id}`;
        return this.http.delete(url, {headers:this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}