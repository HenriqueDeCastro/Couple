import { Component } from '@angular/core';
import { CvLessonRoutesDescriptionEnum } from '../../enums';

@Component({
  selector: 'couple-course-cv-lesson-three',
  templateUrl: './course-cv-lesson-three.component.html',
  styleUrls: ['./course-cv-lesson-three.component.scss']
})
export class CourseCvLessonThreeComponent {
  title: string;

  constructor() {
    this.title = CvLessonRoutesDescriptionEnum.THREE;
  }
}
