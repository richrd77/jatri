import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class OtpService {
    otp: string;
    topUrl = 'https://api.twilio.com/2010-04-01/Accounts/AC7b96ee8be0437f1aa521f5575c6ead1e/Messages.json';

    constructor() {
        this.otp = '';
    }

    generateOtp(): void {
        this.otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(this.otp);
    }

    verifyOtp(inputOtp: string): boolean {
        return this.otp === inputOtp;
    }
}