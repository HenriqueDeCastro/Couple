import { Component } from '@angular/core';
import { CvLessonRoutesDescriptionEnum } from '../../enums';

@Component({
  selector: 'couple-course-cv-lesson-two',
  templateUrl: './course-cv-lesson-two.component.html',
  styleUrls: ['./course-cv-lesson-two.component.scss']
})
export class CourseCvLessonTwoComponent {
  title: string;

  constructor() {
    this.title = CvLessonRoutesDescriptionEnum.TWO;
  }
}
