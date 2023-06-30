import { Component } from '@angular/core';
import { CvLessonRoutesDescriptionEnum } from '../../enums';

@Component({
  selector: 'couple-course-cv-lesson-four',
  templateUrl: './course-cv-lesson-four.component.html',
  styleUrls: ['./course-cv-lesson-four.component.scss']
})
export class CourseCvLessonFourComponent {
  title: string;

  constructor() {
    this.title = CvLessonRoutesDescriptionEnum.FOUR;
  }
}
