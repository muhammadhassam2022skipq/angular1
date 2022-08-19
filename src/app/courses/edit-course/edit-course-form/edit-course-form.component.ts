import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { course } from '../../models/courses';
import  {v4} from 'uuid'
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: ['./edit-course-form.component.css']
})
export class EditCourseFormComponent implements OnInit {
  
  // id: string  = "";
  // courseTitle: string = "";
  // courseContent: string = "";
  // courseDuration: string = "";
  // isAvailable: boolean= false
  @ViewChild('courseTitle', {static: false}) courseTitle!:ElementRef;
  @ViewChild('courseContent', {static: false}) courseContent!: ElementRef;
  @ViewChild('courseDuration', {static: false}) courseDuration!: ElementRef;
  @ViewChild('isAvailable', {static: false}) isAvailable!: ElementRef;
  @Output('edittedCourse') edittedCourse: EventEmitter<course> = new EventEmitter<course>();
  currentCourse! : course
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.params['courseId'];
    this.currentCourse = this.courseService.courses.find(x => x.id === courseId) ?? new course();
    console.log('this.currentUser', this.currentCourse);
  }
  onCourseEdition() {
    // const course = {
    //   id: v4(),
    //   courseTitle : this.courseTitle,
    //   courseContent: this.courseContent,
    //   courseDuration: this.courseDuration,
    //   isAvailable: this.isAvailable
    // }
    // this.edittedCourse.emit(course)

    //new

    const Courses: course = new course();
    Courses.id = this.activatedRoute.snapshot.params['courseId'];
    Courses.courseContent= this.courseContent.nativeElement.value;
    Courses.courseDuration= this.courseContent.nativeElement.value;
    Courses.courseTitle= this.courseTitle.nativeElement.value;
    Courses.isAvailable= this.isAvailable.nativeElement.checked;
    console.log("courses ",Courses)
    this.edittedCourse.emit(Courses);
  }

}
