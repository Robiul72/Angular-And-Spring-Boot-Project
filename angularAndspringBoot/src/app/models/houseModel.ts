
export class HouseModel{
 
    id?: number;
    build_Name?: string;
    floor_No?: string;
    unit_No?: string;
    bedroom?: string;
    location?: string;
    description?: string;
    monthly_rent?: string;
    electricity_rent?: string;
    water_rent?: string;
    garbage_rent?: string;
    total_cost_rent?: string;
    date?: string;
    
    ownerName?: {
        id: number,
        h_Rent_NID: string;
        h_Rent_Owner_Name: string;
        h_Rent_Date: string;
        h_Rent_Email: string;
        h_Rent_Mobile: string;
        image: string;
        h_Date: string;
    }


}