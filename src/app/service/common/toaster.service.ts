import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private toastr: ToastrService) { }
  showSuccess(header: string = "", message: string = "Successful") {
    this.toastr.success(header, message);
  }
  showFailure(header: string = "", message: string = "Failed") {
    this.toastr.error(header, message);
  }
}
