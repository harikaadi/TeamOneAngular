import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './component/doctor/doctor-dashboard/doctor-dashboard.component';
import { ExecutiveDashboardComponent } from './component/executive/executive-dashboard/executive-dashboard.component';
import { ExecutiveNavbarComponent } from './component/executive/executive-navbar/executive-navbar.component';
import { ExecutiveSidebarComponent } from './component/executive/executive-sidebar/executive-sidebar.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { OnboardInpatientComponent } from './component/executive/onboard-inpatient/onboard-inpatient.component';
import { InpatientRegistrationComponent } from './component/executive/inpatient-registration/inpatient-registration.component';
import { InpatientMedicalinfoComponent } from './component/executive/inpatient-medicalinfo/inpatient-medicalinfo.component';
import { InpatientRoominfoComponent } from './component/executive/inpatient-roominfo/inpatient-roominfo.component';
import { SummaryComponent } from './component/executive/summary/summary.component';
import { AdmissionGetallComponent } from './component/executive/admission-getall/admission-getall.component';
import { AssignTestToinpatientComponent } from './component/executive/assign-test-toinpatient/assign-test-toinpatient.component';
import { InpatientTestGetallComponent } from './component/executive/inpatient-test-getall/inpatient-test-getall.component';
import { UploadTestResultInpatientComponent } from './component/executive/upload-test-result-inpatient/upload-test-result-inpatient.component';
import { AddPrescriptionToinpatientComponent } from './component/executive/add-prescription-toinpatient/add-prescription-toinpatient.component';

export const routes: Routes = [
    {
        "path" : "" , component: LoginComponent
    },
    {
        "path" : "admin/dashboard" , component:AdminDashboardComponent
    },
    {
        "path" : "doctor/dashboard" , component:DoctorDashboardComponent
    },
    {
        "path" : "executive/dashboard" ,component :ExecutiveDashboardComponent
    },
    {
       "path" : "executive/navbar" , component :ExecutiveNavbarComponent
    },
    {
        "path" : "executive/sidebar" , component :ExecutiveSidebarComponent
     },
     {
        "path" : "inpatient/onboard" , component :OnboardInpatientComponent
     },
     {
        "path" : "inpatient/register" , component :InpatientRegistrationComponent
     },
     {
        "path" : "inpatient/medicalinfo" , component :InpatientMedicalinfoComponent
     },
     {
        "path" : "inpatient/roominfo" , component :InpatientRoominfoComponent
     },
     {
        "path" : "inpatient/summary" , component :SummaryComponent
     },
     {
         "path" : "admission/getall" , component :AdmissionGetallComponent
     },
     {
         "path" :"assigntest/inpatient/:pid/:did" ,component :AssignTestToinpatientComponent
     },
     {
         "path" :"inpatient/test/getall" ,component :InpatientTestGetallComponent
     },
     {
        "path" :"inpatient/test/resultuoload/:ptid", component :UploadTestResultInpatientComponent
     },
     {
         "path" :"addprescription/inpatient/:pid/:did" ,component :AddPrescriptionToinpatientComponent
     },
     {
        "path" : "logout/l" , component :LogoutComponent
     },
];
