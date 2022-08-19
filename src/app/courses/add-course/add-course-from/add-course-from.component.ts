import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { course} from '../../models/courses';
import {v4} from "uuid"

@Component({
  selector: 'app-add-course-from',
  templateUrl: './add-course-from.component.html',
  styleUrls: ['./add-course-from.component.css']
})
export class AddCourseFromComponent implements OnInit {
  @Output() addedCourse: EventEmitter<course> = new EventEmitter<course>();
  @ViewChild('courseTitle', {static: false}) courseTitle!: ElementRef;
  @ViewChild('courseContent', {static: false}) courseContent!: ElementRef;
  @ViewChild('courseDuration', {static: false}) courseDuration!: ElementRef;
  @ViewChild('isAvailable', {static: false}) isAvailable!: ElementRef;
  // id: string  = "";
  // courseTitle: string = "";
  // courseContent: string = "";
  // courseDuration: string = "";
  // isAvailable: boolean= false
  constructor() { }

  ngOnInit(): void {
  }
  onCourseAddition(): void {
    // const course = {
    //   id:v4(),
    //   courseTitle : this.courseTitle,
    //   courseContent: this.courseContent,
    //   courseDuration: this.courseDuration,
    //   isAvailable: this.isAvailable
    // }
    // this.addedCourse.emit(course)
    
    
    //new 
    const courses: course = new course();
    courses.courseContent= this.courseContent.nativeElement.value;
    courses.courseDuration= this.courseContent.nativeElement.value;
    courses.courseTitle= this.courseTitle.nativeElement.value;
    courses.isAvailable= this.isAvailable.nativeElement.checked;
    this.addedCourse.emit(courses);
  }

}
