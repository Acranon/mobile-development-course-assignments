import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
})
export class StudentComponent {
    studentName: string;
    studentEmail: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    iPercent: number;
    iGrade: string;
    grade: string;
    iName: string;
    iScoredPoints: number;
    iPossiblePoints: number;
    assignmentList: Assignment[];

    constructor() {
        this.studentName = "Bob Smith";
        this.studentEmail = "bobsmith@gmail.com";
        this.pointsScored = 0;
        this.pointsPossible = 0;
        this.percent = 0;
        this.grade = 'N/A';
        this.iGrade = 'N/A';
        this.assignmentList = [];
    }

    addAssignment(): void {
        let assignment: Assignment;

        assignment = {
            name: this.iName,
            pointsScored: this.iScoredPoints,
            pointsPossible: this.iPossiblePoints,
            percent: this.iScoredPoints / this.iPossiblePoints,
            iGrade: this.iGrade
        }
        this.iPercent = assignment.percent;
        assignment.iGrade = this.getIGrade();
        this.assignmentList.push(assignment); 
        this.updatePerformance();
    }

    updatePerformance() {
        this.pointsPossible = this.assignmentList.reduce(this.addPointsPossible, 0);
        this.pointsScored = this.assignmentList.reduce(this.addPointsScored, 0);
        this.percent = this.pointsScored / this.pointsPossible;
        this.grade = this.getGrade();
    }

    deleteAssignment(num: number): void {
        this.assignmentList.splice(num, 1);
        this.updatePerformance();
    }


    private getGrade(): string {
        if (this.percent >= 0.9)
            return 'A';
        else if (this.percent >= .8)
            return 'B';
        else if (this.percent >= .7)
            return 'C';
        else if (this.percent >= .6)
            return 'D';
        else
            return 'F';
    }

    private getIGrade(): string {
        if (this.iPercent >= 0.9)
            return 'A';
        else if (this.iPercent >= .8)
            return 'B';
        else if (this.iPercent >= .7)
            return 'C';
        else if (this.iPercent >= .6)
            return 'D';
        else
            return 'F';
    }

    private addPointsPossible(tally: number, assignment: Assignment) {
        return tally + assignment.pointsPossible;
    }

    private addPointsScored(tally: number, assignment: Assignment) {
        return tally + assignment.pointsScored;
    }
}

interface Assignment {
    name: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    iGrade: string;
}