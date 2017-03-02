import { Component, OnInit } from '@angular/core';

import { AssignmentService } from './assignment.service'

@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
    providers: [ AssignmentService ]
})
export class StudentComponent implements OnInit {
    id: number;
    studentName: string;
    studentEmail: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    grade: string;
    iName: string;
    iScoredPoints: number;
    iPossiblePoints: number;
    assignmentList: Assignment[];
    selectedAssignment: Assignment;
    assignmentService: AssignmentService;

    constructor() {
        this.studentName = "Bob Smith";
        this.studentEmail = "bobsmith@gmail.com"
        this.pointsScored = 0;
        this.pointsPossible = 0;
        this.percent = 0;
        this.grade = 'N/A';
        this.assignmentList = [];
    }

    ngOnInit(): void {
        this.populateAssignment();
    }
    populateAssignment(): void {
        this.assignmentService.getAssignments().then(assignmentList => this.assignmentList = assignmentList);
        this.updatePerformance();
    }

    addAssignment(name: string): void {
        let assignment: Assignment;
        let assignmentPercent = this.iScoredPoints / this.iPossiblePoints;

        assignment = {
            id: this.id,
            name: this.iName,
            pointsScored: this.iScoredPoints,
            pointsPossible: this.iPossiblePoints,
            percent: assignmentPercent,
            iGrade: this.getGrade(assignmentPercent)
        }

        this.assignmentList.push(assignment);
        this.updatePerformance();
    }

    deleteAssignment(assignment: Assignment): void {
        this.assignmentService
            .delete(assignment.id)
            .then(() => {
                this.assignmentList = this.assignmentList.filter(h => h !== assignment)
                if (this.selectedAssignment === assignment) { this.selectedAssignment = null; }
            })
    }

    updatePerformance() {
        if (this.assignmentList.length === 0) {
            this.pointsPossible = 0;
            this.pointsScored = 0;
            this.percent = 0;
            this.grade = 'N/A';
        }
        else {
            this.pointsPossible = this.assignmentList.reduce(this.addPointsPossible, 0);
            this.pointsScored = this.assignmentList.reduce(this.addPointsScored, 0);
            this.percent = this.pointsScored / this.pointsPossible;
            this.grade = this.getGrade(this.percent);
        }
    }

    private getGrade(percent: number): string {
        if (percent >= 0.9)
            return 'A';
        else if (percent >= .8)
            return 'B';
        else if (percent >= .7)
            return 'C';
        else if (percent >= .6)
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

export interface Assignment {
    id: number;
    name: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    iGrade: string;
}