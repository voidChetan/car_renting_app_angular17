import { Component, OnInit, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent  implements OnInit{

  bookingList: any[]=[];
  carList: any[]=[];
  carService = inject(CarService);
  bookingObj: any = {
    "CustomerName": "",
    "CustomerCity": "",
    "MobileNo": "",
    "Email": "",
    "BookingId": 0,
    "CarId": 0,
    "BookingDate": "2024-05-29T07:38:32.987Z",
    "Discount": 0,
    "TotalBillAmount": 0
  }


  ngOnInit(): void {
    this.getBookings(); 
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((res:any)=>{
      this.carList =  res.data;
    })
  }

  getBookings() {
    this.carService.getAllBooking().subscribe((res:any)=>{
      this.bookingList =  res.data;
    })
  }

  onSave() {
    this.carService.createBooking(this.bookingObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Booking Created Success");
        this.getBookings(); 
      } else {
        alert(res.message)
      }
    })
  }

}
