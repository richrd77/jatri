export class In {
    name: string;
    vehicleNumber: string;
    phoneNumber: string;
    InTime: Date;

    constructor({ name, gadi, number }: any) {
        this.name = name; this.vehicleNumber = gadi; this.phoneNumber = number;
        this.InTime = new Date();
    }
}