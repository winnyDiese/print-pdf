"use client"

import jsPDF from "jspdf"

const GenerateAutherPdf = ()=>{

    // function generate(){
    //     const doc = new jsPDF({
    //         orientation: "landscape",
    //         unit: "in",
    //         format: [4,2]
    //     })

    //     doc.text("Hello world",1,1)
    //     doc.text("Hello world",1,1)
    //     doc.save("table.pdf")
    // }

    // function generate(){
    //     const doc = new jsPDF({
    //         orientation: "landscape",
    //         unit: "in",
    //         format: [4,2]
    //     })

    //     doc.text("Hello world",1,0.6)

    //     doc.text("Hello world",1,1)
    //     doc.text("Hello world",2,1)

    //     doc.text("Hello world",2,2)
    //     doc.text("Hello world",1,2)
    //     doc.save("table.pdf")
    // }


    const generate = ()=>{
        // var doc = new jsPDF('p','pt','a4')
        // doc.line(30,30,560,30)
        // doc.setLineWidth(400)

        var doc = new jsPDF('p','pt','a4')
        doc.setLineWidth(5.0)
        doc.line(30,30,560,30)
        doc.save('test.pdf')

    }

    return <div>
        <button type="primary" className="bg-sky-300 py-2 px-6 rounded-lg mt-5" onClick={generate}>Download Pdf</button>
    </div>
}

export default GenerateAutherPdf