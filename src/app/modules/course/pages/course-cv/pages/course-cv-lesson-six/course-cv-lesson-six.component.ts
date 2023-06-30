import { Component } from '@angular/core';
import { CvLessonRoutesDescriptionEnum } from '../../enums';

@Component({
  selector: 'couple-course-cv-lesson-six',
  templateUrl: './course-cv-lesson-six.component.html',
  styleUrls: ['./course-cv-lesson-six.component.scss']
})
export class CourseCvLessonSixComponent {
  title: string;

  constructor() {
    this.title = CvLessonRoutesDescriptionEnum.SIX;
  }
}
