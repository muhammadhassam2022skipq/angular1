import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { course } from '../models/courses';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(
    private router: Router,
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  edittedCourse(editedCourse: course) {
    this.courseService.editCourse(editedCourse);
    console.log("edited course: ", editedCourse)
    console.log('this.courseService.editCourse(editedCourse) ',this.courseService.editCourse(editedCourse))
    this.router.navigate(['/dashboard/courses/list'])
  }

}
