import { Component } from '@angular/core';
import { CvLessonRoutesDescriptionEnum } from '../../enums';

@Component({
  selector: 'couple-course-cv-lesson-one',
  templateUrl: './course-cv-lesson-one.component.html',
  styleUrls: ['./course-cv-lesson-one.component.scss']
})
export class CourseCvLessonOneComponent {
  title: string;

  constructor() {
    this.title = CvLessonRoutesDescriptionEnum.ONE;
  }
}
