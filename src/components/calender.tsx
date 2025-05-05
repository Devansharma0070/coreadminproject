import  { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function IconDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    
                </label>
                <Calendar placeholder="MM/DD/YYYY" id="buttondisplay"value={date} onChange={(e) => setDate(e.value)} />
                </div>
                </div>
    )}
                