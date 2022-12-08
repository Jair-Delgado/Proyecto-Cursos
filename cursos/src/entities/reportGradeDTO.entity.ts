import { Activity } from './activity.entity';
import { Student } from './student.entity';
import { Grade } from './grade.entity';
import { GradeBookSetup } from './gradeBookSetup.entity';
import { SummaryGrade } from './summaryGrades.entity';
import {Area} from './area.entity'
import { Teacher } from './teacher.entity';

export interface ReportGradeDTO extends Student, Grade, Activity, GradeBookSetup, SummaryGrade, Area, Teacher {
    studentName: string;
    lastName: string;
}