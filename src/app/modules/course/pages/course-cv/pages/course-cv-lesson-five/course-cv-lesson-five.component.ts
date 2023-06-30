import { Component } from '@angular/core';
import { CvLessonRoutesDescriptionEnum } from '../../enums';

@Component({
  selector: 'couple-course-cv-lesson-five',
  templateUrl: './course-cv-lesson-five.component.html',
  styleUrls: ['./course-cv-lesson-five.component.scss']
})
export class CourseCvLessonFiveComponent {
  title: string;

  constructor() {
    this.title = CvLessonRoutesDescriptionEnum.FIVE;
  }
}
