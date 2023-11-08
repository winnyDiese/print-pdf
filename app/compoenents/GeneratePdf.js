"use client"

import jsPDF from "jspdf"
import "jspdf-autotable"

const GeneratePdf = ({person})=>{

    function generate(){
        const doc = new jsPDF()

        doc.autoTable({
            head:[['Name','Age','Contry']],
            body:
            person.map(({name,age,country})=>{
                return [
                    name,age,country
                ]
            })
        })

        doc.save("table.pdf")
    }

    return <div>
        <button type="primary" className="bg-zinc-400 py-2 px-6 rounded-lg mt-5" onClick={generate}>Download Pdf</button>
    </div>
}

export default GeneratePdf