import { Component } from '@angular/core';
import { DoctorService } from '../../../service/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-schedule',
  standalone: true,
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './doctor-schedule.component.html',
  styleUrl: './doctor-schedule.component.css'
})
export class DoctorScheduleComponent {

  selectedDate:string='';
  schedules: any[] = [];
  doctorId: number | null = null;
  slots: string[] = [];
  selectedSlot: string = '';
  schedules2: any[] = [];
  successMsg:string='';
  errorMsg:string='';

  /*constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    // Get the doctorId from the route parameters
    this.doctorId = +this.route.snapshot.paramMap.get('id')!; // Assuming the route contains the doctor id
    this.fetchSchedules();
  }

  fetchSchedules() {
    if (this.doctorId) {
      this.doctorService.getDoctorSchedules(this.doctorId).subscribe({
        next: (data) => {
          this.schedules = data;
          //this.slots = this.transformToSlots(this.schedules);
          
          console.log(this.schedules);
          console.log(this.slots);
        },
        error: (error) => {
          console.error('Error fetching schedules', error);
        }
      });
    }
    if(this.selectedDate){
      this.doctorService.getDoctorSchedulesSlots(this.doctorId,this.selectedDate).subscribe({
        next: (data) => {
         this.schedules2=data;
          this.slots = this.transformToSlots(this.schedules2);
          
          //console.log(this.schedules);
          console.log(this.slots);
        },
        error: (error) => {
          console.error('Error fetching schedules', error);
        }
      })
    }
  }
  transformToSlots(schedules2: any[]): string[] {
    return schedules2.map(schedule => {
      const fromTime = schedule.fromTime.substring(0, 5); // Extract HH:mm from '10:30:00'
      const toTime = schedule.toTime.substring(0, 5);     // Extract HH:mm from '11:00:00'
      return `${fromTime}-${toTime}`;
    });
  }*/

    

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    // Get doctorId from the route parameters
    this.doctorId = +this.route.snapshot.paramMap.get('id')!;
    if (this.doctorId) {
      this.fetchAvailableDates(); // Fetch dates on component load

    }
    
  }
  if(selectedDate){
    console.log(this.selectedDate);
    //this.fetchSlotsForDate(this.selectedDate);
  }
  // Fetch available dates for the doctor
  fetchAvailableDates() {
    this.doctorService.getDoctorSchedules(this.doctorId!).subscribe({
      next: (data) => {
        this.schedules = data;
          //this.slots = this.transformToSlots(this.schedules);
          console.log("schedules");
          console.log(this.schedules);
          console.log("slots")
          console.log(this.slots);
      },
      error: (error) => {
        console.error('Error fetching dates', error);
      },
    });
  }

  // Fetch slots for the selected date
  fetchSlotsForDate(selectedDate:any) {
    console.log("inside fetchSlotsForDate ")
    console.log(this.selectedDate);
    if (this.selectedDate) {
      this.doctorService
        .getDoctorSchedulesSlots(this.doctorId!, this.selectedDate)
        .subscribe({
          next: (data) => {
            this.schedules2=data;
          this.slots = this.transformToSlots(this.schedules2);
          
          //console.log(this.schedules);
          console.log(this.slots);
          },
          error: (error) => {
            console.error('Error fetching slots', error);
          },
        });
    }
  }

  // Transform schedules to "HH:mm-HH:mm" format
  transformToSlots(schedules2: any[]): string[] {
    return schedules2.map((schedule) => {
      const fromTime = schedule.fromTime.substring(0, 5); 
      const toTime = schedule.toTime.substring(0, 5); 
      return `${fromTime}-${toTime}`; // Format "HH:mm-HH:mm"
    });
  }
  /*confirmAppointment() {
    this.doctorService.bookAppointment(this.doctorId,{
      "dateOfAppointment":this.selectedDate,
      "slot":this.selectedSlot

    }).subscribe({
      next:(data)=>{
      this.successMsg='Appointment Booked Successfully';
      this.errorMsg='Undefined';
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }*/
    /*confirmAppointment() {
      if (!this.doctorId || !this.selectedDate || !this.selectedSlot) {
        this.errorMsg = 'Please select a doctor, date, and slot before confirming the appointment.';
        return; // Prevent further execution
      }
    
      const appointmentData = {
        "dateOfAppointment": this.selectedDate,
        "slot": this.selectedSlot
      };
    
      this.doctorService.bookAppointment(this.doctorId, appointmentData).subscribe({
        next: (data) => {
          this.successMsg = 'Appointment Booked Successfully';
          this.errorMsg = ''; // Clear error message
        },
        error: (err) => {
          console.error('Error booking appointment:', err);
          this.successMsg = ''; // Clear success message
          this.errorMsg = 'Error while booking appointment. Please try again.';
        }
      });
    }*/
      confirmAppointment() {
        if (!this.doctorId || !this.selectedDate || !this.selectedSlot) {
          this.errorMsg = 'Please select a doctor, date, and slot before confirming the appointment.';
          return; // Prevent further execution
        }
      
        const appointmentData = {
          "dateOfAppointment": this.selectedDate,
          "slot": this.selectedSlot
        };
      
        this.doctorService.bookAppointment(this.doctorId, appointmentData).subscribe({
          next: (data) => {
            console.log('Response from booking appointment:', data); // Log the response
            
            // Use the returned data as needed
            const bookedDate = data.dateOfAppointment; // The date of the appointment
            const bookedSlot = data.slot; // The time slot
            this.successMsg = `Appointment Booked Successfully on ${bookedDate} for slot ${bookedSlot}`;
            this.errorMsg = ''; // Clear error message
          },
          error: (err) => {
            console.error('Error booking appointment:', err);
            this.successMsg = ''; // Clear success message
            this.errorMsg = 'Error while booking appointment. Please try again.';
          }
        });
      }
      
    
}
